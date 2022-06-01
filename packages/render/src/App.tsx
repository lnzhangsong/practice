import { HashRouter, useRoutes } from "react-router-dom";
import routes from "./routes/index";
import "./App.css";

function AppWrapper() {
  const elements = useRoutes(routes);
  return elements;
}

const App = () =>
(
  <HashRouter>
    <AppWrapper />
  </HashRouter>
);

export default App;
