import React from "react";
import { withStyles } from "@material-ui/styles";
import Profile from "../ui/Profile/Profile";

const styles = theme => ({
  root: {
    height: "100%",
    width: "100%"
  }
});

class ProfilePage extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Profile />
      </div>
    );
  }
}

export default withStyles(styles)(ProfilePage);
