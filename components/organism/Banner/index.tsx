import React from "react";
import Image from "next/image";

export default function index() {
  return (
    <>
      <div className="px-7 font-Poppins grid lg:grid-cols-2 grid-cols-1">
        <div className="py-5 flex flex-col gap-y-1 md:gap-y-4 justify-items-center">
          <span className="py-2 font-Roboto text-center md:text-left font-bold text-[2.8rem] md:text-[2.9rem] text-white tracking-wide">
            Tampil wajah{" "}
            <span className="text-yellow-300 font-extrabold"> lebih </span>{" "}
            cerah
          </span>
          <span className="text-white text-md md:text-md leading-lose">
            Aute quis culpa veniam cupidatat esse sit nostrud officia pariatur
            qui enim. Enim consequat sit dolore consequat quis eu est do laborum
            sint eiusmod fugiat anim nisi. Reprehenderit culpa minim mollit
            proident ullamco in mollit sit. Excepteur reprehenderit aliqua irure
            ullamco. Sint sint mollit sit et qui adipisicing nostrud. Sint nisi
            minim minim enim sit.
          </span>
          <button className="bg-yellow-500 text-[1.5rem] w-fit mx-auto md:mx-0 px-7 py-3 font-Poppins font-extrabold tracking-widest drop-shadow-lg  shadow-white rounded-lg mt-5 text-white animate-bounce">
            Miliki Sekarang
          </button>
        </div>

        <div className="w-full h=full py-5  text-center">
          <Image src="/img/banner-img 1.svg" width={600} height={400} />
        </div>
      </div>
    </>
  );
}
