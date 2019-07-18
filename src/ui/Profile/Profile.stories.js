import React from "react";
import { storiesOf } from "@storybook/react";
import { makeStyles } from "@material-ui/styles";
import { Profile } from "./Profile";

storiesOf("Profile", module).add("Pofile", () => <ProfileStorybook />);

const styles = makeStyles(theme => ({
  root: {
    height: "100vh",
    width: "100%",
    backgroundColor: "#343d46"
  }
}));

const ProfileStorybook = props => {
  const classes = styles();
  const states = ["Texas", "California", "New Mexico"];
  return (
    <div className={classes.root}>
      <Profile states={states} />
    </div>
  );
};
