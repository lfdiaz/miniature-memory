import React from 'react';
import { withStyles } from '@material-ui/styles';
import Profile from '../ui/Profile/Profile';
import Axios from 'axios';

const styles = theme => ({
  root: {
    height: '100%',
    width: '100%'
  }
});

class ProfilePage extends React.PureComponent {
  state = {
    name: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: ''
  };
  componentDidMount = () => {
    const username = localStorage.getItem('username');
    Axios.get(`http://localhost:3001/profile?username=${username}`)
      .then(response => {
        const {
          name,
          address1,
          address2,
          city,
          state,
          zipcode
        } = response.data;
        this.setState({
          name,
          address1,
          address2,
          city,
          state,
          zipcode
        });
      })
      .catch(e => {
        console.log(e);
      });
  };
  render() {
    const { classes } = this.props;
    const { name, address1, address2, city, state, zipcode } = this.state;

    const states = ['Texas', 'Arizona', 'California', 'FLorida'];
    return (
      <div className={classes.root}>
        <Profile
          states={states}
          name={name}
          address1={address1}
          address2={address2}
          city={city}
          state={state}
          zipcode={zipcode}
        />
      </div>
    );
  }
}

export default withStyles(styles)(ProfilePage);
