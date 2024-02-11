import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { RecipeCard } from "./Card";
import { IRecipe } from "@/typings";

const localStorageMock = (() =>
  jest.fn(() => ({
    getItem: jest.fn(),
  })))();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("RecipeCard Component", () => {
  const mockOnRecipeClick = jest.fn();
  const mockRecipe = {
    uri: "some-uri",
    label: "Test Recipe",
    image: "test-image.jpg",
    calories: 500,
    healthLabels: "Healthy",
    dietLabels: "Low Fat",
  };

  beforeEach(() => {
    render(
      <RecipeCard
        recipe={mockRecipe as unknown as IRecipe}
        onRecipeClick={mockOnRecipeClick}
      />,
    );
  });

  it("renders RecipeCard correctly", () => {
    expect(screen.getByText("Test Recipe")).toBeDefined();
    expect(screen.getByText("500")).toBeDefined();
    expect(screen.getByText("Healthy")).toBeDefined();
    expect(screen.getByText("Low Fat")).toBeDefined();

    expect(screen.getByTestId("bookmark-icon")).toBeDefined();
  });

  it("handles click on RecipeCard", () => {
    fireEvent.click(screen.getByTestId("recipe-card"));

    expect(mockOnRecipeClick).toHaveBeenCalledWith("some-uri");
  });
});
