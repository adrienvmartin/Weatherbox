import React, { Fragment } from "react";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel
} from "@material-ui/core";

interface IProps {
  metric: boolean;
  open: boolean;
  collapsed: boolean;
  singleLine: boolean;
  onChange: (e: any) => void;
}

const Switches: React.FC<IProps> = (props) => {
  const { metric, onChange, collapsed, open, singleLine } = props;
  return (
    <Fragment>
      <h1>Switches</h1>
      <FormControl component="fieldset">
        <FormLabel component="legend">Metric?</FormLabel>
        <RadioGroup
          aria-label="metric"
          name="metric"
          value={metric}
          onChange={onChange}
        >
          <FormControlLabel value={true} control={<Radio />} label="Celsius" />
          <FormControlLabel value={false} control={<Radio />} label="Fahrenheit" />
        </RadioGroup>
      </FormControl>
      <br />
      <FormControl component="fieldset">
        <FormLabel component="legend">Open?</FormLabel>
        <RadioGroup
          aria-label="open"
          name="open"
          value={open}
          onChange={onChange}
        >
          <FormControlLabel value={true} control={<Radio />} label="Yes" />
          <FormControlLabel value={false} control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      <br/>
      <FormControl component="fieldset">
        <FormLabel component="legend">Collapsed?</FormLabel>
        <RadioGroup
          aria-label="collapsed"
          name="collapsed"
          value={collapsed}
          onChange={onChange}
        >
          <FormControlLabel value={true} control={<Radio />} label="Yes" />
          <FormControlLabel value={false} control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      <br />
      <FormControl component="fieldset">
        <FormLabel component="legend">Single Line?</FormLabel>
        <RadioGroup
          aria-label="single-line"
          name="single-line"
          value={singleLine}
          onChange={onChange}
        >
          <FormControlLabel value={true} control={<Radio />} label="Yes" />
          <FormControlLabel value={false} control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
    </Fragment>
  )
};

export default Switches;
