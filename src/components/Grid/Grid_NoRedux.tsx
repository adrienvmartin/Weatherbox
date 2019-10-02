import React from "react";
import ReactDataGrid from "react-data-grid";
import { Paper, Button } from "@material-ui/core";
import { columns } from "../../constants";

/*interface IProps {
  humidex: string;
  recHigh: string;
  meanMax: string;
  avgHigh: string;
  dayMean: string;
  avgLow: string;
  meanMin: string;
  recLow: string;
  windchill: string;
  avgPrecip: string;
  avgRain: string;
  avgSnow: string;
  avgPrecipDays: string;
  avgRainDays: string;
  avgSnowDays: string;
  avgHumidity: string;
  avgAftHumidity: string;
  meanMonthSun: string;
  meanDaySun: string;
  percentSun: string;
  avgUV: string;
}*/

interface IProps {
  selectedRows: object[];
  defaultRows: object[];
}

interface IState {
  rows: Array<object>;
  columns: Array<object>;
}

class Grid extends React.Component<IProps, IState> {
  public state: IState = {
    rows: this.props.defaultRows,
    columns: columns,
  };

  public getCellActions = (column, row) => {
    const cellActions = [
      {
        icon: <span>Remove</span>,
        callback: () => {
          const rows = this.state.rows;
          rows.splice(row.index, 1); // use row.key instead
          console.log(this.state.rows);
          this.setState(state => ({ rows }));
        }
      }
    ];
    return column.key === "actions" ? cellActions : null;
  };

  public onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState(state => {
      // @ts-ignore
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    }); // Update rows based on column name - get col name, and use that as the key to add to the row object of that particular row
    console.log(this.state.rows);
  };

  render() {
    const { selectedRows } = this.props;
    return (
      <Paper>
        <ReactDataGrid
          columns={columns}
          rowGetter={i => selectedRows[i]}
          rowsCount={selectedRows.length}
          onGridRowsUpdated={this.onGridRowsUpdated}
          enableCellSelect={true}
          getCellActions={this.getCellActions}
        />
        <Button onClick={() => {}}>Submit</Button>
      </Paper>
    );
  }
}

export default Grid;
