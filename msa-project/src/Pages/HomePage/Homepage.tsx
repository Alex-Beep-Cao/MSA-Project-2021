import { gql, useMutation } from "@apollo/client";
import { Box, Typography } from "@material-ui/core";

import PostSelect from "../../stories/PostSelect";
import { useCallback, useEffect } from "react";

const LOGIN = gql`
  mutation ($code: String!) {
    login(input: { code: $code }) {
      jwt
    }
  }
`;

export const HomePage = () => {
  const githubCode = window.location.search
    .substring(1)
    .split("&")[0]
    .split("code=")[1];
  const [login] = useMutation(LOGIN);

  const getToken = useCallback(() => {
    login({
      variables: {
        code: githubCode,
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
  }, [githubCode, login]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      return;
    }

    getToken();
  }, [getToken]);

  return (
    <Box>
      <Typography variant="h3">Home Page</Typography>
      <Typography variant="h2">Welcome to see our lovely dogs ~</Typography>
      <p>
        🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶
      </p>
      <Box sx={{ m: 10 }}>
        <PostSelect />
      </Box>
    </Box>
  );
};
