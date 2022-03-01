import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
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
      <BrowserRouter>
        <AppWrapper />
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
