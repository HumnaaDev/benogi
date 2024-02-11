import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchInput } from "./SearchInput";

describe("SearchInput", () => {
  it("renders without errors", () => {
    render(
      <SearchInput
        handleSearch={() => {}}
        label={"Search for a recipe"}
        placeholder={"Search for recipes..."}
      />,
    );
    expect(screen.getByLabelText("Search for a recipe")).toBeDefined();
  });

  it("triggers handleSearch on input change", async () => {
    const handleSearchMock = jest.fn();
    render(
      <SearchInput
        handleSearch={handleSearchMock}
        label={"Search for a recipe"}
        placeholder={"Search for recipes..."}
      />,
    );

    const searchInput = screen.getByLabelText("Search for a recipe");
    userEvent.type(searchInput, "pasta");

    await waitFor(() => expect(handleSearchMock).toHaveBeenCalledWith("pasta"));
  });

  it("debounces input correctly", async () => {
    jest.useFakeTimers();
    const handleSearchMock = jest.fn();
    render(
      <SearchInput
        handleSearch={handleSearchMock}
        label={"Search for a recipe"}
        placeholder={"Search for recipes..."}
      />,
    );

    const searchInput = screen.getByLabelText("Search for a recipe");

    fireEvent.change(searchInput, { target: { value: "pasta" } });
    fireEvent.change(searchInput, { target: { value: "pizza" } });

    jest.runAllTimers();

    await waitFor(() => expect(handleSearchMock).toHaveBeenCalledWith("pizza"));
  });
});
