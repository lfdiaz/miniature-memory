import React from 'react';
import { createStyles } from '@material-ui/styles';
import {
  FormControl,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  Button
} from '@material-ui/core';
import { TextInput } from '../Inputs/TextInput';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Axios from 'axios';

const styles = createStyles(theme => ({
  root: {},
  formControl: {
    padding: '14px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridColumnGap: '20px',
    gridRowGap: '12px'
  },
  text: {
    color: '#c0c5ce'
  },
  selectInput: {
    marginTop: '12px'
  },
  title: {
    color: '#c0c5ce',
    padding: '12px'
  },
  historyButton: {
    backgroundColor: '#65737e',
    marginLeft: '12px'
  },
  link: {
    textDecoration: 'none',
    padding: '6px'
  },
  wrapperButton: {
    padding: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}));

class Profile extends React.PureComponent {
  state = {
    inputs: {
      name: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: ''
    }
  };

  setValues = data => {
    this.setState({
      inputs: { ...data }
    });
  };

  onChange = e => {
    const { inputs } = this.state;
    this.setValues({ ...inputs, [e.target.name]: e.target.value });
  };

  sendData = () => {
    const { inputs } = this.state;
    Axios.post('http://localhost:3001/profile', { ...inputs })
      .then(response => {
        if (response.statusText === 200) {
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  render() {
    const {
      name,
      address1,
      address2,
      city,
      state,
      zipcode
    } = this.state.inputs;
    const { states, classes } = this.props;

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
            onChange={this.onChange}
            maxlength={50}
          />
          <TextInput
            name="address1"
            value={address1}
            label="Address 1"
            required={true}
            onChange={this.onChange}
            maxlength={100}
          />
          <TextInput
            name="address2"
            value={address2}
            label="Address 2"
            onChange={this.onChange}
            maxlength={100}
          />
          <TextInput
            name="city"
            value={city}
            label="City"
            required={true}
            onChange={this.onChange}
            maxlength={100}
          />
          <FormControl className={classes.selectInput}>
            <InputLabel htmlFor="state" className={classes.text}>
              State
            </InputLabel>
            <Select
              value={state}
              onChange={this.onChange}
              inputProps={{
                name: 'state',
                id: 'state',
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
            onChange={this.onChange}
            maxlength={9}
          />
        </FormControl>
        <div className={classes.wrapperButton}>
          <Button className={classes.historyButton} onClick={this.sendData}>
            <Typography variant="body2" className={classes.text}>
              Save
            </Typography>
          </Button>
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
  }
}

Profile.defaultProps = {
  states: []
};

export default withStyles(styles)(Profile);
