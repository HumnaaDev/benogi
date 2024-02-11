// import { render, screen } from "@testing-library/react";
// import RecipePage from "./[uri]";
// import { RecipeService } from "@/services/recipes";
// import MOCK_DATA from "./mock.json";
// import { IRecipes } from "@/typings";
// import { GetServerSidePropsContext } from "next";
// import { getServerSideProps } from "next/dist/build/templates/pages";

// jest.mock("../../services/recipes");

// describe("RecipePage Component", () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   test("renders loading when data is not available", () => {
//     render(<RecipePage data={null as unknown as IRecipes} />);
//     expect(screen.getByText("Loading...")).toBeDefined();
//   });

//   test("renders DetailView when data is available", () => {
//     render(<RecipePage data={MOCK_DATA as unknown as IRecipes} />);
//     expect(screen.getByTestId("detail-view")).toBeDefined();
//   });

//   describe("getServerSideProps", () => {
//     const mockContext = {
//       resolvedUrl: "/recipe/recipe-uri",
//     };

//     test("fetches data from RecipeService and returns props", async () => {
//       jest.spyOn(RecipeService, "getById").mockResolvedValueOnce({
//         recipe: MOCK_DATA,
//       } as unknown as IRecipes);

//       const result = await getServerSideProps(
//         mockContext as GetServerSidePropsContext,
//       );

//       expect(RecipeService.getById).toHaveBeenCalledWith("recipe-uri");
//       expect(result.props.data).toEqual({ recipe: MOCK_DATA });
//     });
//   });
// });
