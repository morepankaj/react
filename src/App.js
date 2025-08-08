import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/Resturantmenu";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router";

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
    <Outlet />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
