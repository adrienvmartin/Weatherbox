import React, { Fragment } from "react";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel
} from "@material-ui/core";
import { TempColours, PrecipColours } from "../constants";

interface IState {
  tempColour: TempColours;
  precipColour: PrecipColours;
  rainColour: PrecipColours;
  snowColour: PrecipColours;
  onChange: (e: any) => void;
}

const ColourSettings: React.FC<IState> = (props) => {
  const { onChange } = props;
  return (
    <Fragment>
      <h1>Colors</h1>
      <br />
      <FormControl>
        <FormLabel>Colour Settings</FormLabel>
        <RadioGroup
        aria-label="colour settings"
        name="colour-settings"
        value={'test'}
        onChange={onChange}>
          <FormControlLabel value={'test'} control={<Radio />} label="blue" />
        </RadioGroup>
      </FormControl>
    </Fragment>
  );
};

export default ColourSettings;
