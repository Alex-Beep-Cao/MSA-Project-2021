import { useState } from "react";

import "./App.css";
//import Button from "@material-ui/core/Button";
import Header from "./stories/Msa-header";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/Homepage";
import { SubmitPage } from "./Pages/SubmitPage/SubmitPage";
import { FormControlLabel, Paper } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";

function App() {
  const [darkMode, setDarkmode] = useState(false);

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh" }} className="App">
        {/* <Checkbox
          label="Turn off the Light"
          checked={darkMode}
          onChange={() => setDarkmode(!darkMode)}
        /> */}
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
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/submit" component={SubmitPage} />
        </Switch>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
