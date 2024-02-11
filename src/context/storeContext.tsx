"use client";
import { createContext, type FC, type ReactNode, useContext } from "react";
import { defaultStoreValues, type StoreContextType } from "./configs";
import useReducerActions from "./useReducersActions";

export const StoreContext = createContext<StoreContextType>(defaultStoreValues);

export const useStoreContext = (): StoreContextType => useContext(StoreContext);

export type IStoreProviderProps = {
  children: ReactNode;
};

export const RecipeProvider: FC<IStoreProviderProps> = ({ children }) => {
  const { actions, states } = useReducerActions();
  return (
    <StoreContext.Provider
      value={{
        actions,
        states,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
