import { RecipeList, Layout } from "@/components";
import { DEFAULT_SEARCH_PLACEHOLDER } from "@/constants";
import { RecipeService } from "@/services/recipes";
import { IRecipes } from "@/typings";
import { GetServerSidePropsContext } from "next";

type IHomeProps = { recipes: Array<IRecipes> };

export default function Home({ recipes }: IHomeProps) {
  return (
    <Layout>
      <RecipeList recipes={recipes} />
    </Layout>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const {
    search: value,
    diet,
    health,
    cuisineType,
    mealType,
    dishType,
    calories,
  } = context.query;

  const recipes = await RecipeService.search(
    value ? value : DEFAULT_SEARCH_PLACEHOLDER,
    diet,
    health,
    cuisineType,
    mealType,
    dishType,
    calories,
  );

  return {
    props: { recipes },
  };
};
