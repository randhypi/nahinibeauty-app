import React, { useContext, useState } from "react";
import MenuItem from "./MenuItem";
import cx from "classnames";
import { AppContext } from "../../../context/app-context";

export default function Menu() {
  const context = useContext(AppContext);
  const state = context.menuValue;

  const classTitle = cx({
    menu: true,
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
