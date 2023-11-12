"use client";
import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import useFollowersCount from "@/app/hooks/useNewModalState";

const StartModal = () => {
  const { isOpen, close, open } = useFollowersCount();
  if (!isOpen) return null;
  return (
    <main className="w-screen h-screen fixed top-0 left-0 backdrop-blur-sm bg-[#0000005e] z-[1000] flex">
      <div
        className="absolute top-0 left-0 w-full h-full z-[900]"
        onClick={close}
      />
      <div className="w-[95%] lg:max-w-[500px] min-h-[350px] lg:min-h-[400px] m-auto  border-2 border-main-dark z-[999] relative rounded-md bg-main-light  flex flex-col justify-start items-center">
        <div className="w-[60%] py-4 bg-white rounded-md shadow-md flex flex-col items-center my-6 aspect-video">
          <IoAddCircleOutline className="w-[36%] h-auto" />
          <h2 className="clamper2 ">Start creating a new QR</h2>
        </div>
        <input
          type="text"
          placeholder="Your QR Code name"
          className="w-[90%] h-12 outline outline-1 outline-gray-10 focus:outline-2 focus:outline-main-dark rounded px-2 text-xl"
        />
        <button
          className={`flex items-center justify-center font-semibold gap-2 w-full md:max-w-[370px] lg:max-w-[450px] border-2 border-main-dark hover:border-none rounded lg:h-14 h-10 outline-none mt-3 self-center bg-purple-10 hover:bg-purple-20 text-main-dark backdrop-light`}>
          Create and Continue
        </button>
      </div>
    </main>
  );
};

export default StartModal;
