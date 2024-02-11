"use client";
import { Box, type BoxProps as IBoxProps, styled } from "@mui/material";
import { baseTheme as theme } from "@/styles/theme";

export const FilterWrapper = styled(
  Box,
  {},
)<Partial<IBoxProps>>(() => ({
  ".filter-container": {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    ".css-1c35hjw-MuiPaper-root-MuiAccordion-root:first-of-type": {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
  },
  ".filter-heading": {
    padding: "10px 20px",
  },
}));
