"use client";
import { Box, type BoxProps as IBoxProps, styled } from "@mui/material";
import { baseTheme as theme } from "@/styles/theme";

export const SidebarWrapper = styled(
  Box,
  {},
)<Partial<IBoxProps>>(() => ({
  "&.sidebar-container": {
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    width: "189px",
    color: "#fff",
    [theme.breakpoints.down("md")]: {
      height: "100%",
    },
    ".item": {
      cursor: "pointer",
      padding: 20,
      [theme.breakpoints.down("sm")]: {
        padding: "20px 10px",
      },
    },
    divider: {
      backgroundColor: "#fff",
    },
    ".selected": {
      backgroundColor: "#202125",
    },
  },
}));
