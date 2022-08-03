import "../../App.css";
import img from "../../home.jpeg";
import Navbar from "../Navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div>
        <br />
        <h1 className="home">How to invest :</h1>
        <br />
        <br />
        <br />
        <ol>
          <li className="home1">Decide how much to invest.</li>
          <li className="home1">Set a goal for your money.</li>
          <li className="home1">Decide on how much help your going to need.</li>
          <li className="home1">Pick & Open an investment account.</li>
          <li className="home1">
            Choose investments that match your tolerance for risk.
          </li>
          <li className="home1">Invest in stocks and stock funds.</li>
        </ol>
      </div>
      <br />
      <footer>
        <img
          src={img}
          style={{
            height: "250px",
            width: "106%",
            marginLeft: "-44px",
            marginBottom: "-130px",
            marginTop: "50px",
          }}
          alt="UnloadedImage"
        />
      </footer>
    </div>
  );
}

export default Home;
