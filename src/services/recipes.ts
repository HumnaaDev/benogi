import { BASE_URL, RECIPES, fetcher, logger } from "@/api";
import { IRecipe, IRecipeResponse } from "@/typings";

export const RecipeService = {
  getById: async (id: string | undefined) => {
    const response = await fetcher<{ recipe: IRecipe }>(
      `${BASE_URL}/${RECIPES}/${id}?type=${"public"}&app_id=${process.env.NEXT_PUBLIC_APP_ID}&app_key=${process.env.NEXT_PUBLIC_APP_KEY}`,
      {
        method: "GET",
      },
    );

    if (!response.success) {
      logger.warn("no data recieved from service");
      return;
    }
    return response.result;
  },
  search: async (
    value: string | string[],
    diet?: string | string[],
    health?: string | string[],
    cuisineType?: string | string[],
    mealType?: string | string[],
    dishType?: string | string[],
    calories?: string | string[],
  ): Promise<IRecipeResponse["hits"]> => {
    const response = await fetcher<IRecipeResponse>(
      `${BASE_URL}/${RECIPES}/?type=${"public"}${value ? `&q=${value}` : ""}${diet ? `&diet=${diet}` : ""}${health ? `&health=${health}` : ""}${cuisineType ? `&cuisineType=${cuisineType}` : ""}${mealType ? `&mealType=${mealType}` : ""}${dishType ? `&dishType=${dishType}` : ""}${calories ? `&calories=${+calories}` : ""}&app_id=${process.env.NEXT_PUBLIC_APP_ID}&app_key=${process.env.NEXT_PUBLIC_APP_KEY}`,
      {
        method: "GET",
      },
    );

    if (!response.success) {
      logger.warn("no data recieved from service");
      return [];
    }

    return response.result.hits;
  },
};
