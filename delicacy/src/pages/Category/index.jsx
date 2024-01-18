import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CardMenu from "../../components/CardMenu";
import CardCategory from "../../components/CardCategory";
import callJSON from "../../domain/json";

import classes from "./style.module.scss";
import callAPI from "../../domain/api";

const Category = () => {
  const [meal, setMeal] = useState([]);
  const [moreRecipies, setMoreRecipies] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const navigate = useNavigate();

  const goDetail = (id) => {
    navigate(`/${id}`);
  };

  const fetchFavorite = async () => {
    try {
      const response = await callJSON("/favorite", "GET");
      setFavorite(response);
    } catch (error) {
      console.log(error);
    }
  };

  const addFavorite = async (data) => {
    const { idMeal, strMeal, strMealThumb } = data;
    try {
      await callJSON(
        "/favorite",
        "POST",
        {},
        {},
        {
          id: idMeal,
          name: strMeal,
          image: strMealThumb,
        }
      );
      fetchFavorite();
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavorite = async (id) => {
    try {
      await callJSON(`/favorite/${id}`, "DELETE", {}, {}, {});
      fetchFavorite();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    const responseByCategories = await callAPI(`/filter.php?c=Seafood`, "GET");
    const slicedResponse = responseByCategories?.meals?.slice(0, 10);

    const modifiedResponse = slicedResponse?.map(async (item) => {
      const responseByName = await callAPI(
        `/search.php?s=${item.strMeal}`,
        "GET"
      );
      const {
        idMeal,
        strInstructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strMeasure1,
        strMeasure2,
        strMeasure3,
        strMeasure4,
        strMealThumb,
        strMeal,
      } = responseByName.meals[0];
      return {
        idMeal,
        strInstructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strMeasure1,
        strMeasure2,
        strMeasure3,
        strMeasure4,
        strMealThumb,
        strMeal,
      };
    });
    const finalResponse = await Promise.all(modifiedResponse);
    setMeal(finalResponse);
  };

  const fetchMoreRecipies = async () => {
    try {
      const responseData = [];
      for (let i = 0; i < 6; i++) {
        responseData.push(callAPI("/random.php", "GET"));
      }
      const responseAll = await Promise.all(responseData);
      setMoreRecipies(responseAll?.map((e) => e.meals[0]));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      fetchData();
      fetchFavorite();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      fetchMoreRecipies();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className={classes["container"]}>
      {/* List Category */}
      <section className={classes["list-category"]}>
        <div>Beef</div>
        <div>Chicken</div>
        <div>Dessert</div>
        <div>Lamb</div>
        <div>Miscellaneous</div>
        <div>Pasta</div>
        <div>Favorite</div>
      </section>

      {/* Description Menu */}
      <section className={classes["box-category"]}>
        {meal?.map((data, index) => {
          return (
            <CardCategory
              key={index}
              favorite={favorite}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
              goDetail={goDetail}
              data={data}
            />
          );
        })}
      </section>

      {/* Card Menu */}
      <section>
        <div className={classes["card-menu"]}>
          <div className={classes["more-recipies"]}>More recipies</div>
          <div className={classes["box-card"]}>
            {moreRecipies?.map((item) => {
              return <CardMenu key={item.idMeal} data={item} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
