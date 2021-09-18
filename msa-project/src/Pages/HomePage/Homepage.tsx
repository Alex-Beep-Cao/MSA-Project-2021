import { gql, useMutation } from "@apollo/client";
import { Paper, Typography } from "@material-ui/core";

import PostSelect from "../../stories/PostSelect";
import { useEffect } from "react";

const LOGIN = gql`
  mutation ($code: String!) {
    login(input: { code: $code }) {
      jwt
    }
  }
`;

// const CLIENT_ID = "db91b85f047825b818b2";
// const REDIRECT_URI = "http://localhost:3000/home";

export const HomePage = () => {
  const [login] = useMutation(LOGIN);
  const code = localStorage.getItem("code");

  function getToken() {
    login({
      variables: {
        code: code,
      },
    })
      .then((r) => {
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        if (r.errors) {
          console.log(r.errors.join("/n"));
          return;
        }
        if (r) {
          console.log(r);
          localStorage.setItem("token", r.data.login.jwt);
        }
      })
      .catch((reason) => console.log("bbbbbbbbbbbbbbbbbbbbbbbb", reason));
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      return;
    }

    getToken();
  }, []);

  return (
    <Paper>
      <Typography variant="h3">Home Page</Typography>
      <Typography variant="h2">Why you are here?</Typography>
      <PostSelect />
    </Paper>
  );
};
