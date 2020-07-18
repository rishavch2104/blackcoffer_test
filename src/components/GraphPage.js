import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import NativeSelect from "@material-ui/core/NativeSelect";

import {
  InputLabel,
  FormControl,
  FormControlLabel,
  Switch,
  AccordionDetails,
  Accordion,
  AccordionSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const axisValues = ["sector", "country", "topic", "region", "pestle", "city"];

const useStyles = makeStyles({
  input: {
    width: "max-content",
  },
});

const GraphPage = () => {
  const classes = useStyles();
  const [switchState, setSwitchState] = React.useState(false);
  const switchStateChange = () => {
    setSwitchState(!switchState);
  };
  return (
    <Box mt="40px">
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Box
            paddingTop="20px"
            width="100%"
            height="100px"
            border="2px solid"
            borderRadius={10}
            display="flex"
            justifyContent="space-around"
          >
            <FormControl>
              <InputLabel className={classes.input}>Horizontal Axis</InputLabel>
              <NativeSelect>
                {axisValues.map((value) => (
                  <option value={value}>{value}</option>
                ))}
              </NativeSelect>
            </FormControl>
            <FormControl>
              <InputLabel className={classes.input}>Vertical Axis</InputLabel>
              <NativeSelect>
                {axisValues.map((value) => (
                  <option value={value}>{value}</option>
                ))}
              </NativeSelect>
            </FormControl>
            <Divider orientation="vertical" flexItem />
            <FormControl>
              <InputLabel>Measures</InputLabel>
              <NativeSelect>
                {axisValues.map((value) => (
                  <option value={value}>value</option>
                ))}
              </NativeSelect>
            </FormControl>
            <Divider orientation="vertical" flexItem />
            <FormControl>
              <InputLabel>Confidence</InputLabel>
              <NativeSelect>
                {axisValues.map((value) => (
                  <option value={value}>value</option>
                ))}
              </NativeSelect>
            </FormControl>
            <Divider orientation="vertical" flexItem />
            <FormControl>
              <InputLabel>Swat</InputLabel>
              <NativeSelect>
                {axisValues.map((value) => (
                  <option value={value}>value</option>
                ))}
              </NativeSelect>
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Paper variant="outlined" style={{ height: "100px" }}>
            <FormControlLabel
              labelPlacement="start"
              control={
                <Switch
                  checked={switchState}
                  onChange={switchStateChange}
                  name="checked"
                />
              }
              label="Year"
              mar
            />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Box borderRadius={10} width="100%" border="2px solid">
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Heading</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Body Goes Here</Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Paper style={{ width: "70%", height: "30vh" }}>
            <Typography>Graph goes here</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper style={{ width: "70%", height: "30vh" }}>
            <Box display="flex" flex-direction="row">
              {" "}
              <FormControl>
                <InputLabel>Filter</InputLabel>
                <NativeSelect>
                  {axisValues.map((value) => (
                    <option value={value}>value</option>
                  ))}
                </NativeSelect>
              </FormControl>
              <FormControl>
                <InputLabel>Swat</InputLabel>
                <NativeSelect>
                  {axisValues.map((value) => (
                    <option value={value}>value</option>
                  ))}
                </NativeSelect>
              </FormControl>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GraphPage;
