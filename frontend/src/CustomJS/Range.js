import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 1000,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 10,
    label: "1000",
  },
  {
    value: 25,
    label: "2500",
  },
  {
    value: 50,
    label: "5000",
  },
  {
    value: 75,
    label: "7500",
  },
  {
    value: 100,
    label: "10000",
  },
];

// function valuetext(value) {
//   return `${value}°C`;
// }

export default function TrackInvertedSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.margin} />
      <Slider
        aria-labelledby="range-slider"
        //getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        defaultValue={[0, 10000]}
        marks={marks}
      />
    </div>
  );
}
/*
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Temperature range
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}

*/
