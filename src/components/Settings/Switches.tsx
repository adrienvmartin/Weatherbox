import React, { Fragment } from "react";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel
} from "@material-ui/core";

interface IProps {
  metric: string;
  open: string;
  collapsed: string;
  singleLine: string;
  onChange: (e) => void;
}

const Switches: React.FC<IProps> = props => {
  const { metric, collapsed, open, singleLine, onChange } = props;
  return (
    <Fragment>
      <h1>Switches</h1>
      <div className="settingsContainer">
        <FormControl component="fieldset">
          <FormLabel component="legend">Metric?</FormLabel>
          <RadioGroup
            aria-label="metric"
            name="metric"
            value={metric}
            onChange={onChange}
          >
            <FormControlLabel
              value={"true"}
              control={<Radio />}
              label="Celsius"
            />
            <FormControlLabel
              value={"false"}
              control={<Radio />}
              label="Fahrenheit"
            />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">Open?</FormLabel>
          <RadioGroup
            aria-label="open"
            name="open"
            value={open}
            onChange={onChange}
          >
            <FormControlLabel value={"true"} control={<Radio />} label="Yes" />
            <FormControlLabel value={"false"} control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">Collapsed?</FormLabel>
          <RadioGroup
            aria-label="collapsed"
            name="collapsed"
            value={collapsed}
            onChange={onChange}
          >
            <FormControlLabel value={"true"} control={<Radio />} label="Yes" />
            <FormControlLabel value={"false"} control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">Single Line?</FormLabel>
          <RadioGroup
            aria-label="single-line"
            name="singleLine"
            value={singleLine}
            onChange={onChange}
          >
            <FormControlLabel value={"true"} control={<Radio />} label="Yes" />
            <FormControlLabel value={"false"} control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </div>
    </Fragment>
  );
};

export default Switches;
