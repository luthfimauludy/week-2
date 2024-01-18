import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Category from "./pages/Category";
import Detail from "./pages/Detail";
import Navbar from "./components/Navbar";
import Favorite from "./pages/Favorite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Category />,
  },
  {
    path: "/:id",
    element: <Detail />,
  },
  {
    path: "/favorites",
    element: <Favorite />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
