import React from "react";
import { storiesOf } from "@storybook/react";
import { History } from "./History";
import { makeStyles } from "@material-ui/styles";
import { withKnobs, text, number, date } from "@storybook/addon-knobs";
import Masonry from "react-masonry-component";

const stories = storiesOf("History", module);
stories.addDecorator(withKnobs);
stories.add("History", () => <HistoryStorybook />);
stories.add("History Page", () => <HistoryCardsStorybook />);

const styles = makeStyles(theme => ({
  root: {
    height: "100%",
    width: "100%",
    backgroundColor: "#343d46"
  },
  bricks: {
    width: "100%",
    height: "100%",
    padding: "12px"
  }
}));

const HistoryStorybook = props => {
  const deliveryAddress = text(
    "Delivery Adddress",
    "University of Houston, Houston TX, 77204"
  );
  const suggestedPrice = number("Suggested Price", 100);
  const gallons = number("Gallons", 10);
  const deliveryDate = date("Delivery Date", new Date());
  const amount = gallons * suggestedPrice;
  return (
    <History
      address={deliveryAddress}
      suggestedPrice={suggestedPrice}
      deliveryDate={deliveryDate}
      gallons={gallons}
      amount={amount}
    />
  );
};

const HistoryCardsStorybook = props => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Masonry className={classes.bricks} options={{ gutter: 12 }}>
        <HistoryStorybook />
        <HistoryStorybook />
        <HistoryStorybook />
        <HistoryStorybook />
      </Masonry>
    </div>
  );
};
