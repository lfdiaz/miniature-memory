import React from "react";
import { storiesOf } from "@storybook/react";
import { makeStyles } from "@material-ui/styles";
import { Register } from "./Register";

storiesOf("Register", module).add("Register", () => <RegisterStorybook />);

const styles = makeStyles(theme => ({
  root: {
    height: "100vh",
    width: "100%",
    backgroundColor: "#343d46"
  }
}));

const RegisterStorybook = props => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Register />
    </div>
  );
};
