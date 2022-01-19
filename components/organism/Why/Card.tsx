import React from "react";

export default function Card() {
  return (
    <>
      <div className="w-[200px] h-fit md:h-70 flex flex-col gap-y-3 py-5 px-0 md:mx-2 border-solid border-b-4 border-pink-600 rounded-lg border-bt-black shadow-2xl">
        <img src="/img/niclogo.png" className="w-20 mx-auto py-0" alt="" />
        <p className="text-orange-500 mx-auto font-Poppins font-semibold px-2">
          Eye & Facial
        </p>
        <p className="text-center w-4/4  mx-2 px-1">
          Laborum incididunt adipisicing culpa adipisicing
        </p>
      </div>
    </>
  );
}
