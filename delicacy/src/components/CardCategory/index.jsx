import { useParams } from "react-router-dom";

import imgIngradients from "../../assets/img/img-ingredients.png";

import classes from "./style.module.scss";

const CardCategory = ({
  goDetail,
  favorite,
  removeFavorite,
  addFavorite,
  data,
}) => {
  const { id } = useParams();
  const isFavorite = favorite?.some((item) => item.id === data.idMeal);
  return (
    <div className={classes["desc-category"]}>
      <div className={classes["text-header"]}>{data.strMeal}</div>
      <div className={classes["text-area"]}>{data.strInstructions}</div>
      <div className={classes["text-ingredients"]}>Ingredients</div>
      <div className={classes["contain-ingredients"]}>
        <div className={classes["box-ingradients"]}>
          <div className={classes["box-img-ingradients"]}>
            <img src={imgIngradients} alt="Image Ingradients" />
          </div>
          <div className={classes["box-text-ingradients"]}>
            <p className={classes["text-head-ingradients"]}>
              {data.strIngredient1}
            </p>
            <p className={classes["text-sub-ingradients"]}>
              {data.strMeasure1}
            </p>
          </div>
        </div>
        <div className={classes["box-ingradients"]}>
          <div className={classes["box-img-ingradients"]}>
            <img src={imgIngradients} alt="Image Ingradients" />
          </div>
          <div className={classes["box-text-ingradients"]}>
            <p className={classes["text-head-ingradients"]}>
              {data.strIngredient2}
            </p>
            <p className={classes["text-sub-ingradients"]}>
              {data.strMeasure2}
            </p>
          </div>
        </div>
      </div>
      <div className={classes["contain-ingredients"]}>
        <div className={classes["box-ingradients"]}>
          <div className={classes["box-img-ingradients"]}>
            <img src={imgIngradients} alt="Image Ingradients" />
          </div>
          <div className={classes["box-text-ingradients"]}>
            <p className={classes["text-head-ingradients"]}>
              {data.strIngredient3}
            </p>
            <p className={classes["text-sub-ingradients"]}>
              {data.strMeasure3}
            </p>
          </div>
        </div>
        <div className={classes["box-ingradients"]}>
          <div className={classes["box-img-ingradients"]}>
            <img src={imgIngradients} alt="Image Ingradients" />
          </div>
          <div className={classes["box-text-ingradients"]}>
            <p className={classes["text-head-ingradients"]}>
              {data.strIngredient4}
            </p>
            <p className={classes["text-sub-ingradients"]}>
              {data.strMeasure4}
            </p>
          </div>
        </div>
      </div>
      <div className={classes["btn-contain"]}>
        <button onClick={() => goDetail(data.idMeal)}>Detail</button>
        {isFavorite ? (
          <button
            onClick={() => {
              removeFavorite(data.idMeal);
            }}
          >
            Remove favorite
          </button>
        ) : (
          <button
            onClick={() => {
              addFavorite(data);
            }}
          >
            Add to favorite
          </button>
        )}
      </div>
      <div className={classes["img-category"]}>
        <img src={data.strMealThumb} alt="Meal" />
      </div>
    </div>
  );
};

export default CardCategory;
