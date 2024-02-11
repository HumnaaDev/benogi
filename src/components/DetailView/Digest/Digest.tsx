import { IRecipe } from "@/typings";
import React, { FC } from "react";

type IDigestInfoProps = {
  digest: IRecipe["dietLabels"];
};

export const DigestInfo: FC<IDigestInfoProps> = ({ digest }) => {
  return (
    <div>
      <h2>Ingredients Information</h2>
      <p>{digest.join(", ")}</p>
    </div>
  );
};
