import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const CountryCard = (props) => {
  const { country, intensity, values, business } = props;

  return (
    <Card>
      <CardContent>
        <Typography>Country</Typography>
        <Typography gutterBottom>Values</Typography>
      </CardContent>
    </Card>
  );
};

export default CountryCard;
