"use client";
import { FC, useEffect, useState } from "react";
import { IRecipes } from "../../typings";
import { RecipeCard, SearchInput } from "@/components";
import { useRouter, useSearchParams } from "next/navigation";
import { convertQueryParamsToQueryString, useGetParams } from "@/utils";

type IRecipeListProps = {
  recipes: Array<IRecipes>;
};

export const RecipeList: FC<IRecipeListProps> = ({ recipes }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useGetParams();
  const [query, setQuery] = useState<string | undefined>("");

  useEffect(() => {
    if (params) {
      const queryString =
        convertQueryParamsToQueryString(params, searchParams) || "";
      setQuery(queryString);
    }
  }, [params]);

  return (
    <>
      <SearchInput
        label="Search for a recipe"
        placeholder="Search for recipes..."
        handleSearch={(value) =>
          router.push(`/?search=${value}${query ? `&${query}` : ""}`)
        }
      />
      {recipes?.length ? (
        recipes?.map((recipe, index) => (
          <RecipeCard
            key={`recipe-${recipe.recipe.uri}-${index}`}
            recipe={recipe.recipe}
            onRecipeClick={(uri) => router.push(`recipe/${uri}`)}
          />
        ))
      ) : (
        <>No Record Found</>
      )}
    </>
  );
};
