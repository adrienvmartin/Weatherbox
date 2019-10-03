import React from "react";
import ReactDataGrid from "react-data-grid";
import { Paper, Button } from "@material-ui/core";
import { columns } from "../../constants";

interface IProps {
  selectedRows: object[];
  onGridRowsUpdated: ({fromRow, toRow, updated}) => any;
}

interface IState {
  rows: Array<object>;
  columns: Array<object>;
}

class Grid extends React.Component<IProps, IState> {
  public state: IState = {
    rows: this.props.selectedRows,
    columns: columns,
  };

  render() {
    const { selectedRows, onGridRowsUpdated } = this.props;
    return (
      <Paper>
        <ReactDataGrid
          columns={columns}
          rowGetter={i => selectedRows[i]}
          rowsCount={selectedRows.length}
          onGridRowsUpdated={onGridRowsUpdated}
          enableCellSelect={true}
        />
        <Button onClick={() => {}}>Submit</Button>
      </Paper>
    );
  }
}

export default Grid;
