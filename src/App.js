import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { withStyles } from "@material-ui/styles";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import HistoryPage from "./pages/HistoryPage";
import QuotePage from "./pages/QuotePage";

const styles = theme => ({
  root: {
    height: "100vh",
    backgroundColor: "#343d46"
  }
});

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/history" component={HistoryPage} />
          <Route path="/quote" component={QuotePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default withStyles(styles)(App);
