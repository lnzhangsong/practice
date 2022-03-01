import { RouteObject, Navigate } from "react-router-dom";
import Root from "../pages/root";
import Home from "../pages/home";
import Manage from "../pages/manage";

const routes: RouteObject[] = [
  {
    path: "*",
    element: <Navigate to="/home" />,
  },
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/manage",
        element: <Manage />,
      },
    ],
  },
];

export default routes;
