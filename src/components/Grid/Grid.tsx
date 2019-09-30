import React from "react";
import ReactDataGrid from "react-data-grid";

const columns = [
  { key: "month", name: "Month" },
  { key: "jan", name: "January", editable: true },
  { key: "feb", name: "February", editable: true },
  { key: "mar", name: "March", editable: true },
  { key: "apr", name: "April", editable: true },
  { key: "may", name: "May", editable: true },
  { key: "jun", name: "June", editable: true },
  { key: "jul", name: "July", editable: true },
  { key: "aug", name: "August", editable: true },
  { key: "sep", name: "September", editable: true },
  { key: "oct", name: "October", editable: true },
  { key: "nov", name: "November", editable: true },
  { key: "dec", name: "December", editable: true },
  { key: "year", name: "Year" }
];

const rows = [
  { month: 'Average High' },
  { month: 'Average Low' },
];

class Grid extends React.Component {
  state = { rows };
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
        rowsCount={2}
        minHeight={150}
        width={150}
        onGridRowsUpdated={this.onGridRowsUpdated}
        enableCellSelect={true}
      />
    );
  }
}

export default Grid;
