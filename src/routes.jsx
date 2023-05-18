import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
