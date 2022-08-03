const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const model = require("./models/userDetails.js").OU;
app.use(cors());

//Connection URI to connect to MongoDB
mongoose.connect(
  "mongodb+srv://vin123:vin123@cluster0.m821vw8.mongodb.net/?retryWrites=true&w=majority",
  (err) => {
    if (err) return console.log("Error: ", err);
    console.log("MongoDB Connection Established");
  }
);

//Getting API data from coinstats
app.get("/api", (req, res) => {
  var request = require("request");
  var options = {
    method: "GET",
    url: "https://api.coinstats.app/public/v1/coins?skip=0&limit=200&currency=USD",
    headers: {},
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    res.send(response.body);
  });
});

//The Sign In REST API
app.get("/signIn/:username/:password", (req, res) => {
  model.findOne(
    {
      username: req.params.username,
      password: req.params.password,
      role: "Admin",
    },
    (err, data) => {
      if (data) {
        jwt.sign(
          { username: req.params.username, password: req.params.password },
          "Admin",
          { expiresIn: "10h" },
          (err, token) => {
            res.send("Signed in as Admin user");
          }
        );
      } else {
        model.findOne(
          {
            username: req.params.username,
            password: req.params.password,
            role: "Default",
          },
          (err, data) => {
            if (data) {
              jwt.sign(
                {
                  username: req.params.username,
                  password: req.params.password,
                },
                "Default",
                { expiresIn: "10h" },
                (err, token) => {
                  res.send("Signed in as Defualt user");
                }
              );
            } else {
              res.send("Incorrect username or password");
            }
          }
        );
      }
    }
  );
});

//The Register REST API
app.post("/register/:username/:password/:email", (req, res) => {
  const addData = new model({
    username: req.params.username,
    password: req.params.password,
    email: req.params.email,
    role: "Default",
  });

  //Save addData object to the database
  addData.save((err, role) => {
    err
      ? res.send("Couldn't Register due to an error")
      : res.json(`Signed in as ${addData.role}`);
  });
}); 

//REST API to get all users
app.get("/users", async (req, res) => {
  try {
    const allUsers = await model.find();
    return res.send(allUsers);
  } catch (error) {
    res.json({ message: error });
  }
});

//Put request to update users
app.put(
  "/update/:username/:changedUsername/:password/:email/:role",
  (req, res) => {
    let getUser = { username: req.params.username },
      update = {
        $set: {
          username: req.params.changedUsername,
          password: req.params.password,
          email: req.params.email,
          role: req.params.role,
        },
      },
      user = {
        username: req.params.changedUsername,
        password: req.params.password,
        email: req.params.email,
        role: req.params.role,
      };

    model
      .updateOne(getUser, update, { multi: true })
      .then((data) => {
        if (data.modifiedCount === 0) {
          res.status(400).send(req.params.username + " was not found !");
        } else {
          res.status(200).send("Updated Successfully !");
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error: " + err);
      });
  }
);

app.delete("/delete/:username", (req, res) => {
  //Delete request to delete a user
  model
    .findOneAndRemove({ username: req.params.username })
    .then((user) => {
      if (!user) {
        res.status(400).send(req.params.username + " was not found !");
      } else {
        res.status(200).send(req.params.username + " was deleted !");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
});

//Checks if the token is a verified function
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers["authorization"];
  // Check if the bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    const bearer = bearerHeader.split(" ");
    // Get the token from an array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

//Connecting to localhost 3001
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
