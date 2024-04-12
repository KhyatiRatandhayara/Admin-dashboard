import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import salesData from "../../data/salesData.json";

const SalesTable = () => {
  return (
    <Table sx={{ minWidth: 600, textAlign: "center", height: 20, lineHeight:10 }}>
      <TableHead>
        <TableRow textAlign="center">
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
            //   border: "0"
            }}
          >
            <TableCell>{row.itemName}</TableCell>
            <TableCell component="th" scope="row">
              {row.salesAmount}
            </TableCell>
            <TableCell>{row.quantity}</TableCell>
            <TableCell>{row.SKUStockRange}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SalesTable;
