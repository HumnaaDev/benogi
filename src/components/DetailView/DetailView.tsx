import { FC } from "react";
import { Grid, Typography, Card } from "@mui/material";
import { DetailViewWrapper } from "./DetailView.style";
import { IRecipe } from "../../typings";
import { NutritionalInfo } from "./NutritionalInfo/NutritionalInfo";
import { IngredientsInfo } from "./IngredientsInfo/IngredientsInfo";
import { DigestInfo } from "./Digest/Digest";

type IDetailViewProps = { recipe: IRecipe };

export const DetailView: FC<IDetailViewProps> = ({ recipe }) => {
  return (
    <DetailViewWrapper
      className="detail-view-container"
      data-testid="detail-view"
    >
      <Card className="detail-card">
        <Grid className="recipe-image-wrapper">
          <img className="recipe-image" src={recipe.image} alt={recipe.label} />
        </Grid>
        <Grid className="recipe-detail">
          <Typography className="heading" gutterBottom>
            <span className="bold">Recipe Label: </span>
            {recipe.label}
          </Typography>
          <Typography variant="body1">
            <span className="bold">Recipe Source: </span>
            {recipe.source}
          </Typography>
          <IngredientsInfo ingredients={recipe.ingredients} />
          <NutritionalInfo nutrients={recipe.totalNutrients} />
          <DigestInfo digest={recipe.dietLabels} />
        </Grid>
      </Card>
    </DetailViewWrapper>
  );
};
