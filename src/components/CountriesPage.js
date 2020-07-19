import React from "react";
import CountryCard from "./CountryCard";
import Grid from "@material-ui/core/Grid";
const CountriesPage = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <CountryCard />
      </Grid>
      <Grid item xs={6}>
        <CountryCard />
      </Grid>
      <Grid item xs={6}>
        <CountryCard />
      </Grid>
    </Grid>
  );
};

export default CountriesPage;
