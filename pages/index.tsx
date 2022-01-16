import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { AppContext } from "../context/app-context";
import Navbar from "../components/organism/Navbar";
import { useState } from "react";

const Home: NextPage = () => {
  const [menuValue, setMenuValue] = useState(false);

  const appContextValue = {
    menuValue,
    setMenuValue,
  };
  return (
    <>
      <AppContext.Provider value={appContextValue}>
        <Navbar />
      </AppContext.Provider>
    </>
  );
};

export default Home;
