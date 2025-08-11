import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  console.log(isLoggedIn, "header rendered");

  /*
    - if no dependancy array => useEffect is called every render
    - if dependancy array is empty [] => useEffect is called on intial render (just once)
    - if dependancy array is there (not empty) => then it will called wheneer it changes
  */
  useEffect(() => {
    console.log("useEffect called");
  }, [isLoggedIn]);

  const isOnline = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>online status: {isOnline ? "✅" : "❌"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              isLoggedIn === "Login"
                ? setIsLoggedIn("Logout")
                : setIsLoggedIn("Login");
            }}
          >
            {isLoggedIn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
