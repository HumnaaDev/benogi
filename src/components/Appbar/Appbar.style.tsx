"use client";
import { styled } from "@mui/material/styles";
import { Box, type BoxProps as IBoxProps } from "@mui/material";
import { baseTheme as theme } from "@/styles/theme";

export const AppbarWrapper = styled(
  Box,
  {},
)<Partial<IBoxProps>>(() => ({
  "&.appbar-container": {
    minHeight: "50px",
    ".appbar": {
      position: "fixed",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      backgroundColor: theme.palette.primary.main,
      button: {
        padding: "10px 40px",
      },
    },
  },
}));
