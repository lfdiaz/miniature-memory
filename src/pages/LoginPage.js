import React from "react";
import { withStyles } from "@material-ui/styles";
import Login from "../ui/Login/Login";

const styles = theme => ({
  root: {
    height: "100%",
    width: "100%"
  }
});

class LoginPage extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Login />
      </div>
    );
  }
}

export default withStyles(styles)(LoginPage);
