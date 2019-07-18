import React from "react";
import { withStyles } from "@material-ui/styles";
import History from "../ui/History/History";
import { Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import classnames from "classnames";

const styles = theme => ({
  root: {
    height: "100%",
    width: "100%"
  },
  text: {
    color: "#c0c5ce"
  },
  wrapper: {
    padding: "12px"
  },
  button: {
    backgroundColor: "#65737e",
    marginLeft: "12px"
  },
  link: {
    textDecoration: "none",
    padding: "6px"
  },
  title: {
    paddingTop: "12px"
  }
});

class HistoryPage extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography
          variant="h6"
          className={classnames(classes.text, classes.title)}
          align="center"
          gutterBottom={true}
        >
          History
        </Typography>
        <div className={classes.wrapper}>
          <History />
        </div>
        <Button className={classes.button}>
          <Link to="/profile" className={classes.link}>
            <Typography variant="body2" className={classes.text}>
              Profile
            </Typography>
          </Link>
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(HistoryPage);
