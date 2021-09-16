import { gql, useQuery } from "@apollo/client";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ContentCard from "./Cards";

const LIST_POSTS = gql`
  query {
    posts(first: 50) {
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
  //const [post, setPost] = useState("");
  const { loading, error, data } = useQuery(LIST_POSTS);
  if (loading || error) {
    return <div>{error ? error.message : "Loading..."}</div>;
  }

  return (
    <div className={classes.root}>
      {data.posts.nodes.map((post: any) => (
        <Grid container spacing={3} key={post.id}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <ContentCard
                className={classes.card}
                id={post.id}
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
                key={post.id}
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
