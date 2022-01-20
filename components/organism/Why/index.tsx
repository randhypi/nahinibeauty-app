import React from "react";
import Image from "next/image";
import Card from "./Card";
import Slider from "react-slick";

export default function index() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          className: "center",
          centerMode: true,
          centerPadding: "60px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="h-auto w-full px-5 py-6 bg-white">
        <div className="flex flex-col gap-y-4">
          <p className="title">Benefits and Advantages</p>
          <p className="sub-title">
            Ini Manfaat jika anda menggunakan produk kami
          </p>
          <p className="tex-Poppins text-md  mx-5 text-center md:mx-20 ">
            Dolor incididunt mollit est consequat sint est labore quis elit duis
            consequat consectetur. Eiusmod id reprehenderit ad amet pariatur
            veniam magna laboris consectetur esse et. Fugiat sit reprehenderit
            cupidatat laborum tempor esse amet. Ad nisi in magna excepteur. Ad
            ut et ex aliqua. Adipisicing irure nostrud tempor cillum. Elit et
            dolore dolor consectetur proident ea non tempor sint.
          </p>
        </div>
        <div className="w-full py-5 md:px-20  justify-items-center ">
          <Slider {...settings}>
            <Card />
            <Card />
            <Card />
            <Card />
          </Slider>
        </div>
      </div>
    </>
  );
}
