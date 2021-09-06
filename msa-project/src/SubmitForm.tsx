import React, { useState } from "react";
import { TextField, Typography, Grid, Container } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Button } from "./stories/Button";
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
  const [postName, setPostName] = useState<string>("");
  const [githubUrl, setGithubUrl] = useState<string>("");
  const [content, setContent] = useState("");
  const [submit, setSubmit] = useState(false);

  const [hasFocus, setHasFocus] = useState(false);

  const isGithubUrl = (value: string) => {
    const urlRegex = /^(http[s]{0,1}:\/\/){0,1}(github.com\/)([a-zA-Z0-9\-~!@#$%^&*+?:_\/=<>\.]*)?$/i;
    return urlRegex.test(value);
  };

  const handleSubmit = async () => {
    if (postName !== "" && isGithubUrl(githubUrl)) {
      console.log({
        projectName: postName,
        githubUrl: githubUrl,
        Description: content,
      });
    } else {
      setHasFocus(true);
    }
  };
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
            error={hasFocus && postName === ""}
            value={postName}
            className={hasFocus && postName === "" ? "" : classes.root}
            helperText="Invalid Post Name"
            onChange={(e) => setPostName(e.target.value)}
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
        onClick={handleSubmit}
        primary
        size="medium"
      />
    </Container>
  );
};
