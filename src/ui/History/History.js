import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Card, CardContent, Typography, CardHeader } from "@material-ui/core";
import moment from "moment";

const createStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#65737e",
    maxWidth: "350px",
    marginBottom: "12px"
  },
  header: {
    backgroundColor: "#4f5b66",
    padding: "12px"
  },
  cardContent: {
    padding: "12px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridColumnGap: "20px",
    gridRowGap: "12px"
  },
  text: {
    color: "#c0c5ce"
  }
}));

const History = props => {
  const classes = createStyles();

  const { gallons, address, deliveryDate, suggestedPrice, amount } = props;

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardHeader
          className={classes.header}
          title={
            <Typography variant="body2" className={classes.text}>
              {`Order Date - ${deliveryDate &&
                moment(deliveryDate).format("MMM DD YY")}`}
            </Typography>
          }
        />

        <CardContent className={classes.cardContent}>
          <div className={classes.fieldContainer}>
            <Typography variant="body1" className={classes.text}>
              Gallons requested
            </Typography>
            <Typography variant="body2" className={classes.text}>
              {gallons}
            </Typography>
          </div>
          <div className={classes.fieldContainer}>
            <Typography variant="body1" className={classes.text}>
              Delivery Address
            </Typography>
            <Typography variant="body2" className={classes.text}>
              {address}
            </Typography>
          </div>
          <div className={classes.fieldContainer}>
            <Typography variant="body1" className={classes.text}>
              Delivery Date
            </Typography>
            <Typography variant="body2" className={classes.text}>
              {deliveryDate && moment(deliveryDate).format("MMM DD YY")}
            </Typography>
          </div>
          <div className={classes.fieldContainer}>
            <Typography variant="body1" className={classes.text}>
              Suggested Price
            </Typography>
            <Typography
              variant="body2"
              className={classes.text}
            >{`$${suggestedPrice && suggestedPrice.toFixed(2)}`}</Typography>
          </div>
          <div className={classes.fieldContainer}>
            <Typography variant="body1" className={classes.text}>
              Total Amount
            </Typography>
            <Typography variant="body2" className={classes.text}>{`$${amount &&
              amount.toFixed(2)}`}</Typography>
          </div>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

History.defaultProps = {
  gallons: 0,
  address: "",
  deliveryDate: new Date(),
  suggestedPrice: 0,
  amount: 0
};

export default History;
