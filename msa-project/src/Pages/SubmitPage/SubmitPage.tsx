import React from "react";
import { Typography } from "@material-ui/core";
import AddTodo from "../../stories/form";

export const SubmitPage = () => {
  return (
    <div>
      <Typography variant="h3">Submit Page</Typography>;
      <AddTodo />
    </div>
  );
};
