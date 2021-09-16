import { useState } from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { gql, useMutation } from "@apollo/client";

// mutation
const ADD_POST = gql`
  mutation AddPost($title: String!, $content: String) {
    addPost(input: { title: $title, content: $content }) {
      title
      content
    }
  }
`;

function AddTodo() {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [submit, setSubmit] = useState(false);
  const [addPost, { data, loading, error }] = useMutation(ADD_POST);

  // if (loading || error) {
  //   return <div>{error ? error.message : "Loading..."}</div>;
  // }

  const handleSubmit = async () => {
    await addPost({
      variables: {
        title: postTitle,
        content: postContent,
      },
    });
    setSubmit(true);
  };

  return (
    <Container className="form_container">
      <Typography variant="h4">Submit your Post here!</Typography>
      {submit ? (
        <Grid>Congratulations! Your Post has been submitted successfully.</Grid>
      ) : null}

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="outlined-required"
            label="Post Name"
            fullWidth
            variant="outlined"
            error={postTitle === ""}
            value={postTitle}
            helperText="Invalid Post Name"
            onChange={(e) => setPostTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="outlined-required"
            label="Content"
            fullWidth
            variant="outlined"
            error={postContent === ""}
            value={postContent}
            helperText="Invalid post Name"
            onChange={(e) => setPostContent(e.target.value)}
          />
        </Grid>
      </Grid>
      <button onClick={handleSubmit}> SUBMIT </button>
    </Container>
  );
}

export default AddTodo;
