import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const rows = [
  { col1: "Cigarettes", col2: "Instock" },
  { col1: "Beer", col2: "Out of stock" },
  { col1: "Wine", col2: "Instock" },
  { col1: "Hat dispensed beverage", col2: "Out of stock" },
  { col1: "Frozen dispensed beverage", col2: "Instock" },
];

const columns = [
  { field: "col1", headerName: "Item Category", width: 150 },
  { field: "col2", headerName: "Stock Status", width: 150 },
];

const DataGrid1 = () => {
  return (
    <Box style={{ height: 200, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        hideFooter={true}
        getRowId={() => Math.random()}
      />
    </Box>
  );
};

export default DataGrid1;
