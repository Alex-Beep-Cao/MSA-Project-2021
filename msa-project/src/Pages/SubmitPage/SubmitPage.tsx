import { Paper, Typography } from "@material-ui/core";
import AddTodo from "../../stories/FormAddtoDo";

export const SubmitPage = () => {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Paper>
      <Typography variant="h3">Submit Page</Typography>
      <AddTodo />
    </Paper>
  );
};
