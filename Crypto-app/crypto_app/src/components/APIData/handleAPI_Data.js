import { useState, useEffect } from "react";
import Navbar from "./../Navbar/Navbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./API_data.css";
import { SearchOutlined } from "@ant-design/icons";

const HandleAPI = () => {
  const [crypto, setCrypto] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  // eslint-disable-next-line
  const suffix = (
    <SearchOutlined
      style={{
        fontSize: 16,
        color: "#fff",
      }}
    />
  );

  useEffect(() => {
    //Hook to fetch API data

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3001/api", requestOptions)
      .then((response) => response.json())
      .then((response) => setCrypto(response.coins))
      .catch((error) => console.log("error", error));
  }, []);

  const searchCrypto = (searchValue) => {
    //Function to filter API data
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = crypto?.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(crypto);
    }
  };

  return (
    <div>
      <Navbar />
      <br />

      <div className="SignInForm">
        <input
          style={{ padding: "10px", width: "100px" }}
          type={"text"}
          onChange={(e) => searchCrypto(e.target.value)}
          placeholder="Search"
        />
        <div className="facts">
          <br />
          <h1>
            <strong>Did You know:</strong>
          </h1>
          <br />
          <h2>There are over 19,000 different cryptocurrencies.</h2>
          <br />
          <br />
          <h3>To the left is the top 200 !</h3>
        </div>
        <TableContainer
          style={{ width: "50%", marginTop: "20px" }}
          component={Paper}
        >
          {" "}
          {/*Rendering API data via Material UI */}
          <Table sx={{}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }}>Logo</TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Currency
                </TableCell>
                <TableCell align="left" style={{ fontWeight: "bold" }}>
                  Market Cap
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(filteredResults.length <= 0 ? crypto : filteredResults)?.map(
                (row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <img
                        style={{ height: "40px" }}
                        src={row.icon}
                        alt="unloadedImage"
                      />
                    </TableCell>
                    <TableCell
                      align=""
                      style={{ fontWeight: "bold", paddingLeft: "20%" }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="left" style={{ fontWeight: "bold" }}>
                      {Math.floor(row.marketCap) + " $"}
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default HandleAPI;
