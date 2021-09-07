import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { InMemoryCache } from "@apollo/client/cache";
import { ApolloProvider } from "@apollo/client";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { ApolloClient } from "apollo-client";
import { Agent } from "https";

const agent = new Agent({
  rejectUnauthorized: false,
});

const httpLink = new HttpLink({
  fetch,
  uri: process.env.REACT_APP_GRAPHQL_URL,
  fetchOptions: {
    agent: agent,
  },
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("Token"); // return the headers to the context so httpLink can read them

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "failed",
    },
  };
});

const client: any = new ApolloClient({
  cache: new InMemoryCache() as any,
  link: authLink.concat(httpLink),
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
              
      <App />
           
    </ApolloProvider>
    ,
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
