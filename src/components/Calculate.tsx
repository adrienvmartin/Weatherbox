import React, { Fragment } from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup
} from "@material-ui/core";

interface IProps {
  calculateYearAvg: boolean;
  calculateMeanTemps: boolean;
  onChange: (e) => void;
}

const CalculateAverages: React.FC<IProps> = ({
  calculateYearAvg,
  calculateMeanTemps,
  onChange
}) => {
  return (
    <Fragment>
      <h1>Averages</h1>
      <FormControl component="fieldset">
        <p>Select any averages you'd like to have automatically calculated.</p>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={calculateYearAvg}
                onChange={onChange}
                value="calculateYearAvg"
              />
            }
            label="Yearly Average High/Low"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={calculateMeanTemps}
                onChange={onChange}
                value="calculateYearAvg"
              />
            }
            label="Monthly Mean Temperatures Based On Avg High/Low"
          />
        </FormGroup>
      </FormControl>
    </Fragment>
  );
};

export default CalculateAverages;
