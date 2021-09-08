import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { gql, useMutation } from "@apollo/client";
import { log } from "console";
import { GitHub } from "@material-ui/icons";

export interface SubmitFormProps {}

export interface AddPost_addPost {
  __typename: "Post";
  id: string;
  name: string;
  content: string;
  modified: any;
  created: any;
}

export const POST = gql`
  fragment postFields on Post {
    id
    title
    content
    modified
    created
  }
`;

const ADD_POST = gql`
  mutation AddPost($title: String!, $content: String) {
    addPost(input: { title: $title, content: $content }) {
      ...postFields
    }
  }
  ${POST}
`;

const Form: React.FC<SubmitFormProps> = () => {
  const [addPost] = useMutation<AddPost_addPost>(ADD_POST);

  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [con, setCont] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleInputValue = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(e.target.value);
  };

  const handleUrlValue = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setUrl(e.target.value);
  };

  const handerText = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCont(e.target.value);
  };
  const nameControl = (
    <FormControl>
      <InputLabel htmlFor="my-input"> Post Name</InputLabel>
      <Input
        id="post-input"
        aria-describedby="the post name"
        onChange={handleInputValue}
      />
      <FormHelperText id="the post name">post Name</FormHelperText>
    </FormControl>
  );

  const urlControl = (
    <FormControl>
      <InputLabel htmlFor="my-input"> Github name</InputLabel>
      <Input
        id="githubName-input"
        aria-describedby="the post name"
        onChange={handleUrlValue}
      />
      <FormHelperText id="the post name">Github Account Name</FormHelperText>
    </FormControl>
  );

  const contentContol = (
    <TextField
      id="outlined-secondary"
      label="Outlined secondary"
      variant="outlined"
      color="secondary"
      onChange={handerText}
    />
  );

  const handerSubmit = async () => {
    try {
      await addPost({
        variables: {
          title: name,
          content: con,
        },
      });
      setSubmit(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        {nameControl}
        {urlControl}
        {contentContol}
      </div>
      <Button onClick={handerSubmit}>Submit</Button>
    </div>
  );
};
export default Form;
