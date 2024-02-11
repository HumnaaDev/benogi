import { IRecipe } from "@/typings";
import React, { FC } from "react";

type IIngredientsInfoProps = {
  ingredients: IRecipe["ingredients"];
};

export const IngredientsInfo: FC<IIngredientsInfoProps> = ({ ingredients }) => {
  return (
    <div>
      <h2>Ingredients Information</h2>
      <p>{ingredients.map((ing) => ing.food).join(", ")}</p>
    </div>
  );
};
