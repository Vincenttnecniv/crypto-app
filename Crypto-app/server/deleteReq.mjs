import express from "express";
const app = express();

export default function Delete() {
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
}
