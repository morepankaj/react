import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div className="user-card">
      <h2>Count: {count}</h2>
      <h2>Count2: {count2}</h2>
      <h1>Name: {props.name}</h1>
      <h2>Location : {props.location}</h2>
      <h3>Contact: @pankaj.more</h3>
    </div>
  );
};

export default User;
