import { FC } from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { IRecipe } from "../../typings";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import {
  isBookmarkRecipes,
  markRecipe,
  extractIdFromUri,
  useLocalStorage,
} from "@/utils";
import { DEFAULT_BOOKMARK_KEY, ACTION } from "@/constants";
import { CardWrapper } from "./Card.style";

interface ICardProps {
  recipe: IRecipe;
  onRecipeClick: (label: string) => void;
}

export const RecipeCard: FC<ICardProps> = ({ recipe, onRecipeClick }) => {
  const { bookmarkRecipes, setValue } = useLocalStorage(DEFAULT_BOOKMARK_KEY);
  const isBookmarkRecipe = isBookmarkRecipes(bookmarkRecipes, recipe);

  const handleBookmarkClick = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    const markedRecipes = markRecipe(
      bookmarkRecipes,
      recipe,
      isBookmarkRecipe ? ACTION.REMOVE : ACTION.ADD,
    );
    setValue(markedRecipes);
  };

  return (
    <CardWrapper className="card-container">
      <Card
        className="card"
        data-testid="recipe-card"
        onClick={() => onRecipeClick(extractIdFromUri(recipe.uri))}
      >
        <CardMedia
          className="card-media"
          component="img"
          alt={recipe.label}
          image={recipe.image}
          title={recipe.label}
        />
        <CardContent>
          <Typography className="card-name">{recipe.label}</Typography>
          <Typography className="card-text">{recipe.calories}</Typography>{" "}
          <Typography className="card-text">{recipe.healthLabels}</Typography>
          <Box className="text-div">
            <Typography className="card-text">{recipe.dietLabels}</Typography>
            <BookmarkIcon
              data-testid="bookmark-icon"
              className={`${isBookmarkRecipe && "selected"}`}
              onClick={handleBookmarkClick}
            />
          </Box>
        </CardContent>
      </Card>
    </CardWrapper>
  );
};
