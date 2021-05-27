import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
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
    label: 200,
  },
  {
    value: 40,
    label: 400,
  },
  {
    value: 60,
    label: 600,
  },
  {
    value: 80,
    label: 800,
  },
  {
    value: 100,
    label: 1000,
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
      <Slider
        aria-labelledby="range-slider"
        // getAriaValueText={"value"}
        defaultValue={[props.value[0], props.value[1]]}
        marks={marks}
        onChange={handleSliderChange}
      />
    </div>
  );
}
