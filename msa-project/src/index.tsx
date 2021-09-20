import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider } from "@apollo/client";

import { setContext } from "apollo-link-context";

const httpLink = createHttpLink({
  //uri: "https://localhost:44361/graphql/",
  uri: "https://msa-project-202120210920155946.azurewebsites.net/graphql/",
});

const authLink: any = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      ...headers,
      //"Access-Control-Allow-Origin": "*",
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client: any = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache() as any,
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
        
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
