import type { NextPage } from "next";
import { AppContext } from "../context/app-context";
import Navbar from "../components/organism/Navbar";
import { useEffect, useState } from "react";
import Header from "../components/organism/Header";
import Why from "../components/organism/Why";
import Promo from "../components/organism/Promo";
import Produk from "../components/organism/Produk";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";
import useScrollPosition from "@react-hook/window-scroll";
import Testimoni from "../components/organism/Testimoni";
import SayInTouch from "../components/organism/SayInTouch";

const Home: NextPage = () => {
  const [menuValue, setMenuValue] = useState(false);
  const [width, height] = useWindowSize();
  const scrollY = useScrollPosition(60 /*fps*/);

  const appContextValue = {
    menuValue,
    setMenuValue,
    useWindowSize,
    width,
    height,
    scrollY,
  };

  return (
    <>
      <AppContext.Provider value={appContextValue}>
        <Header>
          <Navbar />
        </Header>
        <Why />
        <Promo />
        <Promo />
        <Promo />
        <Produk />
        <Testimoni />
        <SayInTouch />
      </AppContext.Provider>
    </>
  );
};

export default Home;
