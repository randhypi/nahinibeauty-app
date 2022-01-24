import React from "react";

export default function Card() {
  return (
    <>
      <div className="rounded-xl w-fit h-fit md:h-fit mx-auto md:my-auto  mt-[-10px] bg-gradient-to-r pb-[4px] from-[#e7db6e] via-[#dbad13] to-[#eaa133] shadow-xl">
        <div className="w-[300px] h-[400px] md:h-[400px] md:w-[300px] flex flex-col justify-between  bg-white  rounded-lg p-4">
          <img
            src="/img/niclogo.png"
            className="w-full h-full mx-0 py-0 border-2 border-orange-700 rounded-lg  "
            alt=""
          />
        </div>
      </div>
    </>
  );
}
