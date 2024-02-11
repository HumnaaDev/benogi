"use client";
import { styled } from "@mui/material/styles";
import { Box, type BoxProps as IBoxProps } from "@mui/material";
import { baseTheme as theme } from "@/styles/theme";

export const LayoutWrapper = styled(
  Box,
  {},
)<Partial<IBoxProps>>(() => ({
  ".main-container": {
    display: "flex",
    ".sidebar": {
      overflowY: "scroll",
      position: "fixed",
      width: "200px",
      "&::-webkit-scrollbar": {
        width: "0",
      },
      scrollbarWidth: "thin",
      [theme.breakpoints.down("md")]: {
        height: "100%",
        width: "47%",
      },
    },
    ".main-content": {
      width: "83%",
      padding: "20px",
      display: "flex",
      flexWrap: "wrap",
      gap: "18px",
      marginLeft: "183px",
      [theme.breakpoints.down("sm")]: {
        padding: 10,
      },
    },
  },
}));
