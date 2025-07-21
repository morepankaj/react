import React from "react";
import ReactDOM from "react-dom/client";

//react.createElement => obj => htmlElement(render)

const parent = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World, React"
);
//console.log(parent);

//jsx => react.createElemnt => obj => htmlElement(render)

const jsxHeading = <h1 id="heading">Hello World, React</h1>;
//console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
