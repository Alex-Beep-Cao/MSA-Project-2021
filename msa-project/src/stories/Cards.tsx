import { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { gql, useMutation } from "@apollo/client";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { TextField } from "@material-ui/core";

const ADD_COMMENT = gql`
  mutation AddComment($content: String, $postId: String) {
    addComment(input: { content: $content, postId: $postId }) {
      content
      postId
    }
  }
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);

export default function ContentCard(props: any) {
  const classes = useStyles();

  const [postId, setPostId] = useState("");
  const [commentContent, setCommentContent] = useState("");
  const [submit, setSubmit] = useState(false);
  const [like, setLike] = useState(true);
  const [addComment] = useMutation(ADD_COMMENT);

  const [color, setColor] = useState<
    | "inherit"
    | "disabled"
    | "error"
    | "action"
    | "secondary"
    | "primary"
    | undefined
  >("secondary");

  // console.log(postId);
  // console.log(commentContent);

  const handleSubmit = async () => {
    await addComment({
      variables: {
        content: commentContent,
        postId: postId,
      },
    });
    setSubmit(true);
  };

  const likehandle = () => {
    setLike((prelike) => {
      setColor(() => (prelike ? "primary" : "secondary"));
      return !like;
    });
  };
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.userName}
          </Avatar>
        }
        title={props.title}
        subheader={props.created}
      />
      <CardMedia
        className={classes.media}
        image="https://source.unsplash.com/1600x900/?nature,water"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.content}
          {props.comment &&
            props.comment.map((co: { content: string }) => (
              <div key={co.content}>{co.content}</div>
            ))}

          <FavoriteIcon onClick={likehandle} color={color} />
        </Typography>

        {submit ? (
          <Grid>
            Congratulations! Your Post has been submitted successfully.
          </Grid>
        ) : null}

        <TextField
          id="outlined-multiline-static"
          label="Comments"
          multiline
          rows={4}
          variant="outlined"
          onChange={(e) => {
            setCommentContent(e.target.value);
            setPostId(props.id);
          }}
        />

        <Button variant="contained" color="primary" onClick={handleSubmit}>
          I want Comment
        </Button>
      </CardContent>
    </Card>
  );
}
