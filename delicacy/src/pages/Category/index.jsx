import React from "react";
import { useNavigate } from "react-router-dom";

import CardMenu from "../../components/CardMenu";
import CardCategory from "../../components/CardCategory";

import classes from "./style.module.scss";
import callAPI from "../../domain/api";

const Category = () => {
  const [meal, setMeal] = React.useState([]);
  const [moreRecipies, setMoreRecipies] = React.useState([]);
  const navigate = useNavigate();

  const goDetail = (id) => {
    navigate(`/${id}`);
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

  React.useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  React.useEffect(() => {
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
              id={data.idMeal}
              name={data.strMeal}
              instructions={data.strInstructions}
              image={data.strMealThumb}
              ingredient1={data.strIngredient1}
              ingredient2={data.strIngredient2}
              ingredient3={data.strIngredient3}
              ingredient4={data.strIngredient4}
              measure1={data.strMeasure1}
              measure2={data.strMeasure2}
              measure3={data.strMeasure3}
              measure4={data.strMeasure4}
              goDetail={goDetail}
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
