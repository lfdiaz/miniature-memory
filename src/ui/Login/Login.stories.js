import React from "react";
import { storiesOf } from "@storybook/react";
import { Login } from "./Login";
import { makeStyles } from "@material-ui/styles";

storiesOf("Login", module).add("Login", () => <LoginStorybook />);

const styles = makeStyles(theme => ({
  root: {
    height: "100vh",
    width: "100%",
    backgroundColor: "#343d46"
  }
}));

const LoginStorybook = props => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Login />
    </div>
  );
};
