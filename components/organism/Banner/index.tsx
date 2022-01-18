import React from "react";
import Image from "next/image";

export default function index() {
  return (
    <>
      <div className="px-7 font-Poppins grid lg:grid-cols-2 grid-cols-1">
        <div className="py-5 flex flex-col gap-y-4">
          <span className="bg-white text-center px-2 py-2 font-bold text-[2.5rem] md:text-[3rem] text-pink-500">
            Tampil wajah lebih cerah
          </span>
          <span className="text-white text-lg md:text-md leading-lose">
            Aute quis culpa veniam cupidatat esse sit nostrud officia pariatur
            qui enim. Enim consequat sit dolore consequat quis eu est do laborum
            sint eiusmod fugiat anim nisi. Reprehenderit culpa minim mollit
            proident ullamco in mollit sit. Excepteur reprehenderit aliqua irure
            ullamco. Sint sint mollit sit et qui adipisicing nostrud. Sint nisi
            minim minim enim sit.
          </span>
          <button className="bg-white w-fit mx-auto md:mx-0 px-5 py-2 font-Poppins font-bold tracking-widest drop-shadow-lg  shadow-white">
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
