import imgIngradients from "../../assets/img/img-ingredients.png";
import classes from "./style.module.scss";

const CardCategory = ({
  id,
  name,
  instructions,
  image,
  ingredient1,
  ingredient2,
  ingredient3,
  ingredient4,
  measure1,
  measure2,
  measure3,
  measure4,
  goDetail,
}) => {
  return (
    <div className={classes["desc-category"]}>
      <div className={classes["text-header"]}>{name}</div>
      <div className={classes["text-area"]}>{instructions}</div>
      <div className={classes["text-ingredients"]}>Ingredients</div>
      <div className={classes["contain-ingredients"]}>
        <div className={classes["box-ingradients"]}>
          <div className={classes["box-img-ingradients"]}>
            <img src={imgIngradients} alt="Image Ingradients" />
          </div>
          <div className={classes["box-text-ingradients"]}>
            <p className={classes["text-head-ingradients"]}>{ingredient1}</p>
            <p className={classes["text-sub-ingradients"]}>{measure1}</p>
          </div>
        </div>
        <div className={classes["box-ingradients"]}>
          <div className={classes["box-img-ingradients"]}>
            <img src={imgIngradients} alt="Image Ingradients" />
          </div>
          <div className={classes["box-text-ingradients"]}>
            <p className={classes["text-head-ingradients"]}>{ingredient2}</p>
            <p className={classes["text-sub-ingradients"]}>{measure2}</p>
          </div>
        </div>
      </div>
      <div className={classes["contain-ingredients"]}>
        <div className={classes["box-ingradients"]}>
          <div className={classes["box-img-ingradients"]}>
            <img src={imgIngradients} alt="Image Ingradients" />
          </div>
          <div className={classes["box-text-ingradients"]}>
            <p className={classes["text-head-ingradients"]}>{ingredient3}</p>
            <p className={classes["text-sub-ingradients"]}>{measure3}</p>
          </div>
        </div>
        <div className={classes["box-ingradients"]}>
          <div className={classes["box-img-ingradients"]}>
            <img src={imgIngradients} alt="Image Ingradients" />
          </div>
          <div className={classes["box-text-ingradients"]}>
            <p className={classes["text-head-ingradients"]}>{ingredient4}</p>
            <p className={classes["text-sub-ingradients"]}>{measure4}</p>
          </div>
        </div>
      </div>
      <div className={classes["btn-contain"]}>
        <button onClick={() => goDetail(id)}>Detail</button>
        <button>Add to favorites</button>
      </div>
      <div className={classes["img-category"]}>
        <img src={image} alt="Meal" />
      </div>
    </div>
  );
};

export default CardCategory;
