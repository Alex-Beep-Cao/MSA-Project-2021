import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { red } from "@material-ui/core/colors";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { CardContent, CardMedia, Typography } from "@material-ui/core";
import Grid, { GridSpacing } from "@material-ui/core/Grid";

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
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);

const griduseStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

// create a component that renders a select input for coutries
function PostSelect() {
  const classes = useStyles();
  const gridclasses = griduseStyles();
  const [post, setPost] = useState("");
  const { loading, error, data } = useQuery(LIST_POSTS);

  if (loading || error) {
    return <p>{error ? error.message : "Loading..."}</p>;
  }

  return (
    <div>
      {data.posts.nodes.map((post: any) => (
        <Grid className={gridclasses.root} container spacing={3}>
          <Grid className={gridclasses.paper} item xs={6}>
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
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {post.id}
                  {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {post.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ))}
    </div>
  );
}

export default PostSelect;
