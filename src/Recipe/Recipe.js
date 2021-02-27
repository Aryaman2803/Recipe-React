import React from "react";
import style from "./recipe.module.css";
const Recipe = (props) => {
  return (
    <div className={style.recipe}>
      <h2 >{props.title}</h2>
      <p>Calories: {props.calories}</p>
      <ol>
        {props.ingredients.map((ingredient) => {
          return <li >{ingredient.text}</li>;
        })}
      </ol>
      <img src={props.image} alt="" className={style.image}/>
    </div>
  );
};

export default Recipe;
