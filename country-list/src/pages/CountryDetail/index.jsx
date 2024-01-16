// Material UI
import Stack from "@mui/material/Stack";

// Images
// import germany from "../../assets/img/germany.png";

// React Icons
import { FiMoon } from "react-icons/fi";
import { GoArrowLeft } from "react-icons/go";

// Styling SCSS
import classes from "./style.module.scss";
import { useLocation } from "react-router-dom";

const CountryDetail = () => {
  const location = useLocation();

  const country = location.state;
  return (
    <div className={classes["wrapper"]}>
      {/* Navbar Start */}
      <nav className={classes["navbar"]}>
        <div className={classes["navbar-text"]}>Where in the world?</div>
        <div className={classes["navbar-theme-contain"]}>
          <FiMoon />
          <div className={classes["navbar-theme-text"]}>Dark Mode</div>
        </div>
      </nav>
      {/* Navbar End */}

      <div className={classes["btn-contain"]}>
        <GoArrowLeft />
        <p>Back</p>
      </div>
      <Stack
        gap={5}
        alignItems={"center"}
        paddingY={3}
        paddingBottom={30}
        direction={{ xs: "column", sm: "row" }}
      >
        <div className={classes["img-contain"]}>
          <img src={country.flags.png} alt="Germany Flag" />
        </div>
        <div className={classes["desc-contain"]}>
          <h1>{country.name.common}</h1>
          <div className={classes["desc-text"]}>
            <div className={classes["paragraph-contain"]}>
              <p>
                Native Name:{" "}
                {Object.values(country.name.nativeName)[0].official}
              </p>
              <p>Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Sub Region: {country.subregion ? country.subregion : "-"}</p>
              <p>Capital: {country.capital}</p>
            </div>
            <div className={classes["paragraph-contain"]}>
              <p>Top Level Domain: {country.tld}</p>
              <p>Currencies: {Object.values(country.currencies)[0].name}</p>
              <p>Languages: {Object.values(country.languages).join(", ")}</p>
            </div>
          </div>
          <div className={classes["border-countries-contain"]}>
            <p>Border Countries: </p>
            <div className={classes["btn-border-countries"]}>
              <button>Belgia</button>
              <button>Netherlands</button>
              <button>France</button>
            </div>
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default CountryDetail;
