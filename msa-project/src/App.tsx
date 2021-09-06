import React from "react";

import "./App.css";
import Button from "@material-ui/core/Button";
import Header from "./stories/Msa-header";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/Homepage";
import { SubmitPage } from "./Pages/SubmitPage/SubmitPage";

import reportWebVitals from "./reportWebVitals";
import { ApolloCache, InMemoryCache } from "@apollo/client/cache";
import { ApolloProvider } from "@apollo/client";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { ApolloClient } from "apollo-client";

function App() {
  const client = new ApolloClient({
    // cache,
    uri: "http://localhost:44361/graphql",
    headers: {
      authorization: localStorage.getItem("token") || "",
      "client-name": "Space Explorer [web]",
      "client-version": "1.0.0",
    },
  });
  return (
    <div className="App">
      <Header />
      {/* <Button variant="outlined" color="primary">
        Default */}
      {/* </Button> */}
      <div>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/submit" component={SubmitPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
