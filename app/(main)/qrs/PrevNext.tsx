"use client";
import React, { Dispatch, FC, SetStateAction } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

interface PrevNextType {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
}
const PrevNext: FC<PrevNextType> = (props) => {
  const { totalPages, currentPage, setCurrentPage } = props;
  const increment = () => {
    if (currentPage === totalPages) return;
    setCurrentPage((prev) => prev++);
  };
  const decrement = () => {
    if (currentPage <= 1) return;
    setCurrentPage((prev) => prev--);
  };
  return (
    <section className="flex justify-between items-center mt-4 ba1:text-sm">
      <button
        className="flex border border-main-dark rounded-sm items-center p-[4px] font-medium gap-2 backdrop1"
        onClick={decrement}>
        <IoIosArrowBack />
        <p>Prev</p>
      </button>
      <p className="font-semibold">{`Page ${currentPage} of ${totalPages}`}</p>
      <button
        className="flex border border-main-dark rounded-sm items-center p-[4px] font-medium gap-2 backdrop1"
        onClick={increment}>
        <p>Next</p>
        <IoIosArrowForward />
      </button>
    </section>
  );
};

export default PrevNext;
