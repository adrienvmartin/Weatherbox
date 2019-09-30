import React, { Fragment } from "react";
import Switches from "./Switches";
import ColourSettings from "./ColourSettings";
import UnitDays from "./UnitDays";
import CalculateAverages from "./Calculate";
import { Colours } from "../../constants";

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
  onChange: (e) => void;
  changeCheckbox: (e) => void;
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
      <Switches
        metric={metric}
        open={open}
        collapsed={collapsed}
        singleLine={singleLine}
        onChange={onChange}
      />
      <br />
      <ColourSettings
        tempColour={tempColour}
        precipColour={precipColour}
        rainColour={rainColour}
        snowColour={snowColour}
        humidColour={humidColour}
        onChange={onChange}
      />
      <br />
      <UnitDays
        unitPrecipDays={unitPrecipDays}
        unitRainDays={unitRainDays}
        unitSnowDays={unitSnowDays}
        onChange={onChange}
      />
      <br />
      <CalculateAverages
        calculateYearAvg={calculateYearAvg}
        calculateMeanTemps={calculateMeanTemps}
        onChange={changeCheckbox}
      />
    </Fragment>
  );
};

export default GridSettings;
