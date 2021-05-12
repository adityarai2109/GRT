import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Box from "@material-ui/core/Box";

const StyledRating = withStyles({
  iconFilled: {
    color: "#ff3d47",
  },
  iconHover: {
    color: "#ff3d47",
  },
})(Rating);

export default function CustomizedRatings(props) {
  return (
    <div>
      <Box component="fieldset" borderColor="transparent">
        <StyledRating
          disabled={true}
          name="customized-color"
          defaultValue={props.rating}
          getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
          precision={1}
          icon={<FavoriteIcon fontSize="inherit" />}
          size="large"
        />
      </Box>
    </div>
  );
}
