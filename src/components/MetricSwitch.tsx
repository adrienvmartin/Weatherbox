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
  onChange: (e: any) => void;
}

const MetricSwitch: React.FC<IProps> = (props) => {
  const { metric, onChange } = props;
  return (
    <Fragment>
      <FormControl component="fieldset">
        <FormLabel component="legend">Metric?</FormLabel>
        <RadioGroup
          aria-label="metric"
          name="metric"
          value={metric}
          onChange={onChange}
        >
          <FormControlLabel value="C" control={<Radio />} label="Celsius" />
          <FormControlLabel value="F" control={<Radio />} label="Fahrenheit" />
        </RadioGroup>
      </FormControl>
    </Fragment>
  )
};

export default MetricSwitch;
