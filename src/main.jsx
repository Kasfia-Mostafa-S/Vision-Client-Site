import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./HomePage/Home";
import Login from "./Login/Login";
import AddProducts from "./AddProduct/AddProducts";
import Main from "./Main/Main";
import AllProducts from "./AllProduct/AllProducts";
import Details from "./Details/Details";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "addProducts",
        element: <AddProducts />,
      },
      {
        path: "allProducts",
        element: <AllProducts />,
      },
      {
        path: "allProducts/:id",
        element:<Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
