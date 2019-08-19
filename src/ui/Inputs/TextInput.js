import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { TextField, Typography } from '@material-ui/core';

const styles = makeStyles(theme => ({
  root: {},
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
  inputRoot: {
    color: '#a7adba'
  },
  required: {
    color: '#D21F3C',
    paddingTop: '4px',
    fontSize: '12px'
  },
  textfieldWrapper: {
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'space-between',
    flexDirection: 'column'
  }
}));

export const TextInput = props => {
  const classes = styles();
  const {
    name,
    value,
    onChange,
    label,
    type,
    required,
    maxlength,
    error
  } = props;
  return (
    <div className={classes.textfieldWrapper}>
      <TextField
        name={name}
        value={value}
        onChange={onChange}
        autoFocus={true}
        label={label}
        type={type}
        error={error}
        className={classes.textfieldContainer}
        InputLabelProps={{
          classes: { root: classes.textfield, focused: classes.focused }
        }}
        InputProps={{
          classes: { underline: classes.underline, root: classes.inputRoot }
        }}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        inputProps={{
          maxlength: maxlength,
          minlength: 5,
          min: 0
        }}
      />
      {required && (
        <Typography variant="subtitle2" className={classes.required}>
          Required
        </Typography>
      )}
    </div>
  );
};

TextInput.defaultProps = {
  value: '',
  name: '',
  onChange: e => {},
  label: '',
  type: 'text',
  required: false,
  maxlength: 400
};
