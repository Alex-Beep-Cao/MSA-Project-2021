import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { red } from "@material-ui/core/colors";
import {
  makeStyles,
  Theme,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";
import { CardContent, CardMedia, Paper, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const LIST_POSTS = gql`
  query {
    posts {
      nodes {
        id
        title
        content
        user {
          id
          userName
        }
      }
    }
  }
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "500px",
      marginLeft: "50px",
    },
    content: {
      height: "40px",
    },
    media: {
      height: "35px",
      paddingTop: "56.25%", // 16:9
    },
    avatar: {
      backgroundColor: red[500],
    },
    container: {
      display: "flex",
    },
    paper: {
      height: 200,
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      elevation: 8,
    },
  })
);

// create a component that renders a select input for coutries
function PostSelect() {
  const classes = useStyles();

  const [post, setPost] = useState("");
  const { loading, error, data } = useQuery(LIST_POSTS);

  if (loading || error) {
    return <p>{error ? error.message : "Loading..."}</p>;
  }

  return (
    <div className={classes.container}>
      {data.posts.nodes.map((post: any) => (
        <Card key={post.id} className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {post.user.userName}
              </Avatar>
            }
          />
          <CardMedia
            className={classes.media}
            image="https://source.unsplash.com/1600x900/?nature,water"
            title="Contemplative Reptile"
          />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
              {post.id}
              {post.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.content}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default PostSelect;
