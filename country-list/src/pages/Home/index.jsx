import React from "react";
import { useNavigate } from "react-router-dom";

import callApi from "../../domain/api";

import Grid from "@mui/material/Unstable_Grid2";

import CardItem from "../../components/CardItem";

// React Icons
import { GoSearch } from "react-icons/go";
import { FiMoon } from "react-icons/fi";

import classes from "./style.module.scss";

const Home = () => {
  const [countries, setCountries] = React.useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const response = await callApi("/all", "GET");
    const modifiedData = response?.map((item) => {
      return {
        name: item?.name,
        flags: item?.flags,
        population: item?.population,
        region: item?.region,
        capital: item?.capital,
        subregion: item?.subregion,
        tld: item?.tld,
        currencies: item?.currencies,
        languages: item?.languages,
        borders: item?.borders,
      };
    });
    modifiedData.splice(20);
    setCountries(modifiedData);
  };

  const handleClick = (value) => {
    navigate(`country-detail/`, { state: value });
  };

  React.useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // Untuk handle search country
  const handleSearch = (e) => {
    let name = e.target.value;
    name = name.replace(/[^A-Za-z]/g, "");
    if (name) {
      const fetchSearch = async () => {
        const fetchData = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );
        const response = await fetchData.json();

        if (response.status !== 404) {
          setCountries(response);
        }
      };

      try {
        fetchSearch();
      } catch (error) {
        console.log(error);
      }
    }
  };

  // Untuk filer region
  const handleFilter = (e) => {
    const region = e.target.value;
    if (region !== "All") {
      const fetchSearch = async () => {
        const fetchData = await fetch(
          `https://restcountries.com/v3.1/region/${region}`
        );
        const response = await fetchData.json();

        if (response.status !== 404) {
          setCountries(response);
        }
      };

      try {
        fetchSearch();
      } catch (error) {
        console.log(error);
      }
    } else {
      fetchData();
    }
  };

  return (
    <>
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

        <div className={classes["container"]}>
          {/* Search Input Start */}
          <div className={classes["search-contain"]}>
            <GoSearch />
            <input
              className={classes["search-input"]}
              onChange={handleSearch}
              type="text"
              placeholder="Search for a country..."
            />
          </div>
          {/* Search Input End */}

          {/* Region Select Start */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className={classes["region-contain"]}
          >
            <select name="region" onChange={handleFilter}>
              <option value="" hidden>
                Filter by Region
              </option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Eceania">Oceania</option>
            </select>
          </form>
          {/* Region Select End */}
        </div>

        {/* Main Content Start */}
        <Grid
          container
          spacing={5}
          columnSpacing={{ xs: 1, sm: 2, md: 4, lg: 5 }}
          justifyContent={"center"}
          padding={"2rem"}
        >
          {countries?.map((country, index) => {
            return (
              <CardItem
                key={index}
                name={country.name.common}
                flags={country.flags.png}
                population={country.population}
                region={country.region}
                capital={country.capital}
                onClick={() => handleClick(country)}
              />
            );
          })}
        </Grid>
        {/* Main Content End */}
      </div>
    </>
  );
};

export default Home;
