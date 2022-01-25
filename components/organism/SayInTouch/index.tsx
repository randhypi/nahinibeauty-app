import React from "react";
import Form from "./Form";

export default function index() {
  return (
    <>
      <div className="py-[50px] px-6 font-Poppins w-full h-fit">
        <p className="title">Say In Touch</p>
        <div className="px-5 py-6 border-solid border-2 w-fit mx-auto">
          <Form />
        </div>
      </div>
    </>
  );
}
