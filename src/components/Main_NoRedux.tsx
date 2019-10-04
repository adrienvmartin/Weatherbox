import React, { Fragment } from "react";
import GridSettings_NoRedux from "./Settings/GridSettings_NoRedux";
import Grid_NoRedux from "./Grid/Grid_NoRedux";
import { Colours } from "../constants";
import RowSelector from "./Grid/RowSelector";
import { columns, Category } from "../constants";
import { dataParser } from "../dataParser";
import { TextField } from "@material-ui/core";

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
}

interface IDataObject {
  key: number;
  field: string;
  selected: boolean;
  templateCode: string;
  category: Category;
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

const { BLANK, TEMP, PRECIP, SNOW } = Category;
const { STANDARD, BLUE, GREEN } = Colours;

export const INITIAL_STATE: IState = {
  settings: {
    metric: "true",
    collapsed: "false",
    open: "false",
    singleLine: "true",
    tempColour: STANDARD,
    precipColour: BLUE,
    rainColour: BLUE,
    snowColour: BLUE,
    humidColour: GREEN,
    unitPrecipDays: "0.2mm",
    unitRainDays: "0.2mm",
    unitSnowDays: "0.2cm"
  },
  data: [
    {
      key: 0,
      field: "Record high humidex",
      selected: false,
      templateCode: "maximum humidex",
      category: BLANK,
    },
    {
      key: 1,
      field: "Record high",
      selected: true,
      templateCode: "record high",
      category: TEMP,
    },
    {
      key: 2,
      field: "Mean maximum",
      selected: false,
      templateCode: "avg record high",
      category: TEMP,
    },
    { key: 3, field: "Average High", selected: true, templateCode: "high", category: TEMP, },
    { key: 4, field: "Daily mean", selected: true, templateCode: "mean", category: TEMP },
    { key: 5, field: "Average Low", selected: true, templateCode: "low", category: TEMP },
    {
      key: 6,
      field: "Mean minimum",
      selected: false,
      templateCode: "avg record low",
      category: TEMP
    },
    { key: 7, field: "Record low", selected: true, templateCode: "record low", category: TEMP },
    {
      key: 8,
      field: "Record low wind chill",
      selected: false,
      templateCode: "chill",
      category: BLANK
    },
    {
      key: 9,
      field: "Average precipitation",
      selected: true,
      templateCode: "precipitation",
      category: PRECIP,
    },
    {
      key: 10,
      field: "Average rainfall",
      selected: false,
      templateCode: "rain",
      category: PRECIP
    },
    {
      key: 11,
      field: "Average snowfall",
      selected: false,
      templateCode: "snow",
      category: SNOW
    },
    {
      key: 12,
      field: "Average precipitation days",
      selected: true,
      templateCode: "precipitation days",
      category: BLANK,
    },
    {
      key: 13,
      field: "Average rainy days",
      selected: false,
      templateCode: "rain days",
      category: BLANK,
    },
    {
      key: 14,
      field: "Average snowy days",
      selected: false,
      templateCode: "snow days",
      category: BLANK,
    },
    {
      key: 15,
      field: "Average relative humidity",
      selected: false,
      templateCode: "humidity",
      category: BLANK,
    },
    {
      key: 16,
      field: "Average afternoon humidity",
      selected: false,
      templateCode: "afthumidity",
      category: BLANK
    },
    {
      key: 17,
      field: "Mean monthly sunshine hours",
      selected: true,
      templateCode: "sun",
      category: BLANK
    },
    {
      key: 18,
      field: "Mean daily sunshine hours",
      selected: false,
      templateCode: "d sun",
      category: BLANK
    },
    {
      key: 19,
      field: "Percent possible sunshine",
      selected: false,
      templateCode: "percentsun",
      category: BLANK
    },
    {
      key: 20,
      field: "Average ultraviolet index",
      selected: false,
      templateCode: "uv",
      category: BLANK
    }
  ]
};

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

  public changeRowbox = e => {
    const value = e.target.value;
    const checked = e.target.checked;
    const target = this.state.data[value].key;
    // @ts-ignore
    this.setState(state => ({
      ...state,
      data: state.data.map(d =>
        d.key === target ? Object.assign(d, { selected: checked }) : d
      )
    }));
    console.log(this.state);
  };

  public selectAllChecks = () => {
    this.setState(state => ({
      ...state,
      data: state.data.map(d => Object.assign(d, { selected: true }))
    }));
  };

  public selectNone = () => {
    this.setState(state => ({
      ...state,
      data: state.data.map(d => Object.assign(d, { selected: false }))
    }));
  };

  public onGridRowsUpdated = ({ fromRow, updated }) => {
    // @ts-ignore
    this.setState(state => {
      const selectedRows = state.data.filter(d => d.selected === true);
      const rowId = selectedRows[fromRow].key;
      const selectedObject = Object.entries(state.data[rowId]);
      const selectedKey = Object.values(selectedObject)[0][1];
      const selectedMonth = Object.keys(updated).toString();
      const selectedMonthValue = Object.values(updated);
      const stateCopy = Object.assign({}, state);
      stateCopy.data[selectedKey][
        `${selectedMonth}`
      ] = selectedMonthValue.toString();
      return stateCopy;
    });
  };

  public selectedRows = rows => {
    return rows.filter(r => r.selected === true);
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
      unitSnowDays
    } = settings;

    const { data } = this.state;

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
          onChange={this.onChange}
        />
        <br />
        <RowSelector
          rows={data}
          onChange={this.changeRowbox}
          selectAllChecks={this.selectAllChecks}
          selectNone={this.selectNone}
        />
        <br />
        <Grid_NoRedux
          columns={columns}
          selectedRows={this.selectedRows(data)}
          onGridRowsUpdated={this.onGridRowsUpdated}
        />
        <br />
        <br />
        <TextField
          multiline
          variant="outlined"
          rowsMax="20"
          value={dataParser(this.state)}
          fullWidth
        />
      </Fragment>
    );
  }
}

export default Main;
