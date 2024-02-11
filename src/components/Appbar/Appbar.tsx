import { FC } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import { AppbarWrapper } from "./Appbar.style";

type IAppbarProps = {
  title: string;
};

export const Appbar: FC<IAppbarProps> = ({ title }) => {
  return (
    <AppbarWrapper className="appbar-container">
      <AppBar className="appbar">
        <IconButton data-testid="drawer" color="inherit">
          Benogi
        </IconButton>
        <Divider orientation="vertical" />
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </AppbarWrapper>
  );
};
