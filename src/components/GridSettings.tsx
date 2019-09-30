import React, { Fragment, useState } from "react";
import Switches from "./Switches";
import ColourSettings from "./ColourSettings";
import UnitDays from "./UnitDays";
import CalculateAverages from "./Calculate";
import { Colours } from "../constants";

interface IGridSettingsState {
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
}

export const INITIAL_STATE: IGridSettingsState = {
  metric: "true",
  collapsed: "false",
  open: "false",
  singleLine: "true",
  tempColour: Colours.STANDARD,
  precipColour: Colours.BLUE,
  rainColour: Colours.BLUE,
  snowColour: Colours.BLUE,
  humidColour: Colours.GREEN,
  unitPrecipDays: "0.2mm",
  unitRainDays: "0.2mm",
  unitSnowDays: "0.2cm",
  calculateYearAvg: true,
  calculateMeanTemps: false
};

const GridSettings: React.FC<IGridSettingsState> = () => {
  const [settings, setSettings] = useState<IGridSettingsState>(INITIAL_STATE);
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
    calculateMeanTemps
  } = settings;
  const onChange = e =>
    setSettings({ ...settings, [e.target.name]: e.target.value });

  const changeCheckbox =e =>
    setSettings({ ...settings, [e.target.name]: e.target.checked });

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
