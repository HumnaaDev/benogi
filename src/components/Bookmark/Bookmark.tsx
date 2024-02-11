"use client";
import { IRecipe } from "../../typings";
import { RecipeCard } from "@/components";
import { useStoreContext } from "@/context/storeContext";
import { useEffect } from "react";
import { SIDEBAR_ITEM, DEFAULT_BOOKMARK_KEY } from "@/constants";
import { useLocalStorage } from "@/utils/useLocalStorage";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";

export const BookmarkRecipes = () => {
  const router = useRouter();
  const { bookmarkRecipes } = useLocalStorage(DEFAULT_BOOKMARK_KEY);
  const {
    actions: { setSidebarSelectedItem },
  } = useStoreContext();

  useEffect(() => {
    setSidebarSelectedItem(SIDEBAR_ITEM.BOOKMARK);
  }, []);

  return (
    <>
      {bookmarkRecipes?.length > 0 ? (
        bookmarkRecipes?.map((recipe: IRecipe, index: number) => (
          <RecipeCard
            key={`recipe-${recipe.uri}-${index}`}
            recipe={recipe}
            onRecipeClick={(uri) => router.push(`/recipe/${uri}`)}
          />
        ))
      ) : (
        <Box>
          📚 Oops! Your recipe book is empty. Time to discover and add some
          culinary magic! ✨🍳
        </Box>
      )}
    </>
  );
};
