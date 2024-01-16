// Material UI
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CardItem = ({ flags, name, population, region, capital, onClick }) => {
  return (
    <Grid item xs={8} sm={5} md={4} lg={3}>
      <Card sx={{ maxWidth: 328 }}>
        <CardMedia sx={{ height: 140 }} image={flags} title="Germany Flag" />
        <CardContent>
          <Typography gutterBottom fontSize="15px" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Capital: {capital}</p>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardItem;
