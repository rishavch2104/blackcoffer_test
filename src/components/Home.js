import React from "react";
import Tabs from "@material-ui/core/Tabs";
import { AppBar, Tab, Container } from "@material-ui/core";
import GraphPage from "./GraphPage";
import CountriesPage from "./CountriesPage";
import EntriesPage from "./EntriesPage";

const Home = () => {
  const [tabNumber, setTabNumber] = React.useState(0);
  const handleTabChange = (e, newValue) => {
    setTabNumber(newValue);
  };
  return (
    <Container>
      <AppBar position="static">
        <Tabs variant="fullWidth" value={tabNumber} onChange={handleTabChange}>
          <Tab label="Graph" />
          <Tab label="Top Countries" />
          <Tab label="Entries Page" />
        </Tabs>
      </AppBar>
      {tabNumber === 0 && <GraphPage />}
      {tabNumber === 1 && <CountriesPage />}
      {tabNumber === 2 && <EntriesPage />}
    </Container>
  );
};

export default Home;
