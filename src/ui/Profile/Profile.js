import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  FormControl,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  Button
} from "@material-ui/core";
import { TextInput } from "../Inputs/TextInput";
import { Link } from "react-router-dom";

const styles = makeStyles(theme => ({
  root: {},
  formControl: {
    padding: "14px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridColumnGap: "20px",
    gridRowGap: "12px"
  },
  text: {
    color: "#c0c5ce"
  },
  selectInput: {
    marginTop: "12px"
  },
  title: {
    color: "#c0c5ce",
    padding: "12px"
  },
  historyButton: {
    backgroundColor: "#65737e",
    marginLeft: "12px"
  },
  link: {
    textDecoration: "none",
    padding: "6px"
  },
  wrapperButton: {
    padding: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }
}));

const Profile = props => {
  const classes = styles();
  const [inputs, setValues] = useState({
    name: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipcode: ""
  });
  const onChange = e => {
    setValues({ ...inputs, [e.target.name]: e.target.value });
  };

  const { name, address1, address2, city, state, zipcode } = inputs;
  const { states } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" className={classes.title} gutterBottom={true}>
        Profile Management
      </Typography>
      <FormControl className={classes.formControl}>
        <TextInput
          name="name"
          value={name}
          label="Full Name"
          required={true}
          onChange={onChange}
          maxlength={50}
        />
        <TextInput
          name="address1"
          value={address1}
          label="Address 1"
          required={true}
          onChange={onChange}
          maxlength={100}
        />
        <TextInput
          name="address2"
          value={address2}
          label="Address 2"
          onChange={onChange}
          maxlength={100}
        />
        <TextInput
          name="city"
          value={city}
          label="City"
          required={true}
          onChange={onChange}
          maxlength={100}
        />
        <FormControl className={classes.selectInput}>
          <InputLabel htmlFor="state" className={classes.text}>
            State
          </InputLabel>
          <Select
            value={state}
            onChange={onChange}
            inputProps={{
              name: "state",
              id: "state",
              classes: { root: classes.text }
            }}
          >
            {states &&
              states.map((stateName, i) => (
                <MenuItem value={stateName} key={i}>
                  {stateName}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <TextInput
          name="zipcode"
          value={zipcode}
          label="Zipcode"
          required={true}
          onChange={onChange}
          maxlength={9}
        />
      </FormControl>
      <div className={classes.wrapperButton}>
        <Button className={classes.historyButton}>
          <Link to="/history" className={classes.link}>
            <Typography variant="body2" className={classes.text}>
              History
            </Typography>
          </Link>
        </Button>
        <Button className={classes.historyButton}>
          <Link to="/quote" className={classes.link}>
            <Typography variant="body2" className={classes.text}>
              Quote
            </Typography>
          </Link>
        </Button>
      </div>
    </React.Fragment>
  );
};

Profile.defaultProps = {
  states: []
};

export default Profile;
