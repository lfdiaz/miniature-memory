import React from 'react';
import { withStyles } from '@material-ui/styles';
import History from '../ui/History/History';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import Axios from 'axios';

const styles = theme => ({
  root: {
    height: '100%',
    width: '100%'
  },
  text: {
    color: '#c0c5ce'
  },
  wrapper: {
    padding: '12px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridColumnGap: '12px'
  },
  button: {
    backgroundColor: '#65737e',
    marginLeft: '12px'
  },
  link: {
    textDecoration: 'none',
    padding: '6px'
  },
  title: {
    paddingTop: '12px'
  }
});

class HistoryPage extends React.PureComponent {
  state = {
    history: []
  };
  componentDidMount = () => {
    const username = localStorage.getItem('username');
    Axios.get(`http://localhost:3001/quote?username=${username}`)
      .then(response => {
        const history = response.data;
        console.log(history);
        this.setState({ history });
      })
      .catch(e => {
        console.log(e);
      });
  };

  render() {
    const { classes } = this.props;
    const { history } = this.state;
    const name = history ? history.name : '';
    return (
      <div className={classes.root}>
        <Typography
          variant="h6"
          className={classnames(classes.text, classes.title)}
          align="center"
          gutterBottom={true}
        >
          {`History ${name}`}
        </Typography>
        <div className={classes.wrapper}>
          {history &&
            history.map((element, i) => <History key={i} {...element} />)}
        </div>
        <Button className={classes.button}>
          <Link to="/profile" className={classes.link}>
            <Typography variant="body2" className={classes.text}>
              Profile
            </Typography>
          </Link>
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(HistoryPage);
