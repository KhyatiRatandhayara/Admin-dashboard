import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';


const CustomDropdown = () => {
  return (
    <FormControl variant="outlined" sx={{ m: 1, width: 300 }}>
    <InputLabel id="demo-simple-select-outlined-label">Dropdown 1</InputLabel>
    <Select
      labelId="demo-simple-select-outlined-label"
      id="demo-simple-select-outlined"
      label="Dropdown 1"
    >
      <MenuItem value={1}>Option 1</MenuItem>
      <MenuItem value={2}>Option 2</MenuItem>
      <MenuItem value={3}>Option 3</MenuItem>
    </Select>
  </FormControl>
  )
}

export default CustomDropdown
