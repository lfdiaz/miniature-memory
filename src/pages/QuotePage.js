import React from "react";
import { withStyles } from "@material-ui/styles";
import FuelQuote from "../ui/FuelQuote/FuelQuote";

const styles = theme => ({
  root: {
    height: "100%",
    width: "100%"
  }
});

class QuotePage extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <FuelQuote />
      </div>
    );
  }
}

export default withStyles(styles)(QuotePage);
