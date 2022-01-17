import React from "react";
import Banner from "../Banner";

interface HeaderProps {
  children: any;
}

export default function index(props: HeaderProps) {
  const { children } = props;
  return (
    <>
      <div className="h-fit bg-gradient-to-r from-pink-500 to-orange-500">
        {children}
        <Banner />
      </div>
    </>
  );
}
