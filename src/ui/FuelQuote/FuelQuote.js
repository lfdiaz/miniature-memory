import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { FormControl, Typography, Button } from "@material-ui/core";
import { TextInput } from "../Inputs/TextInput";
import { withRouter } from "react-router";

const createStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  deliveryAddress: {
    display: "flex",
    alignItems: "left",
    flexDirection: "column",
    marginTop: "12px"
  },
  text: {
    color: "#c0c5ce"
  },
  button: {
    backgroundColor: "#65737e",
    padding: "6px",
    marginTop: "12px"
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  wrapper: {
    padding: "12px"
  }
}));

const FuelQuote = props => {
  const classes = createStyles();

  const goBack = () => {
    props.history.goBack();
  };

  const [inputs, setInputValues] = useState({
    gallons: 0,
    deliveryDate: new Date()
  });

  const onChange = e => {
    setInputValues({ ...inputs, [e.target.name]: e.target.value });
  };

  const { gallons, deliveryDate } = inputs;

  const { deliveryAddress, suggestedPrice } = props;

  return (
    <div className={classes.wrapper}>
      <FormControl className={classes.root}>
        <Typography variant="h6" gutterBottom={true} className={classes.text}>
          Fuel Quote
        </Typography>
        <TextInput
          label="Gallons requested"
          value={gallons}
          name="gallons"
          type="number"
          onChange={onChange}
        />
        <div className={classes.deliveryAddress}>
          <Typography variant="body1" className={classes.text}>
            Delivery Address
          </Typography>
          <Typography variant="body2" className={classes.text}>
            {deliveryAddress}
          </Typography>
        </div>
        <TextInput
          label="Date"
          value={deliveryDate}
          name="deliveryDate"
          type="date"
          onChange={onChange}
        />
        <div className={classes.deliveryAddress}>
          <Typography variant="body1" className={classes.text}>
            Suggested Price
          </Typography>
          <Typography
            variant="body2"
            className={classes.text}
          >{`$${suggestedPrice && suggestedPrice.toFixed(2)}`}</Typography>
        </div>
        <div className={classes.deliveryAddress}>
          <Typography variant="body1" className={classes.text}>
            Total Amount Due
          </Typography>
          <Typography variant="body2" className={classes.text}>{`$${gallons &&
            suggestedPrice &&
            (gallons * suggestedPrice).toFixed(2)}`}</Typography>
        </div>
        <div className={classes.buttonContainer}>
          <Button className={classes.button}>
            <Typography variant="body2" className={classes.text}>
              Submit
            </Typography>
          </Button>
          <Button className={classes.button}>
            <Typography
              variant="body2"
              className={classes.text}
              onClick={goBack}
            >
              Back
            </Typography>
          </Button>
        </div>
      </FormControl>
    </div>
  );
};

FuelQuote.defaultProps = {
  deliveryAddress: "",
  suggestedPrice: 0
};

export default withRouter(FuelQuote);
