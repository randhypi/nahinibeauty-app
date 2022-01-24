import React, { useContext, useState } from "react";
import MenuItem from "./MenuItem";
import cx from "classnames";
import { AppContext } from "../../../context/app-context";

export default function MenuMobile() {
  const context = useContext(AppContext);
  const state = context.menuValue;

  const classTitle = cx({
    menuMobile: state == true,
    hidden: state == false,
  });
  return (
    <div className={classTitle}>
      <MenuItem title="Home" href="#banner" />
      <MenuItem title="Why ?" href="#why" />
      <MenuItem title="Product" href="#produk" />
      <MenuItem title="Testimoni" href="#testimoni" />
    </div>
  );
}
