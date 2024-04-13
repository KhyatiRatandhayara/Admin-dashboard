import LinearProgress from "@mui/material/LinearProgress";

const HorizontalProgressBar = ({ percentage }) => {
  let color = "";
  if (percentage < 25) {
    color = "error";
  } else if (percentage < 50) {
    color = "warning";
  } else if (percentage < 75) {
    color = "info";
  } else {
    color = "success";
  }

  return (
    <LinearProgress
      variant="determinate"
      value={percentage}
      sx={{ height: 10, borderRadius: 5 }}
      color={color}
    />
  );
};

export default HorizontalProgressBar;
