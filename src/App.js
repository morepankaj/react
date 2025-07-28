import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

//jsx => react.createElemnt => obj => htmlElement(render)

/**
 * Header
 *  - logo
 *  - home
 *  - about us
 *  - contact us
 *  - cart
 *
 * Body
 *  - search
 *  - list
 *
 * Footer
 *  - copyrights
 *  - links
 *  - career
 */

//even Title can be call as {Title()} || <Title /> || <Title></Title>

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
