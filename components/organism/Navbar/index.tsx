import Image from "next/image";
import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/app-context";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import MenuMobile from "./MenuMobile";
import ToggleMenu from "./ToggleMenu";
import cx from "classnames";
// import ToggleMenu from "./ToggleMenu";

export default function index() {
  const context = useContext(AppContext);
  const scrollY = context.scrollY;

  const classNav = cx({
    "fixed top-0 transition-all  delay-100 w-full": scrollY < 65,
    "z-40 fixed  top-5 left-[5%]  transition-all  delay-10 w-[90%] bg-pink-600 text-white  rounded-lg ":
      scrollY > 65,
  });

  return (
    <section>
      <nav className={classNav}>
        <div className="px-5 py-2 flex  flex-row justify-between bg-pink-300/0">
          <a
            className="text-[2rem] font-bold h-fit my-auto text-white tracking-wider"
            href="#"
          >
            Beauty me
          </a>
          <MenuMobile />
          <Menu />
          <ToggleMenu />
        </div>
      </nav>
    </section>
  );
}
