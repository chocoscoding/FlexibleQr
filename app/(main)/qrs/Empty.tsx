"use client";
import useNewModalState from "@/app/hooks/useNewModalState";
import Image from "next/image";
import React from "react";

const Empty = () => {
  const { isOpen, close, open } = useNewModalState();
  return (
    <div className="w-full h-[400px] flex flex-col justify-center items-center bg-white gap-2 p-2">
      <div style={{ position: "relative", width: "150px", height: "80px" }}>
        <Image
          src={`/qrbar.png`}
          alt="Picture of the author"
          sizes="100px"
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      <p className="text-main-dark text-3xl md:text-4xl font-bold">No QR found</p>
      <p className="text-main-dark text-xl max-w-[400px] text-center">
        Create a new QR code now and explore our world of limitless possibilities
      </p>

      <button
        className="bg-purple-10 text-main-dark w-full max-w-[350px] md1:max-w-[300px] h-14 font-bold backdrop2 rounded-md border border-main-dark focus:outline-none"
        onClick={open}>
        Create new QR
      </button>
    </div>
  );
};

export default Empty;
