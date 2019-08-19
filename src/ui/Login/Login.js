import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  FormControl,
  Typography,
  LinearProgress,
  Button
} from '@material-ui/core';
import { TextInput } from '../Inputs/TextInput';
import { withRouter } from 'react-router';
import Axios from 'axios';

const styles = makeStyles(theme => ({
  form: {
    width: '50%',
    height: '100%',
    display: 'flex',
    padding: '12px',
    justifyContent: 'center',
    color: '#c0c5ce'
  },
  loginButton: {
    marginTop: '16px',
    maxWidth: '150px',
    color: '#c0c5ce'
  },
  textfield: {
    color: '#c0c5ce !important'
  },
  focused: {
    color: '#c0c5ce'
  },
  underline: {
    '& :after': {
      color: '#a7adba',
      borderBottom: '2px solid #a7adba'
    }
  },
  textfieldContainer: {
    marginTop: '12px'
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}));

const Login = props => {
  const classes = styles();

  const [userInfo, setUserInfo] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);

  const onLoginClick = () => {
    // Send request to login and authenticate user
    setLoading(true);
    const { username, password } = userInfo;
    Axios.post('http://localhost:3001/login', { username, password })
      .then(response => {
        if (response.status === 200) {
          localStorage.setItem('username', username);
          props.history.push('/profile');
        }
      })
      .catch(e => {
        setLoading(false);
        console.log(e);
      });
    // Make Request here
    // setTimeout(() => setLoading(false), 5000);
  };

  const onRegisterClick = () => {
    props.history.push('/register');
    // Send to Register Page
  };

  const onChange = e =>
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

  const { username, password } = userInfo;

  return (
    <React.Fragment>
      {loading && (
        <LinearProgress color="secondary" variant={'indeterminate'} />
      )}
      <FormControl className={classes.form}>
        <Typography variant="h6" gutterBottom={true}>
          Welcome
        </Typography>
        <TextInput
          name={'username'}
          value={username}
          onChange={onChange}
          required={true}
          label={'Username'}
        />
        <TextInput
          name={'password'}
          value={password}
          required={true}
          onChange={onChange}
          label={'Password'}
          type="password"
        />

        <div className={classes.buttonContainer}>
          <Button onClick={onLoginClick} className={classes.loginButton}>
            Login
          </Button>
          <Button onClick={onRegisterClick} className={classes.loginButton}>
            {/* <Link to="/register">Register</Link> */}
            Register
          </Button>
        </div>
      </FormControl>
    </React.Fragment>
  );
};

Login.defaultProps = {};

export default withRouter(Login);
