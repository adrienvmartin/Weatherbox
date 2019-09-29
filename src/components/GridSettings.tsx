import React from "react";

interface IGridSettingsState {
  metric: boolean;
  collapsed: boolean;
  open: boolean;
  singleLine: boolean;
  location: string;
  precipColour: string;
  rainColour: string;
  snowColour: string;
  unitPrecipDays: string;
  unitRainDays: string;
  unitSnowDays: string;
  humidityColour: string;
}

export const INITIAL_STATE: IGridSettingsState = {
  metric: true,
  collapsed: false,
  open: false,
  singleLine: true,
  location: '',
  precipColour: 'blue',
  rainColour: 'blue',
  snowColour: 'blue',
  unitPrecipDays: '0.2mm',
  unitRainDays: '0.2mm',
  unitSnowDays: '0.2cm',
  humidityColour: 'blue',
};

export class GridSettings extends React.Component<IGridSettingsState> {
  public state: IGridSettingsState = INITIAL_STATE;

};
