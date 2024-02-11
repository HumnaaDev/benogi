import { useSearchParams } from "next/navigation";

export const useGetParams = () => {
  const params = useSearchParams();
  const searchParams = new URLSearchParams(Array.from(params.entries()));

  const getParam = (paramName: string, defaultValue: string) => {
    try {
      const value = searchParams.get(paramName);
      if (value === null) {
        return defaultValue;
      } else if (paramName === "calories") {
        const parsedValue = Number(value);
        if (Number.isNaN(parsedValue)) {
          throw new Error("Invalid calorie value");
        }
        return parsedValue;
      } else {
        return value;
      }
    } catch (error) {
      console.error("Error getting param:", error);
      return defaultValue;
    }
  };

  return {
    diet: getParam("diet", ""),
    health: getParam("health", ""),
    cuisineType: getParam("cuisineType", ""),
    mealType: getParam("mealType", ""),
    dishType: getParam("dishType", ""),
    calories: getParam("calories", ""),
  };
};
