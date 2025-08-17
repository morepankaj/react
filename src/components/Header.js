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
    <div className="flex justify-between bg-pink-100">
      <div className="logo-container">
        <img className="w-36" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flec items-center">
        <ul className="flex p-4 m-12 space-x-4">
          <li className="px-4">online status: {isOnline ? "✅" : "❌"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-4">
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
