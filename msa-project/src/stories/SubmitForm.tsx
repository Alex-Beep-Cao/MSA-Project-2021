import React, { Fragment, useState } from "react";
import { TextField, Typography, Grid, Container } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Button } from "./Button";
import { gql, useMutation } from "@apollo/client";
//import { AddPost } from "./api/AddPost";
//import "./submit-form.css";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& .MuiFormHelperText-root": {
      color: "white",
    },
  },
}));
export interface SubmitFormProps {}

export const SubmitForm: React.FC<SubmitFormProps> = () => {
  const classes = useStyles();
  const [title, setTitle] = useState<string>("");
  const [githubUrl, setGithubUrl] = useState<string>("");
  const [content, setContent] = useState("");
  const [submit, setSubmit] = useState(false);

  const [hasFocus, setHasFocus] = useState(false);

  const isGithubUrl = (value: string) => {
    const urlRegex =
      /^(http[s]{0,1}:\/\/){0,1}(github.com\/)([a-zA-Z0-9\-~!@#$%^&*+?:_\/=<>\.]*)?$/i;
    return urlRegex.test(value);
  };

  // const [addPost] = useMutation<AddPost>(ADD_POST);
  // const handleSubmit = async () => {
  //   if (title !== "" && isGithubUrl(githubUrl)) {
  //     console.log({
  //       Title: title,
  //       githubUrl: githubUrl,
  //       Content: content,
  //     });

  //     try {
  //       await addPost({
  //         variables: {
  //           Title: title,
  //           githubUrl: githubUrl,
  //           Content: content,
  //         },
  //       });
  //       setSubmit(true);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   } else {
  //     setHasFocus(true);
  //   }
  // };
  return (
    <Container className="form_container">
      <Typography variant="h4">Submit your post here!</Typography>
      {submit ? (
        <Grid>Congratulations! Your post has been submitted successfully.</Grid>
      ) : null}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-basic"
            label="Post Name"
            fullWidth
            error={hasFocus && title === ""}
            value={title}
            className={hasFocus && title === "" ? "" : classes.root}
            helperText="Invalid Post Name"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-basic"
            label="Github URL"
            fullWidth
            error={hasFocus && (githubUrl === "" || !isGithubUrl(githubUrl))}
            value={githubUrl}
            onChange={(e) => setGithubUrl(e.target.value)}
            className={
              hasFocus && (githubUrl === "" || !isGithubUrl(githubUrl))
                ? ""
                : classes.root
            }
            helperText="Invalid URL"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="outlined-multiline-static"
            label="Content"
            multiline
            rows={5}
            placeholder="Introduce your post..."
            variant="outlined"
            fullWidth
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Grid>
      </Grid>
      <Button
        // className="form_button"
        backgroundColor="limegreen"
        label="Submit"
        // onClick={handleSubmit}
        primary
        size="medium"
      />
    </Container>
  );
};
