import { RouteObject, Navigate } from "react-router-dom";
import Root from "../pages/root";
import Home from "../pages/home";
import Manage from "../pages/manage";
import Analysis from "../pages/analysis";
import LastUsed from "../pages/lastUsed";

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
      {
        path: "/analysis",
        element: <Analysis />,
      },
      {
        path: "/last_used",
        element: <LastUsed />,
      },
    ],
  },
];

export default routes;