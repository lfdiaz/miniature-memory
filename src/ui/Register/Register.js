import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  LinearProgress,
  FormControl,
  Typography,
  Button
} from "@material-ui/core";
import { TextInput } from "../Inputs/TextInput";
import { withRouter } from "react-router";

const styles = makeStyles(theme => ({
  form: {
    width: "50%",
    height: "100%",
    display: "flex",
    padding: "12px",
    justifyContent: "center",
    color: "#c0c5ce"
  },
  loginButton: {
    marginTop: "16px",
    maxWidth: "150px",
    color: "#c0c5ce"
  },
  textfield: {
    color: "#c0c5ce !important"
  },
  focused: {
    color: "#c0c5ce"
  },
  underline: {
    "& :after": {
      color: "#a7adba",
      borderBottom: "2px solid #a7adba"
    }
  },
  textfieldContainer: {
    marginTop: "12px"
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  inputRoot: {
    color: "#a7adba"
  }
}));

const Register = props => {
  const classes = styles();

  const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  const onRegisterClick = () => {
    // Send request to login and authenticate user
    setLoading(true);
    // Make Request here
    setTimeout(() => setLoading(false), 5000);
  };

  const onLoginClick = () => {
    props.history.push("/");
    // Send to Register Page
  };

  const onChange = e =>
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

  const { username, password } = userInfo;

  return (
    <React.Fragment>
      {loading && (
        <LinearProgress color="secondary" variant={"indeterminate"} />
      )}
      <FormControl className={classes.form}>
        <Typography variant="h6" gutterBottom={true}>
          Welcome, please register to access
        </Typography>
        <TextInput
          name={"username"}
          value={username}
          onChange={onChange}
          label={"Username"}
          required={true}
        />
        <TextInput
          name={"password"}
          value={password}
          onChange={onChange}
          label={"Password"}
          type="password"
          required={true}
        />
        <div className={classes.buttonContainer}>
          <Button onClick={onRegisterClick} className={classes.loginButton}>
            Register
          </Button>
          <Button onClick={onLoginClick} className={classes.loginButton}>
            {/* <Link to="/login">Login</Link> */}
            Login
          </Button>
        </div>
      </FormControl>
    </React.Fragment>
  );
};

export default withRouter(Register);
