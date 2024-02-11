import { IRecipe } from "@/typings";
import React, { FC } from "react";

type INutrientsInfoProps = {
  nutrients: IRecipe["totalNutrients"];
};

export const NutritionalInfo: FC<INutrientsInfoProps> = ({ nutrients }) => {
  return (
    <div>
      <h2>Nutritional Information</h2>
      <p>
        {Object.keys(nutrients)
          .map(
            (key) =>
              `${nutrients[key].label}: ${nutrients[key].quantity} ${nutrients[key].unit}`,
          )
          .join(", ")}
      </p>
    </div>
  );
};
