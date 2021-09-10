import React from "react";

import "./App.css";
//import Button from "@material-ui/core/Button";
import Header from "./stories/Msa-header";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/Homepage";
import { SubmitPage } from "./Pages/SubmitPage/SubmitPage";
import AddTodo from "./stories/form";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <AddTodo /> */}
      {/* <Button variant="outlined" color="primary">
        Default */}
      {/* </Button> */}
      <div>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/submit" component={SubmitPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
