import React, { Fragment } from "react";
import { TextField } from "@material-ui/core";

interface IProps {
  unitPrecipDays: string;
  unitRainDays: string;
  unitSnowDays: string;
  onChange: (e) => void;
}

const UnitDays: React.FC<IProps> = ({
  unitPrecipDays,
  unitRainDays,
  unitSnowDays,
  onChange
}) => {
  return (
    <Fragment>
      <h1>Precipitation Units</h1>
      <p>
        Enter the unit used for precipitation/rain/snow days, in whatever system
        of units you want (i.e. 0.2mm, 1.0in, etc).
      </p>
      <form>
        <TextField
          id="outlined-name"
          name="unitPrecipDays"
          label="Precipitation Days"
          value={unitPrecipDays}
          onChange={onChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          name="unitRainDays"
          label="Rain Days"
          value={unitRainDays}
          onChange={onChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          name="unitSnowDays"
          label="Snow Days"
          value={unitSnowDays}
          onChange={onChange}
          margin="normal"
          variant="outlined"
        />
      </form>
    </Fragment>
  );
};

export default UnitDays;
