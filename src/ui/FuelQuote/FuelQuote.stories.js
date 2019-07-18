import React from "react";
import { storiesOf } from "@storybook/react";
import { FuelQuote } from "./FuelQuote";
import { makeStyles } from "@material-ui/styles";
import { withKnobs, text, number } from "@storybook/addon-knobs";

storiesOf("Fuel Quote", module)
  .addDecorator(withKnobs)
  .add("Fuel Quote", () => <FuelQuoteStorybook />);

const styles = makeStyles(theme => ({
  root: {
    height: "100vh",
    width: "100%",
    backgroundColor: "#343d46"
  }
}));

const FuelQuoteStorybook = props => {
  const classes = styles();
  const deliveryAddress = text(
    "Delivery Adddress",
    "University of Houston, Houston TX, 77204"
  );
  const suggestedPrice = number("Suggested Price", 100);
  return (
    <div className={classes.root}>
      <FuelQuote
        deliveryAddress={deliveryAddress}
        suggestedPrice={suggestedPrice}
      />
    </div>
  );
};
