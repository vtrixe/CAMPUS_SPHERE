import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Login from "../Pages/Login";
  import Register from "../Pages/Register";
import HomeComponent from "../components/HomeComponent";


export const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <HomeComponent />,
    },
  ]);