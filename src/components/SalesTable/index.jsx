import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import salesData from "../../data/salesData.json";
import HorizontalProgressBar from "../HorizontalProgressBar";

const SalesTable = () => {
  return (
    <Table sx={{ minWidth: 350 }}>
      <TableHead>
        <TableRow >
          <TableCell>Item Category</TableCell>
          <TableCell>APSD</TableCell>
          <TableCell>UPSD</TableCell>
          <TableCell>SKU Stock</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {salesData.map((row) => (
          <TableRow
            key={row.itemName}
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              textAlign: "center",
            }}
          >
            <TableCell sx={{ padding: "10px"}}>{row.itemName}</TableCell>
            <TableCell sx={{ padding: "10px"}} component="th" scope="row">
              {row.salesAmount}
            </TableCell>
            <TableCell sx={{ padding: "10px"}}>{row.quantity}</TableCell>
            <TableCell sx={{ padding: "10px"}}>
            <HorizontalProgressBar percentage={row.SKUStockRange}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SalesTable;
