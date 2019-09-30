import React from "react";
import ReactDataGrid from "react-data-grid";

const columns = [
  { key: "month", name: "Month", width: 200 },
  { key: "jan", name: "Jan.", editable: true, width: 70 },
  { key: "feb", name: "Feb.", editable: true, width: 70 },
  { key: "mar", name: "Mar.", editable: true, width: 70 },
  { key: "apr", name: "Apr.", editable: true, width: 70 },
  { key: "may", name: "May", editable: true, width: 70 },
  { key: "jun", name: "June", editable: true, width: 70 },
  { key: "jul", name: "July", editable: true, width: 70 },
  { key: "aug", name: "Aug.", editable: true, width: 70 },
  { key: "sep", name: "Sep.", editable: true, width: 70 },
  { key: "oct", name: "Oct.", editable: true, width: 70 },
  { key: "nov", name: "Nov.", editable: true, width: 70 },
  { key: "dec", name: "Dec.", editable: true, width: 70 },
  { key: "year", name: "Year", width: 70 },
  { key: "actions", name: "Actions", width: 70 }
];

const rows = [
  { key: 0, month: "Record high humidex" },
  { key: 1, month: "Record high" },
  { key: 2, month: "Mean maximum" },
  { key: 3, month: "Average High" },
  { key: 4, month: "Daily mean" },
  { key: 5, month: "Average Low" },
  { key: 6, month: "Mean minimum" },
  { key: 7, month: "Record low" },
  { key: 8, month: "Record low wind chill" },
  { key: 9, month: "Average precipitation" },
  { key: 10, month: "Average rainfall" },
  { key: 11, month: "Average snowfall" },
  { key: 12, month: "Average precipitation days" },
  { key: 13, month: "Average rainy days" },
  { key: 14, month: "Average snowy days" },
  { key: 15, month: "Average relative humidity" },
  { key: 16, month: "Average afternoon humidity" },
  { key: 17, month: "Mean monthly sunshine hours" },
  { key: 18, month: "Mean daily sunshine hours" },
  { key: 19, month: "Percent possible sunshine" },
  { key: 20, month: "Average ultraviolet index" },
];

class Grid extends React.Component {
  state = { rows };

  public getCellActions = (column, row) => {
    const cellActions = [
      {
        icon: <span>Remove</span>,
        callback: () => {
          const rows = this.state.rows;
          rows.splice(row.index, 1); //
          this.setState(state =>({ rows }));
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
    });
  };
  render() {
    return (
      <ReactDataGrid
        columns={columns}
        rowGetter={i => this.state.rows[i]}
        rowsCount={21}
        minHeight={1200}
        onGridRowsUpdated={this.onGridRowsUpdated}
        enableCellSelect={true}
        getCellActions={this.getCellActions}
      />
    );
  }
}

export default Grid;
