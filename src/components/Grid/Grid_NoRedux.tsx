import React from "react";
import ReactDataGrid from "react-data-grid";
import { Paper, Button } from "@material-ui/core";

interface IProps {
  columns: object[];
  selectedRows: object[];
  onGridRowsUpdated: ({ fromRow, toRow, updated }) => any;
  onChange: (state: any) => any;
}

const Grid: React.FC<IProps> = ({
  columns,
  selectedRows,
  onGridRowsUpdated,
  onChange
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
      <Button onClick={onChange}>Submit</Button>
    </Paper>
  );
};

export default Grid;
