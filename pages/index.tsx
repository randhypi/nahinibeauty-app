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

const Home: NextPage = () => {
  const [menuValue, setMenuValue] = useState(false);
  const [width, height] = useWindowSize();

  const appContextValue = {
    menuValue,
    setMenuValue,
    useWindowSize,
    width,
    height,
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
      </AppContext.Provider>
    </>
  );
};

export default Home;
