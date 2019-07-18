import React from "react";
import { withStyles } from "@material-ui/styles";
import Register from "../ui/Register/Register";

const styles = theme => ({
  root: {
    height: "100%",
    width: "100%"
  }
});

class RegisterPage extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Register />
      </div>
    );
  }
}

export default withStyles(styles)(RegisterPage);
