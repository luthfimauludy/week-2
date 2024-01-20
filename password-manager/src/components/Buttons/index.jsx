import Button from "@mui/material/Button";

const Buttons = ({ text, onClick, icon }) => {
  return (
    <Button startIcon={icon} onClick={onClick} variant="outlined">
      {text}
    </Button>
  );
};

export default Buttons;
