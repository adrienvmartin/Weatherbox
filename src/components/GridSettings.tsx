import React, { Fragment } from "react";
import Switches from "./Switches";
import ColourSettings from "./ColourSettings";
import UnitDays from './UnitDays';
import { TempColours, PrecipColours } from "../constants";

interface IGridSettingsState {
  metric: boolean;
  collapsed: boolean;
  open: boolean;
  singleLine: boolean;
  tempColour: TempColours;
  precipColour: PrecipColours;
  rainColour: PrecipColours;
  snowColour: PrecipColours;
  unitPrecipDays: string;
  unitRainDays: string;
  unitSnowDays: string;
  humidityColour: string;
  calculateAvg: boolean;
}

export const INITIAL_STATE: IGridSettingsState = {
  metric: true,
  collapsed: false,
  open: false,
  singleLine: true,
  tempColour: TempColours.STANDARD,
  precipColour: PrecipColours.BLUE,
  rainColour: PrecipColours.BLUE,
  snowColour: PrecipColours.BLUE,
  unitPrecipDays: "0.2mm",
  unitRainDays: "0.2mm",
  unitSnowDays: "0.2cm",
  humidityColour: "blue",
  calculateAvg: true
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
    const {
      metric,
      collapsed,
      open,
      singleLine,
      tempColour,
      precipColour,
      rainColour,
      snowColour,
      unitPrecipDays,
      unitRainDays,
      unitSnowDays,
      // humidityColour,
      // calculateAvg
    } = this.state;
    return (
      <Fragment>
        <Switches metric={metric} open={open} collapsed={collapsed} singleLine={singleLine} onChange={this.onChange} />
        <ColourSettings
          tempColour={tempColour}
          precipColour={precipColour}
          rainColour={rainColour}
          snowColour={snowColour}
          onChange={this.onChange}
        />
        <UnitDays precipDays={unitPrecipDays} rainDays={unitRainDays} snowDays={unitSnowDays} onChange={this.onChange} />
      </Fragment>
    );
  }
}

export default GridSettings;
