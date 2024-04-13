import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import gridData from "../../data/gridData.json";

const CustomDataGrid= () => {
  return (
    <Box style={{ height: 200, width: "100%" }}>
      <DataGrid
        rows={gridData.rows}
        columns={gridData.columns}
        hideFooter={true}
        getRowId={() => Math.random()}
      />
     </Box>
  );
};

export default CustomDataGrid;
