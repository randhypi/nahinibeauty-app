import type { NextPage } from "next";
import { AppContext } from "../context/app-context";
import Navbar from "../components/organism/Navbar";
import { useEffect, useState } from "react";
import Header from "../components/organism/Header";
import Why from "../components/organism/Why";

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
        <Why />
      </AppContext.Provider>
    </>
  );
};

export default Home;
