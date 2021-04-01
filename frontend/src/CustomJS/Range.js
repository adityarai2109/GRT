import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
  },
  margin: {
    height: theme.spacing(1),
  },
}));

const marks = [
  {
    value: 0,
    label: 0,
  },
  {
    value: 20,
    label: 2000,
  },
  {
    value: 40,
    label: 4000,
  },
  {
    value: 60,
    label: 6000,
  },
  {
    value: 80,
    label: 8000,
  },
  {
    value: 100,
    label: 10000,
  },
];

export default function TrackInvertedSlider(props) {
  const handleSliderChange = (event, newValue) => {
    props.setValue(newValue);
    // console.log(parseInt(props.value[0]) * 100, parseInt(props.value[1]) * 100);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div id="input-slider" gutterBottom>
        Range
      </div>
      <div className={classes.margin} />
      <Slider
        aria-labelledby="range-slider"
        defaultValue={[0, 100]}
        marks={marks}
        onChange={handleSliderChange}
      />
    </div>
  );
}
