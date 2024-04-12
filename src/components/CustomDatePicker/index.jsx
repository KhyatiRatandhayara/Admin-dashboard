import { useEffect, useState } from "react";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";

const CustomDatePicker = ({ type }) => {
  const [cleared, setCleared] = useState(false);

  useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoItem label={`select date ${type}`}>
        <DatePicker
       
          slotProps={{
            field: { clearable: true, onClear: () => setCleared(true) },
          }}
        />
      </DemoItem>
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
