"use client";
import { styled } from "@mui/material/styles";
import { Box, type BoxProps as IBoxProps } from "@mui/material";
import { baseTheme as theme } from "@/styles/theme";

export const SearchInputWrapper = styled(
  Box,
  {},
)<Partial<IBoxProps>>(() => ({
  "&.search-input": {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
}));
