import React, { Fragment, useState } from 'react';
import { TextField } from '@material-ui/core';

interface IUnits {
  precipDays: string;
  rainDays: string;
  snowDays: string;
}

const initial = {
  precipDays: '0.2mm',
  rainDays: '0.2mm',
  snowDays: '0.2cm',
};

const UnitDays: React.FC = () => {
  const [units, setUnits] = useState<IUnits>(initial);
  const { precipDays, rainDays, snowDays } = units;
  const onChange = e => { setUnits({ ...units, [e.target.name]: e.target.value })};
  return (
    <Fragment>
      <h1>Precipitation Units</h1>
      <p>Enter the unit used for precipitation/rain/snow days, in whatever system of units you want (i.e. 0.2mm, 1.0in, etc).</p>
      <form>
        <TextField
          id="outlined-name"
          name="precipDays"
          label="Precipitation Days"
          value={precipDays}
          onChange={onChange}
          margin="normal"
          variant="outlined"
          />
        <TextField
          id="outlined-name"
          name="rainDays"
          label="Rain Days"
          value={rainDays}
          onChange={onChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          name="snowDays"
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
