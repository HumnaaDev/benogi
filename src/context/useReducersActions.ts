import { useReducer } from "react";
import { SIDEBAR_ITEM } from "@/constants";
import { IRecipe } from "../typings";

const initialState = {
  sidebarSelectedItem: SIDEBAR_ITEM.TRENDING,
  bookmarkRecipes: [],
};

const reducer = (state: typeof initialState, action: any) => {
  switch (action.type) {
    case "SET_SIDEBAR_SELECTED_ITEM":
      return { ...state, sidebarSelectedItem: action.payload };
    case "SET_BOOKMARK":
      return { ...state, bookmarkRecipes: action.payload };
    default:
      return state;
  }
};

const useReducerActions = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setSidebarSelectedItem = (item: string) => {
    dispatch({ type: "SET_SIDEBAR_SELECTED_ITEM", payload: item });
  };

  const setBookmarkRecipe = (data: Array<IRecipe>) => {
    dispatch({ type: "SET_BOOKMARK", payload: data });
  };

  return {
    actions: {
      setSidebarSelectedItem,
      setBookmarkRecipe,
    },
    states: {
      ...state,
    },
  };
};

export default useReducerActions;
