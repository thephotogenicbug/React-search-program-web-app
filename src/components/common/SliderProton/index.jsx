import React from "react";
import { makeStyles } from "@material-ui/core";
import { Slider } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "85%",
    margin: "1rem",
  },
  thumb: {
    color: "#1D5AD4",
  },
  rail: {
    color: "#1D5AD4",
  },
  track: {
    color: "#1D5AD4",
  },
});

const SliderProton = ({ value, changedPrice }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Slider
        value={value}
        onChange={changedPrice}
        valueLabelDisplay="auto"
        min={1000}
        max={260000}
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
