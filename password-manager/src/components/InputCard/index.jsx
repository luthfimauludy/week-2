import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { callApiLocal } from "../../domain/api";
import classes from "./style.module.scss";

const InputCard = () => {
  const navigate = useNavigate();

  const fetchRemove = async (id) => {
    try {
      await callApiLocal;
    } catch (error) {
      console.log(error);
    }
  };

  const handleDetail = (value) => {
    navigate(`/detail/${value}`);
  };

  return (
    <div className={classes["box-input"]}>
      <Card sx={{ minWidth: 575, minHeight: 400 }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 20, fontWeight: 700 }}
            color="black"
            gutterBottom
          >
            Your Password
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography
            sx={{ mb: 1.5 }}
            textAlign={"center"}
            color="text.secondary"
          >
            No Data To Show
          </Typography>
          <Typography
            sx={{ fontSize: 20, fontWeight: 700 }}
            color="black"
            gutterBottom
          >
            Add a Password
          </Typography>
          <CardContent className={classes["text-input"]}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Provider"
              variant="outlined"
              type="text"
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Username"
              variant="outlined"
              type="text"
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Category"
              variant="outlined"
              type="text"
            />
          </CardContent>
        </CardContent>
        <CardActions>
          <Button fullWidth variant="contained" size="small">
            Add Password
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default InputCard;
