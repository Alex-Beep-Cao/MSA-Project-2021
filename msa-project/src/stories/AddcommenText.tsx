import { gql, useMutation } from "@apollo/client";
import { createStyles, makeStyles, TextField, Theme } from "@material-ui/core";
import { useState } from "react";

const ADD_COMMENT = gql`
  mutation AddPost($postId: String!, $content: String) {
    addPost(input: { postId: $postId, content: $content }) {
      postId
      content
    }
  }
`;

export default function Addcomment() {
  const [postId, setPostId] = useState("");
  const [commentContent, setCommentContent] = useState("");
  const [submit, setSubmit] = useState(false);

  const [addComment, { data, loading, error }] = useMutation(ADD_COMMENT);

  const handleSubmit = async () => {
    await addComment({
      variables: {
        postId: postId,
        content: commentContent,
      },
    });
    setSubmit(true);
  };
}
