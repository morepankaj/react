import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent component props:", props);
  }

  componentDidMount() {
    console.log("parent component mounted");
  }

  render() {
    console.log("parent component render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p>This is a simple about us page.</p>
        <User name="Pankaj More (fn based component)" location="mumbai" />
        <UserClass name="First" location="worli,Mumbai" />
        <UserClass name="Second" location="worli,Mumbai" />
        <UserClass name="third" location="worli,Mumbai" />
      </div>
    );
  }
}

/* const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>This is a simple about us page.</p>
      <User name="Pankaj More (fn based component)" location="mumbai" />
      <UserClass
        name="Pankaj More (class based component))"
        location="worli,Mumbai"
      />
    </div>
  );
}; */

export default About;
