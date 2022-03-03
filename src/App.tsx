import React from "react";
import { HashRouter, useRoutes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import routes from "./routes/index";
import "./App.scss";

function AppWrapper() {
  const elements = useRoutes(routes);
  return elements;
}

const App = () => {
  return (
    <ChakraProvider>
      <HashRouter>
        <AppWrapper />
      </HashRouter>
    </ChakraProvider>
  );
};

export default App;
