import React, { Fragment } from "react";
import Switches from "./Switches";
import ColourSettings from "./ColourSettings";
import UnitDays from "./UnitDays";
import { Colours } from "../../constants";
import { Grid } from "@material-ui/core";

interface IProps {
  metric: string;
  collapsed: string;
  open: string;
  singleLine: string;
  tempColour: Colours;
  precipColour: Colours;
  rainColour: Colours;
  snowColour: Colours;
  humidColour: Colours;
  unitPrecipDays: string;
  unitRainDays: string;
  unitSnowDays: string;
  onChange: (e) => any;
}

const GridSettings: React.FC<IProps> = props => {
  const {
    metric,
    open,
    collapsed,
    singleLine,
    tempColour,
    precipColour,
    rainColour,
    snowColour,
    humidColour,
    unitPrecipDays,
    unitRainDays,
    unitSnowDays,
    onChange
  } = props;
  return (
    <Fragment>
      <Grid container justify="center" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <Grid item xs={12}>
          <Switches
            metric={metric}
            open={open}
            collapsed={collapsed}
            singleLine={singleLine}
            onChange={onChange}
          />
        </Grid>
        <br />
        <Grid item xs={12}>
          <ColourSettings
            tempColour={tempColour}
            precipColour={precipColour}
            rainColour={rainColour}
            snowColour={snowColour}
            humidColour={humidColour}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <UnitDays
            unitPrecipDays={unitPrecipDays}
            unitRainDays={unitRainDays}
            unitSnowDays={unitSnowDays}
            onChange={onChange}
          />
        </Grid>
        <br />
      </Grid>
    </Fragment>
  );
};

export default GridSettings;
