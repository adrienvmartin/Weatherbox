import React, { Fragment } from "react";
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
  humidityColour: Colours;
  unitPrecipDays: string;
  unitRainDays: string;
  unitSnowDays: string;
  calculateAvg: string;
}

export const INITIAL_STATE: IGridSettingsState = {
  metric: 'true',
  collapsed: 'false',
  open: 'false',
  singleLine: 'true',
  tempColour: Colours.STANDARD,
  precipColour: Colours.BLUE,
  rainColour: Colours.BLUE,
  snowColour: Colours.BLUE,
  humidityColour: Colours.GREEN,
  unitPrecipDays: "0.2mm",
  unitRainDays: "0.2mm",
  unitSnowDays: "0.2cm",
  calculateAvg: 'true'
};

export class GridSettings extends React.Component<IGridSettingsState> {
  public state: IGridSettingsState = INITIAL_STATE;

  public onChange = e => {
    this.setState(state => ({
      ...state,
      [e.target.name]: e.target.value
    }));
  };

  public render() {
    return (
      <Fragment>
        <Switches />
        <ColourSettings />
        <UnitDays />
      </Fragment>
    );
  }
}

export default GridSettings;
