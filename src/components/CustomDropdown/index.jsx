import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';


const CustomDropdown = () => {
  return (
    <FormControl variant="filled" style={{marginTop: "25px", marginBottom: "25px"}}fullWidth>
    <InputLabel id="demo-simple-select-outlined-label">Select a store</InputLabel>
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
