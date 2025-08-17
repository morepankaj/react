import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
      <img
        class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
        src="/img/erin-lindford.jpg"
        alt="avatar"
      />
      <div class="space-y-2 text-center sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg font-semibold text-black">{props.name}</p>
          <p class="font-medium text-gray-500">Engineer</p>
          <p class="font-medium text-gray-500">{props.location}</p>
          <p class="font-medium text-gray-500">Contact: @pankaj.more</p>
        </div>
      </div>
    </div>
  );
};

export default User;

/*
    <div className="user-card m-4 p-4 rounded-lg bg-gray-50">
      <h2>Count: {count}</h2>
      <h2>Count2: {count2}</h2>
      <h1>Name: {props.name}</h1>
      <h2>Location : {props.location}</h2>
      <h3>Contact: @pankaj.more</h3>
    </div>

*/
