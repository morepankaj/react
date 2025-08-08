import User from "./User";
import UserClass from "./UserClass";
const About = () => {
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
};

export default About;
