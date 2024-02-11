"use client";
import { FC } from "react";
import { Divider, Grid } from "@mui/material";
import { SIDEBAR_ITEM } from "@/constants/enum";
import { useStoreContext } from "@/context/storeContext";
import { SidebarWrapper } from "./Sidebar.style";
import { useRouter } from "next/navigation";
import { FilterComponent } from "../Filters";

type ISidebarProps = {};

export const Sidebar: FC<ISidebarProps> = () => {
  const router = useRouter();

  const {
    actions: { setSidebarSelectedItem },
    states: { sidebarSelectedItem },
  } = useStoreContext();

  const itemClickHandler = (route: string, type: string) => {
    router.push(route);
    setSidebarSelectedItem(type);
  };

  return (
    <SidebarWrapper className="sidebar-container">
      <Grid
        className={`item ${sidebarSelectedItem === SIDEBAR_ITEM.TRENDING && "selected"}`}
        onClick={() => itemClickHandler("/", SIDEBAR_ITEM.TRENDING)}
      >
        Trending Recipes
      </Grid>
      <Divider className="divider" />
      <Grid
        className={`item ${sidebarSelectedItem === SIDEBAR_ITEM.BOOKMARK && "selected"}`}
        onClick={() => itemClickHandler("/bookmark", SIDEBAR_ITEM.BOOKMARK)}
      >
        Bookmark
      </Grid>
      {sidebarSelectedItem === SIDEBAR_ITEM.TRENDING && (
        <Grid>
          <FilterComponent onSelect={(query) => router.push(`/${query}`)} />
        </Grid>
      )}
    </SidebarWrapper>
  );
};
