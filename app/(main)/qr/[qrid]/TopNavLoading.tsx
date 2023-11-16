"use client";
import { IoIosArrowBack } from "react-icons/io";
import { useParams, useRouter } from "next/navigation";

const TopNav = () => {
  const { back } = useRouter();

  return (
    <section className="my-4 flex w-full items-center h-10">
      <button
        className="border border-main-dark rounded-sm p-1 flex-shrink-0 h-10 w-10 md1:h-8 md1:w-8 backdrop1 outline-none mr-6 flex justify-center items-center"
        onClick={back}>
        <IoIosArrowBack />
      </button>
      <div className="animate-pulse w-full h-8 bg-[#eae2dc] border border-main-dark rounded" />
    </section>
  );
};

export default TopNav;
