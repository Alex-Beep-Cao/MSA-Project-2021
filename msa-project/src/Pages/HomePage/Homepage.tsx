import React from "react";
import { Typography } from "@material-ui/core";
import PostSelect from "../../PostSelect";

export const HomePage = () => {
  return (
    <div className="App-cards">
      <Typography variant="h3">Home Page</Typography>;
      <PostSelect />
    </div>
  );
};
