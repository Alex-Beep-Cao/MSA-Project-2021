import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

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

import ContentCard from "./stories/Cards";

const LIST_POSTS = gql`
  query {
    posts {
      nodes {
        id
        title
        content
        created
        comments {
          id
          content
        }

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
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(5),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    card: {
      textAlign: "center",
    },
  })
);

export default function PostSelect() {
  const classes = useStyles();
  const [post, setPost] = useState("");
  const { loading, error, data } = useQuery(LIST_POSTS);
  if (loading || error) {
    return <p>{error ? error.message : "Loading..."}</p>;
  }

  return (
    <div className={classes.root}>
      {data.posts.nodes.map((post: any) => (
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <ContentCard
                className={classes.card}
                title={post.title}
                content={post.content}
                created={post.created}
                userName={post.user.userName}
                comment={post.comments}
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <ContentCard
                className={classes.card}
                title={post.title}
                content={post.content}
                created={post.created}
                userName={post.user.userName}
                comment={post.comments}
              />
            </Paper>
          </Grid>
        </Grid>
      ))}
    </div>
  );
}
