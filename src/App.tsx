import React from "react";
import { HashRouter, useRoutes } from "react-router-dom";
import routes from "./routes/index";
import "./App.scss";

function AppWrapper() {
  const elements = useRoutes(routes);
  return elements;
}

const App = () => {
  return (
    <HashRouter>
      <AppWrapper />
    </HashRouter>
  );
};

export default App;
