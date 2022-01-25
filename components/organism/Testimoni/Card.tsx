import React from "react";

export default function Card() {
  return (
    <>
      <div className="rounded-xl w-fit h-fit md:h-fit mx-auto md:my-auto  bg-gradient-to-r p-[3px] from-[#e7db6e] via-[#dbad13] to-[#eaa133] shadow-xl">
        <div className="w-[300px] h-[400px] md:h-[400px] md:w-[300px]  bg-white  rounded-lg p-4 md:transition-all md:duration-200 md:hover:scale-125">
          <img src="/img/niclogo.png" className="w-full h-full " alt="" />
        </div>
      </div>
    </>
  );
}
