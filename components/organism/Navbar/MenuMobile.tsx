import React, { useContext, useState } from "react";
import Menu from "./Menu";
import cx from "classnames";
import { AppContext } from "../../../context/app-context";

export default function MenuMobile() {
  const context = useContext(AppContext);
  const state = context.menuValue;
  console.log(state);

  const classTitle = cx({
    "w-5/6 md:hidden absolute overflow-hidden top-20 right-[40px]  pb-5 rounded-br-full rounded-tl-full rounded-bl-full flex flex-col justify-items-center bg-pink-200":
      state == true,
    hidden: state == false,
  });
  return (
    <div className={classTitle}>
      <Menu title="Home" />
      <Menu title="Why ?" href="/games" />
      <Menu title="Product" />
      <Menu title="Testimoni" />
    </div>
  );
}
