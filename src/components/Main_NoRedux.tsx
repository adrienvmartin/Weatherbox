import React, { Fragment } from "react";
import GridSettings_NoRedux from "./Settings/GridSettings_NoRedux";
import Grid_NoRedux from "./Grid/Grid_NoRedux";
import { Colours } from "../constants";
import RowSelector from "./Grid/RowSelector";

interface ISettingsState {
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

interface IDataObject {
  key: number;
  month: string;
  selected: boolean;
  jan?: string;
  feb?: string;
  mar?: string;
  apr?: string;
  may?: string;
  jun?: string;
  jul?: string;
  aug?: string;
  sep?: string;
  oct?: string;
  nov?: string;
  dec?: string;
  year?: string;

}

interface IState {
  settings: ISettingsState;
  data: Array<IDataObject>;
}

export const INITIAL_STATE: IState = {
  settings: {
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
  },
  data: [
    { key: 0, month: "Record high humidex", selected: false },
    { key: 1, month: "Record high", selected: false },
    { key: 2, month: "Mean maximum", selected: false },
    { key: 3, month: "Average High", selected: false },
    { key: 4, month: "Daily mean", selected: false },
    { key: 5, month: "Average Low", selected: false },
    { key: 6, month: "Mean minimum", selected: false },
    { key: 7, month: "Record low", selected: false },
    { key: 8, month: "Record low wind chill", selected: false },
    { key: 9, month: "Average precipitation", selected: false },
    { key: 10, month: "Average rainfall", selected: false },
    { key: 11, month: "Average snowfall", selected: false },
    { key: 12, month: "Average precipitation days", selected: false },
    { key: 13, month: "Average rainy days", selected: false },
    { key: 14, month: "Average snowy days", selected: false },
    { key: 15, month: "Average relative humidity", selected: false },
    { key: 16, month: "Average afternoon humidity", selected: false },
    { key: 17, month: "Mean monthly sunshine hours", selected: false },
    { key: 18, month: "Mean daily sunshine hours", selected: false },
    { key: 19, month: "Percent possible sunshine", selected: false },
    { key: 20, month: "Average ultraviolet index", selected: false }
  ]
};

const defaultRows = [
  rows[1],
  rows[3],
  rows[4],
  rows[5],
  rows[7],
  rows[9],
  rows[17]
];

class Main extends React.Component<{}, IState> {
  public state: IState = INITIAL_STATE;

  public onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(
      state => ({
        ...state,
        settings: {
          ...state.settings,
          [name]: value
        }
      }),
      () => console.log(this.state)
    );
  };

  public changeCheckbox = e => {
    const name = e.target.name;
    const checked = e.target.checked;
    this.setState(state => ({
      ...state,
      settings: {
        ...state.settings,
        [name]: checked
      }
    }));
  };

  public changeRowbox = e => {
    const name = e.target.name;
    const checked = e.target.checked;
    this.setState(name, checked);
  };

  render() {
    const { settings } = this.state;

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

    /*const {
       humidex,
       recHigh,
       meanMax,
       avgHigh,
       dayMean,
       avgLow,
       meanMin,
       recLow,
       windchill
     } = data;*/

    // Submission function = columns.forEach(get existing rows by column key (jan, feb, etc))
    return (
      <Fragment>
        <GridSettings_NoRedux
          metric={metric}
          open={open}
          collapsed={collapsed}
          singleLine={singleLine}
          tempColour={tempColour}
          precipColour={precipColour}
          rainColour={rainColour}
          snowColour={snowColour}
          humidColour={humidColour}
          unitPrecipDays={unitPrecipDays}
          unitRainDays={unitRainDays}
          unitSnowDays={unitSnowDays}
          calculateYearAvg={calculateYearAvg}
          calculateMeanTemps={calculateMeanTemps}
          onChange={this.onChange}
          changeCheckbox={this.changeCheckbox}
        />
        <br />
        <RowSelector rows={rows} onChange={this.changeCheckbox} />
        <Grid_NoRedux selectedRows={defaultRows} defaultRows={defaultRows} />
        <br />
        <button onClick={() => {}} />
      </Fragment>
    );
  }
}

export default Main;
