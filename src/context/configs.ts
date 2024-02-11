import { SIDEBAR_ITEM } from "../constants/enum";
import { IRecipe } from "../typings";

export default interface IActions {
  payload: any;
  type: string;
}

export interface StoreContextType {
  states: {
    sidebarSelectedItem: string;
    bookmarkRecipes: Array<IRecipe>;
  };
  actions: {
    setSidebarSelectedItem: (data: string) => void;
    setBookmarkRecipe: (data: Array<IRecipe>) => void;
  };
}

export const defaultStoreValues = {
  states: {
    sidebarSelectedItem: SIDEBAR_ITEM.TRENDING,
    bookmarkRecipes: [],
  },
  actions: {
    setSidebarSelectedItem: (): void => {},
    setBookmarkRecipe: (): void => {},
  },
};
