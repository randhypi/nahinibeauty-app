import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { AppContext } from "../context/app-context";
import Navbar from "../components/organism/Navbar";
import { useEffect, useState } from "react";
import Header from "../components/organism/Header";

const Home: NextPage = () => {
  const [menuValue, setMenuValue] = useState(false);

  function useWindowSize() {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
    useEffect(() => {
      const handleResize = () => {
        setSize([window.innerWidth, window.innerHeight]);
      };
      window.addEventListener("resize", handleResize);
    }, []);

    return size;
  }

  const appContextValue = {
    menuValue,
    setMenuValue,
    useWindowSize,
  };
  return (
    <>
      <AppContext.Provider value={appContextValue}>
        <Header>
          <Navbar />
        </Header>
      </AppContext.Provider>
    </>
  );
};

export default Home;
