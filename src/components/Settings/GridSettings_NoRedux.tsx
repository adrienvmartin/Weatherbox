import React, { Fragment } from "react";
import Switches from "./Switches";
import ColourSettings from "./ColourSettings";
import UnitDays from "./UnitDays";
import CalculateAverages from "./Calculate";
import { Colours } from "../../constants";
import { Paper } from "@material-ui/core";

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
  calculateYearAvg: boolean;
  calculateMeanTemps: boolean;
  onChange: (e) => any;
  changeCheckbox: (e) => any;
}

const GridSettings: React.FC<IProps> = (props) => {
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
      calculateYearAvg,
      calculateMeanTemps,
      onChange,
      changeCheckbox
    } = props;
    return (
      <Fragment>
        <Paper>
          <Switches
            metric={metric}
            open={open}
            collapsed={collapsed}
            singleLine={singleLine}
            onChange={onChange}
          />
        </Paper>
        <br />
        <Paper>
          <ColourSettings
            tempColour={tempColour}
            precipColour={precipColour}
            rainColour={rainColour}
            snowColour={snowColour}
            humidColour={humidColour}
            onChange={onChange}
          />
        </Paper>
        <br />
        <Paper>
          <UnitDays
            unitPrecipDays={unitPrecipDays}
            unitRainDays={unitRainDays}
            unitSnowDays={unitSnowDays}
            onChange={onChange}
          />
        </Paper>
        <br />
        <Paper>
          <CalculateAverages
            calculateYearAvg={calculateYearAvg}
            calculateMeanTemps={calculateMeanTemps}
            onChange={changeCheckbox}
          />
        </Paper>
      </Fragment>
    );
};

export default GridSettings;
