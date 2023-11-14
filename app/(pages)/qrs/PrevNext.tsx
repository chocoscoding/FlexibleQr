'use client'
import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const PrevNext = () => {
  return (
    <section className="flex justify-between items-center mt-4 ba1:text-sm">
      <button className="flex border border-main-dark rounded-sm items-center p-[4px] font-medium gap-2 backdrop1">
        <IoIosArrowBack />
        <p>Prev</p>
      </button>
      <p className="font-semibold">Page 1 of 10</p>
      <button className="flex border border-main-dark rounded-sm items-center p-[4px] font-medium gap-2 backdrop1">
        <p>Next</p>
        <IoIosArrowForward />
      </button>
    </section>
  );
};

export default PrevNext;
