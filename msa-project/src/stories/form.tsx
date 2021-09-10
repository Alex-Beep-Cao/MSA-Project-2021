import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Container,
  Typography,
  Grid,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { gql, useMutation, useQuery } from "@apollo/client";
import { log } from "console";
import { GitHub } from "@material-ui/icons";

// export interface SubmitFormProps {}

// export interface AddPost_addPost {
//   __typename: "Post";
//   id: string;
//   name: string;
//   content: string;
//   modified: any;
//   created: any;
// }

// export const POST = gql`
//   fragment postFields on Post {
//     id
//     title
//     content
//     modified
//     created
//   }
// `;

// const POST = gql`
//   fragment postFields on Project {
//     id
//     title
//     content
//     modified
//     created
//   }
// `;

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
            id="standard-basic"
            label="Post Name"
            fullWidth
            error={postTitle === ""}
            value={postTitle}
            helperText="Invalid Post Name"
            onChange={(e) => setPostTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-basic"
            label="Content"
            fullWidth
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
