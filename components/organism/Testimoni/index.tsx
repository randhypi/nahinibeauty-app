import React from "react";
import Slider from "react-slick";
import Card from "./Card";

export default function index() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div
        className="flex flex-col md:w-fullh-fit  md:overflow-hidden "
        id="testimoni"
      >
        <div className="flex flex-col w-full md:h-full  bg-gradient-to-r from-pink-500 to-orange-500 ">
          <div className=" my-auto mx-auto w-full pt-20">
            <p className="title-white">Testimoni</p>
            <p className="sub-title-white">Apa kata mereka ?</p>
          </div>

          <div className=" spacer-triangle layer1-triangle"></div>
        </div>
        <div className="w-full w-full  md:h-[100%] md:py-0  mt-[-30px] justify-items-center ">
          <Slider {...settings}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
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
