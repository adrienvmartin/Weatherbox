import React, { Fragment } from "react";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Grid,
  TextField
} from "@material-ui/core";

interface IProps {
  location: string;
  metric: string;
  open: string;
  collapsed: string;
  singleLine: string;
  onChange: (e) => void;
}

const Switches: React.FC<IProps> = props => {
  const { location, metric, collapsed, open, singleLine, onChange } = props;
  return (
    <Fragment>
      <h1>Basic Settings</h1>
      <div className="switches">
        <Grid
          container
          spacing={0}
          style={{ marginLeft: "auto", marginRight: "auto" }}
          alignItems="center"
          justify="center"
        >
          <Grid item xs={2}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Location Name</FormLabel>
              <TextField
                aria-label="location"
                name="location"
                value={location}
                onChange={onChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Unit Type</FormLabel>
              <RadioGroup
                aria-label="metric"
                name="metric"
                value={metric}
                onChange={onChange}
              >
                <FormControlLabel
                  value={"true"}
                  control={<Radio />}
                  label="Metric"
                />
                <FormControlLabel
                  value={"false"}
                  control={<Radio />}
                  label="Imperial"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Open?</FormLabel>
              <RadioGroup
                aria-label="open"
                name="open"
                value={open}
                onChange={onChange}
              >
                <FormControlLabel
                  value={"true"}
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel
                  value={"false"}
                  control={<Radio />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Collapsed?</FormLabel>
              <RadioGroup
                aria-label="collapsed"
                name="collapsed"
                value={collapsed}
                onChange={onChange}
              >
                <FormControlLabel
                  value={"true"}
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel
                  value={"false"}
                  control={<Radio />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Single Line?</FormLabel>
              <RadioGroup
                aria-label="single-line"
                name="singleLine"
                value={singleLine}
                onChange={onChange}
              >
                <FormControlLabel
                  value={"true"}
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel
                  value={"false"}
                  control={<Radio />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default Switches;
