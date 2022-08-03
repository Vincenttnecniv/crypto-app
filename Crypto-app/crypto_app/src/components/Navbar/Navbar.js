import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
        <div className="navbar">
          <ul>{/*Links*/}
            <li><Link className='active' to="/">HOME</Link></li>
            <li><Link className='active' to="/register">REGISTER</Link></li>
            <li><Link to="/sign_in">SIGN IN</Link></li>
          <li><Link className='active' to="/crypto_currency">CRYPTO CURRENCY</Link></li>
          <li><Link className='active' to="/users">Users</Link></li>
          </ul>      
      </div>
    </>
  );
};

export default Navbar;
