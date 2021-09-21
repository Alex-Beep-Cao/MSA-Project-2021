import { Box, Typography } from "@material-ui/core";
import AddTodo from "../../stories/FormAddtoDo";

export const SubmitPage = () => {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <div>
      <Box>
        <Typography variant="h3"> Submit Page </Typography>
        <p>
          🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮
          🦮🦮🦮🦮🦮🦮🦮🦮🦮
        </p>
      </Box>
      <Box sx={{ m: 4 }}>
        <AddTodo />
      </Box>
    </div>
  );
};
