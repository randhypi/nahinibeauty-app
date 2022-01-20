import React from "react";
import Card from "./Card";
import Slider from "react-slick";

export default function index() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
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
          centerPadding: "80px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="px-5 py-6 h-fit w-full">
        <div className="h-fit w-full">
          <p className="title">Produk</p>
          <p className="sub-title">Ini lah Produk kami</p>
        </div>
        <div className="w-full py-5 md:px-20  justify-items-center ">
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
