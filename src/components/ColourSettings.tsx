import React, { Fragment, useState } from "react";
import { Colours } from "../constants";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel
} from "@material-ui/core";

interface IColours {
  tempColour: string;
  precipColour: string;
  rainColour: string;
  snowColour: string;
  humidColour: string;
}

const initial = {
  tempColour: "standard",
  precipColour: "blue",
  rainColour: "blue",
  snowColour: "blue",
  humidColour: "green"
};

const ColourSettings: React.FC = () => {
  const { NONE, BLUE, GREEN, PASTEL, STANDARD } = Colours;
  const [colour, setColour] = useState<IColours>(initial);
  const {
    tempColour,
    precipColour,
    rainColour,
    snowColour,
    humidColour
  } = colour;

  const onChange = e =>
    setColour({ ...colour, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1>Colours</h1>
      <p>
        Select the colors you want to use for temperature, precipitation, rain,
        and snow.
      </p>
      <FormControl>
        <FormLabel>Temperature</FormLabel>
        <RadioGroup
          aria-label="Temperature Colour"
          name="tempColour"
          value={tempColour}
          onChange={onChange}
        >
          <FormControlLabel
            value={STANDARD}
            control={<Radio />}
            label="Standard"
          />
          <FormControlLabel value={PASTEL} control={<Radio />} label="Pastel" />
          <FormControlLabel value={NONE} control={<Radio />} label="None" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Precipitation</FormLabel>
        <RadioGroup
          aria-label="Precipitation Colour"
          name="precipColour"
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
          name="rainColour"
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
          name="snowColour"
          value={snowColour}
          onChange={onChange}
        >
          <FormControlLabel value={BLUE} control={<Radio />} label="Blue" />
          <FormControlLabel value={GREEN} control={<Radio />} label="Green" />
          <FormControlLabel value={NONE} control={<Radio />} label="None" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Humidity</FormLabel>
        <RadioGroup
          aria-label="Humidity Colour"
          name="humidColour"
          value={humidColour}
          onChange={onChange}
        >
          <FormControlLabel value={GREEN} control={<Radio />} label="Green" />
          <FormControlLabel value={PASTEL} control={<Radio />} label="Pastel" />
          <FormControlLabel value={NONE} control={<Radio />} label="None" />
        </RadioGroup>
      </FormControl>
    </Fragment>
  );
};

export default ColourSettings;
