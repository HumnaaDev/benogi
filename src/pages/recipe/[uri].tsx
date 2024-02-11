import { DetailView } from "@/components";
import { RecipeService } from "@/services/recipes";
import { IRecipes } from "@/typings";
import { GetServerSidePropsContext } from "next";

type IRecipePageProps = {
  data: IRecipes;
};
export default function RecipePage({ data }: IRecipePageProps) {
  return (
    <>{data ? <DetailView recipe={data.recipe} /> : <div>Loading...</div>}</>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { resolvedUrl } = context;
  const splittedUrl = resolvedUrl.split("/");
  const uri = splittedUrl?.[splittedUrl.length - 1];
  const data = await RecipeService.getById(uri);

  return {
    props: { data },
  };
};
