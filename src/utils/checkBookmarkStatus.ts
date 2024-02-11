import { IRecipe } from "../typings";

export const isBookmarkRecipes = (
  bookmarkRecipes: Array<IRecipe>,
  recipe: IRecipe,
) => {
  return bookmarkRecipes.find(
    (bookmark: IRecipe) => bookmark.uri === recipe.uri,
  )
    ? true
    : false;
};
