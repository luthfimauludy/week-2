import classes from "./style.module.scss";

const CardMenu = ({ data }) => {
  return (
    <div className={classes["box-card"]}>
      <img src={data?.strMealThumb} alt="Dish Beef" />
      <p>{data?.strMeal}</p>
    </div>
  );
};

export default CardMenu;
