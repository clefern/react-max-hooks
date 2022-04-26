import classes from "../../styles/Layout.module.css";
import MainNavigation from "./MainNavigation";
import MuiPaper from "./Paper";
import React from "react";

function Layout(props: any) {
  return (
    <div>
      <MainNavigation />
      {/* <MuiPaper /> */}
      <main className={classes.main} {...props} />;
    </div>
  );
}
export default Layout;
