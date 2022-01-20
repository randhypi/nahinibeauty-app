import React from "react";

export default function Card() {
  return (
    <>
      <div className="rounded-xl w-[200px]  md:h-fit  mx-auto  mt-10 bg-gradient-to-r pb-[4px] from-[#e7db6e] via-[#dbad13] to-[#eaa133] shadow-2xl">
        <div className="w-52 h-64 flex flex-col justify-between  bg-white  rounded-lg p-4">
          <img
            src="/img/niclogo.png"
            className="w-20 mx-auto py-0 border-lg border-6 rounded-lg "
            alt=""
          />
          <p className="text-orange-500 mx-auto font-Poppins font-semibold px-2">
            Eye & Facial
          </p>
          <p className="text-center w-4/4  mx-2 px-1">
            Laborum incididunt adipisicing culpa adipisicing
          </p>
        </div>
      </div>
    </>
  );
}
