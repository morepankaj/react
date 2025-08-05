import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";

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

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
