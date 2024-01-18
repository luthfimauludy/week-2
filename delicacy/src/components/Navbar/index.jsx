import { createTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const theme = createTheme({
  typography: {
    fontFamily: "Archivo Narrow",
  },
});

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            theme={theme}
            color={"black"}
            fontSize={44}
            fontWeight={700}
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Delicacy
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
