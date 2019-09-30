import React, { Fragment, useState } from "react";
import Switches from "./Switches";
import ColourSettings from "./ColourSettings";
import UnitDays from "./UnitDays";
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
  calculateAvg: string;
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
  calculateAvg: "true"
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
    unitSnowDays
  } = settings;
  const onChange = e =>
    setSettings({ ...settings, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <Switches
        metric={metric}
        open={open}
        collapsed={collapsed}
        singleLine={singleLine}
        onChange={onChange}
      />
      <ColourSettings
        tempColour={tempColour}
        precipColour={precipColour}
        rainColour={rainColour}
        snowColour={snowColour}
        humidColour={humidColour}
        onChange={onChange}
      />
      <UnitDays
        unitPrecipDays={unitPrecipDays}
        unitRainDays={unitRainDays}
        unitSnowDays={unitSnowDays}
        onChange={onChange}
      />
    </Fragment>
  );
};

export default GridSettings;
