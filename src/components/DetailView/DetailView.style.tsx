"use client";
import { Box, styled, type BoxProps as IBoxProps } from "@mui/material";
import { baseTheme as theme } from "@/styles/theme";

export const DetailViewWrapper = styled(
  Box,
  {},
)<Partial<IBoxProps>>(() => ({
  "&.detail-view-container": {
    padding: "50px",
    height: "100vh",
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      height: "100%",
    },
    ".detail-card": {
      boxShadow:
        "0px 2px 20px -1px rgba(14,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
      display: "flex",
      gap: 20,
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
      },
      ".recipe-image-wrapper": {
        display: "flex",
        textAlign: "center",
        [theme.breakpoints.down("md")]: {
          textAlign: "center",
        },
        ".recipe-image": {
          borderRadius: 25,
          padding: 20,
          maxHeight: "500px",
          [theme.breakpoints.down("sm")]: {
            maxHeight: "300px",
            width: "100%",
          },
        },
      },
      ".recipe-detail": {
        padding: 20,
        alignItems: "end",
        ".heading": {
          marginTop: 20,
        },
      },
      ".bold": {
        fontWeight: 600,
        fontSize: 20,
      },
    },
  },
}));
