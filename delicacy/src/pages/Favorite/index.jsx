import { useEffect, useState } from "react";

import CardMenu from "../../components/CardMenu";

import classes from "./style.module.scss";
import callJSON from "../../domain/json";

const Favorite = () => {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    fetchFavorite();
  }, []);

  const fetchFavorite = async () => {
    try {
      const response = await callJSON("/favorite", "GET");
      setFavorite(response);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(favorite, "<<< favorite");
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

      {/* Card Menu */}
      <section>
        <div>
          <div className={classes["box-card"]}>
            {favorite?.map((item, index) => {
              return <CardMenu key={index} data={item} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Favorite;
