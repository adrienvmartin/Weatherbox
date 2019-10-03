import React from "react";
import ReactDataGrid from "react-data-grid";
import { Paper, Button } from "@material-ui/core";

interface IProps {
  columns: object[];
  selectedRows: object[];
  onGridRowsUpdated: ({ fromRow, toRow, updated }) => any;
}

const Grid: React.FC<IProps> = ({
  columns,
  selectedRows,
  onGridRowsUpdated
}) => {
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
};

export default Grid;
