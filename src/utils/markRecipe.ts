import { ACTION } from "../constants/enum";
import { IAction, IRecipe } from "../typings";
import { isBookmarkRecipes } from "./checkBookmarkStatus";

export const markRecipe = (
  bookmarkRecipes: Array<IRecipe>,
  value: IRecipe,
  action: IAction,
) => {
  let tempData = [...bookmarkRecipes];
  if (action === ACTION.ADD) {
    const isBookmark = isBookmarkRecipes(bookmarkRecipes, value);
    if (!isBookmark) {
      tempData.push(value);
    }
  } else {
    tempData = bookmarkRecipes.filter((d: IRecipe) => value.uri !== d.uri);
  }
  const newStateArray = Array.from(tempData);
  return newStateArray;
};
