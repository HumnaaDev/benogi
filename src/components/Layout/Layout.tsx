import { FC, ReactNode } from "react";
import { Appbar, Sidebar } from "@/components";
import { Box, Grid } from "@mui/material";
import { LayoutWrapper } from "./Layout.style";
import { RecipeProvider } from "@/context/storeContext";

type ILayoutProps = {
  children: ReactNode;
};

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <LayoutWrapper>
        <RecipeProvider>
          <Appbar title="Trending Recipes" />
          <Grid className="main-container">
            <Box className="sidebar">
              <Sidebar />
            </Box>
            <Box component="main" className="main-content">
              {children}
            </Box>
          </Grid>
        </RecipeProvider>
      </LayoutWrapper>
    </>
  );
};
