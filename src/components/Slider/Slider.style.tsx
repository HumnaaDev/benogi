import { Box, styled, type BoxProps as IBoxProps } from "@mui/material";
import { baseTheme as theme } from "@/styles/theme";

export const SliderWrapper = styled(
  Box,
  {},
)<Partial<IBoxProps>>(() => ({
  "&.slider-container": {
    ".slider-range-wrapper": {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
      ".slider-text": {
        fontSize: "12px",
      },
    },
    ".slider-wrapper": {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      gap: 20,
      marginBottom: 20,
      ".slider-div": {
        width: "100%",
      },
    },
  },
}));
