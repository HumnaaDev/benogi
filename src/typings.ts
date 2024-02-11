import { ACTION } from "./constants";

export type IRecipes = {
  recipe: IRecipe;
};

export type IRecipe = {
  uri: string;
  label: string;
  image: string;
  images: IImages;
  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels: Array<string>;
  healthLabels: Array<string>;
  cautions: Array<string>;
  ingredientLines: Array<string>;
  ingredients: Array<IIngredients>;
  calories: number;
  glycemicIndex: number;
  inflammatoryIndex: number;
  totalCO2Emissions: number;
  co2EmissionsClass: string;
  Enum: Array<string>;
  totalWeight: number;
  cuisineType: Array<string>;
  mealType: Array<string>;
  dishType: Array<string>;
  instructions: Array<string>;
  tags: Array<string>;
  externalId: string;
  totalNutrients: Record<string, INutrientsInfo>;
  totalDaily: INutrientsInfo;
};

type IImages = {
  THUMBNAIL: IImageInfo;
  SMALL: IImageInfo;
  REGULAR: IImageInfo;
  LARGE: IImageInfo;
};

type IImageInfo = {
  url: string;
  width: number;
  height: number;
};

export type IIngredients = {
  text: string;
  quantity: number;
  measure: string;
  food: string;
  weight: number;
  foodCategory: string;
  foodId: string;
  image: string;
};

export type INutrientsInfo = {
  label: string;
  quantity: number;
  unit: string;
};

export type IRecipeResponse = {
  q: string;
  from: number;
  to: number;
  more: boolean;
  count: number;
  hits: Array<{ recipe: IRecipe }>;
};

export type IParams = {
  diet: string | number;
  health: string | number;
  cuisineType: string | number;
  mealType: string | number;
  dishType: string | number;
  calories: string | number;
};
export type IAction = ACTION.ADD | ACTION.REMOVE;
