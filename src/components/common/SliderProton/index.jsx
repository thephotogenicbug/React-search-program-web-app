import React from "react";
import { makeStyles } from "@material-ui/core";
import { Slider } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "85%",
    margin: '1rem',
  },
  thumb: {
    color: "#000",
  },
  rail: {
    color: "rgba(0,0,0,.26)",
  },
  track: {
    color: "#000",
  },
});

const SliderProton = ({ value, changedPrice }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Slider
        value={value}
        onChange={changedPrice}
        valueLabelDisplay="on"
        min={1000}
        max={5000}
        classes={{
          thumb: classes.thumb,
          rail: classes.rail,
          track: classes.track,
        }}
      />
    </div>
  );
};

export default SliderProton;
