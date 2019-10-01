import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import GridSettings from "./Settings/GridSettings";
import Output from "./Settings/Output";
import Grid from "./Grid/Grid";
import { Colours } from "../constants";

interface IState {
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

export const INITIAL_STATE: IState = {
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

const Main: React.FC<IState> = () => {
  const [settings, setSettings] = useState(INITIAL_STATE);

  const onChange = e =>
    setSettings({ ...settings, [e.target.name]: e.target.value });

  const changeCheckbox = e =>
    setSettings({ ...settings, [e.target.name]: e.target.checked });

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

  return (
    <Fragment>
        <GridSettings
          metric={metric}
          collapsed={collapsed}
          open={open}
          singleLine={singleLine}
          tempColour={tempColour}
          precipColour={precipColour}
          rainColour={rainColour}
          snowColour={snowColour}
          unitPrecipDays={unitPrecipDays}
          unitRainDays={unitRainDays}
          unitSnowDays={unitSnowDays}
          humidColour={humidColour}
          calculateYearAvg={calculateYearAvg}
          calculateMeanTemps={calculateMeanTemps}
          onChange={onChange}
          changeCheckbox={changeCheckbox}
        />
        <br />
        <Output />
        <br />
        <br />
        <Grid />
        <br />
        <button onClick={() => {}} />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  metric: state.settings.metric,
  open: state.settings.open,
  collapsed: state.settings.collapsed,
  singleLine: state.settings.singleLine,
  tempColour: state.settings.tempColour,
  precipColour: state.settings.precipColour,
  rainColour: state.settings.rainColour,
  snowColour: state.settings.snowColour,
  humidColour: state.settings.humidColour,
  unitPrecipDays: state.settings.unitPrecipDays,
  unitRainDays: state.settings.unitRainDays,
  unitSnowDays: state.settings.unitSnowDays,
  calculateYearAvg: state.settings.calculateYearAvg,
  calculateMeanTemps: state.settings.calculateMeanTemps
});

export default connect(mapStateToProps)(Main);
