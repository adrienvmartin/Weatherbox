import React, { Fragment } from "react";
import { PrecipColours, TempColours } from "../constants";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel
} from "@material-ui/core";

interface IProps {
  onChange: (e) => void;
  tempColour: string;
  precipColour: string;
  rainColour: string;
  snowColour: string;
}

const ColourSettings: React.FC<IProps> = props => {
  const { onChange, tempColour, precipColour, rainColour, snowColour } = props;
  const { BLUE, GREEN, NONE } = PrecipColours;
  const { PASTEL, STANDARD } = TempColours;
  return (
    <Fragment>
      <h1>Colours</h1>
      <br />
      <FormControl>
        <FormLabel>Temperature</FormLabel>
        <RadioGroup
          aria-label="Temperature Colour"
          name="temp-color"
          value={tempColour}
          onChange={onChange}
        >
          <FormControlLabel value={STANDARD} control={<Radio />} label="Standard" />
          <FormControlLabel value={PASTEL} control={<Radio />} label="Pastel" />
          <FormControlLabel value={NONE} control={<Radio />} label="None" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Precipitation</FormLabel>
        <RadioGroup
          aria-label="Precipitation Colour"
          name="precip-settings"
          value={precipColour}
          onChange={onChange}
        >
          <FormControlLabel value={BLUE} control={<Radio />} label="Blue" />
          <FormControlLabel value={GREEN} control={<Radio />} label="Green" />
          <FormControlLabel value={NONE} control={<Radio />} label="None" />
        </RadioGroup>
      </FormControl>
      <br />
      <FormControl>
        <FormLabel>Rain</FormLabel>
        <RadioGroup
          aria-label="Rain Colour"
          name="rain-color"
          value={rainColour}
          onChange={onChange}
        >
          <FormControlLabel value={BLUE} control={<Radio />} label="Blue" />
          <FormControlLabel value={GREEN} control={<Radio />} label="Green" />
          <FormControlLabel value={NONE} control={<Radio />} label="None" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Snow</FormLabel>
        <RadioGroup
          aria-label="Snow Colour"
          name="snow-color"
          value={snowColour}
          onChange={onChange}
        >
          <FormControlLabel value={BLUE} control={<Radio />} label="Blue" />
          <FormControlLabel value={GREEN} control={<Radio />} label="Green" />
          <FormControlLabel value={NONE} control={<Radio />} label="None" />
        </RadioGroup>
      </FormControl>
    </Fragment>
  );
};

export default ColourSettings;
