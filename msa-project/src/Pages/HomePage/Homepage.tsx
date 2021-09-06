import React from "react";
import { Typography } from "@material-ui/core";
import ContentCard from "../../stories/Cards";


export const HomePage = () => {
  return (
    <div className="App-cards">
      <Typography variant="h3">Home Page</Typography>;
        <ContentCard />
        <ContentCard />
    </div>
  );
};
