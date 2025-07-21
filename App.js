import React from "react";
import ReactDOM from "react-dom/client";

//jsx => react.createElemnt => obj => htmlElement(render)

const Title = () => (
  <h1 className="head" tabIndex="5">
    Hello World, React...!!
  </h1>
);

const num = 1000;

//const jsxHeading = <h1>Hello World, React</h1>;

const HeadingComponent = () => (
  <div id="container">
    {num}
    <Title />
    <h1 id="heading">Hello World, React</h1>
  </div>
);
//even Title can be call as {Title()} || <Title /> || <Title></Title>
//console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
