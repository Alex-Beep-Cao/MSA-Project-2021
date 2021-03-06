import { useState } from "react";

import "./App.css";
//import Button from "@material-ui/core/Button";
import Header from "./stories/Msa-header";
import { Route, Switch, useLocation } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/Homepage";
import { SubmitPage } from "./Pages/SubmitPage/SubmitPage";
import { ByePage } from "./Pages/ByePage/ByePage";
import { FormControlLabel, Paper } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import StandardImageList from "./stories/imagelist";

function App() {
  const [darkMode, setDarkmode] = useState(false);

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  const usePath = () => {
    const location = useLocation();

    return location.pathname;
  };
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh" }} className="App">
        <FormControlLabel
          control={
            <Checkbox
              checked={darkMode}
              onChange={() => setDarkmode(!darkMode)}
            />
          }
          label={darkMode ? " Turn ON the Light" : "Turn OFF the Light"}
        />
        <Header />

        {usePath() === "/" ? <StandardImageList /> : ""}

        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/submit" component={SubmitPage} />
          <Route path="/bye" component={ByePage} />
        </Switch>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
