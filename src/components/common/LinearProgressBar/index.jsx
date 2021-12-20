import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { LinearProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    marginLeft:'100px',
    "& > * + *": {
      marginTop: '16px',
    },
  },
}));

const LinearProgressBar = () => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <LinearProgress color="secondary" />
      </div>
    );
}

export default LinearProgressBar
