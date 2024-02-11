"use client";
import { useEffect } from "react";
import { IRecipe } from "../typings";
import { logger } from "@/api";
import { useStoreContext } from "@/context/storeContext";

export const useLocalStorage = (key: string) => {
  const {
    actions: { setBookmarkRecipe },
    states: { bookmarkRecipes },
  } = useStoreContext();

  useEffect(() => {
    const data = getInitialValue(key);
    setBookmarkRecipe(data);
  }, []);

  const setValue = (value: Array<IRecipe>) => {
    setBookmarkRecipe(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return { bookmarkRecipes, setValue };
};

export const getInitialValue = (key: string) => {
  try {
    const data = localStorage.getItem(key);
    if (!data) {
      return [];
    }
    const parsedData = JSON.parse(data);
    return parsedData;
  } catch (error) {
    logger.error(`Error parsing data`);
    return [];
  }
};
