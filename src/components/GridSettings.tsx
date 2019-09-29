import React from "react";
import { Radio, RadioGroup } from "@material-ui/core";

export const INITIAL_STATE = {
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

export class MetricSwitch extends React.Component {
  public state: true;

};
