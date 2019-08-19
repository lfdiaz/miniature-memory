import React from 'react';
import { withStyles } from '@material-ui/styles';
import FuelQuote from '../ui/FuelQuote/FuelQuote';
import Axios from 'axios';

const styles = theme => ({
  root: {
    height: '100%',
    width: '100%'
  }
});

class QuotePage extends React.PureComponent {
  state = {
    address: ''
  };
  componentDidMount = () => {
    const username = localStorage.getItem('username');
    Axios.get('http://localhost:3001/profile', {
      params: {
        username
      }
    })
      .then(response => {
        const { address1, city, state, zipcode } = response.data;
        this.setState({
          address: `${address1}, ${city}, ${state}, ${zipcode}`
        });
      })
      .catch(e => {
        console.log(e);
      });
  };
  render() {
    const { classes } = this.props;
    const { address } = this.state;
    return (
      <div className={classes.root}>
        <FuelQuote deliveryAddress={address} />
      </div>
    );
  }
}

export default withStyles(styles)(QuotePage);
