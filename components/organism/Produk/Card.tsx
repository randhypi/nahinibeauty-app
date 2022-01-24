import React from "react";

export default function Card() {
  return (
    <>
      <div className="rounded-xl w-[200px]  md:h-fit  mx-auto  mt-10 bg-gradient-to-r pb-[4px] from-[#e7db6e] via-[#dbad13] to-[#eaa133] shadow-xl">
        <div className="w-52 h-80 flex flex-col justify-between  bg-white  rounded-lg p-4">
          <img
            src="/img/niclogo.png"
            className="w-full h-60 mx-0 py-0 border-2 border-orange-700 rounded-lg "
            alt=""
          />
          <p className="text-orange-500 mx-auto font-Poppins font-semibold px-2">
            Eye & Facial
          </p>
          <p className="text-center line-through w-4/4 text-md font-semibold  mx-2 px-1">
            Rp. 300.000,00
          </p>
          <p className="text-center  w-4/4 font-bold text-lg mx-2 px-1">
            Rp. 220.000,00
          </p>
        </div>
      </div>
    </>
  );
}
