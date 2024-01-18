import React from "react";

import CardMenu from "../../components/CardMenu";
import CardCategory from "../../components/CardCategory";

import classes from "./style.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import callAPI from "../../domain/api";

const Detail = () => {
  const [detail, setDetail] = React.useState({});
  const [moreRecipies, setMoreRecipies] = React.useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchDetail = async () => {
    try {
      if (id) {
        const responseData = await callAPI(`/lookup.php?i=${id}`, "GET");
        console.log(responseData);
        setDetail({ ...responseData?.meals[0] });
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
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
    fetchDetail();
  }, [id]);

  React.useEffect(() => {
    try {
      fetchMoreRecipies();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className={classes["container"]}>
      {/* Description Menu */}
      <section className={classes["box-category"]}>
        <CardCategory
          key={detail.idMeal}
          name={detail.strMeal}
          instructions={detail.strInstructions}
          image={detail.strMealThumb}
          ingredient1={detail.strIngredient1}
          ingredient2={detail.strIngredient2}
          ingredient3={detail.strIngredient3}
          ingredient4={detail.strIngredient4}
          measure1={detail.strMeasure1}
          measure2={detail.strMeasure2}
          measure3={detail.strMeasure3}
          measure4={detail.strMeasure4}
        />
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

export default Detail;
