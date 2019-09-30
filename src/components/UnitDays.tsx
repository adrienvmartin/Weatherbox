import React, { Fragment } from 'react';
import { TextField } from '@material-ui/core';

interface IProps {
  precipDays: string;
  rainDays: string;
  snowDays: string;
  onChange: (e) => void;
}

const UnitDays: React.FC<IProps> = props => {
  const { precipDays, rainDays, snowDays, onChange } = props;
  return (
    <Fragment>
      <h1>Precipitation Units</h1>
      <p>Enter the unit used for precipitation/rain/snow days, in whatever system of units you want (i.e. 0.2mm, 1.0in, etc).</p>
      <form>
        <TextField
          id="outlined-name"
          label="Precipitation Days"
          value={precipDays}
          onChange={onChange}
          margin="normal"
          variant="outlined"
          />
        <TextField
          id="outlined-name"
          label="Rain Days"
          value={rainDays}
          onChange={onChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Snow Days"
          value={snowDays}
          onChange={onChange}
          margin="normal"
          variant="outlined"
        />
      </form>
    </Fragment>
  )
};

export default UnitDays;
