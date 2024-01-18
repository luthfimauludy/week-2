import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CardMenu from "../../components/CardMenu";
import CardCategory from "../../components/CardCategory";

import classes from "./style.module.scss";

import callAPI from "../../domain/api";
import callJSON from "../../domain/json";

const Detail = () => {
  const [detail, setDetail] = useState({});
  const [moreRecipies, setMoreRecipies] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchDetail = async () => {
    try {
      if (id) {
        const responseData = await callAPI(`/lookup.php?i=${id}`, "GET");
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

  const fetchFavorite = async () => {
    try {
      const response = await callJSON("/favorite", "GET");
      setFavorite(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetail();
    fetchFavorite();
  }, [id]);

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

  useEffect(() => {
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
          favorite={favorite}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
          data={detail}
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
