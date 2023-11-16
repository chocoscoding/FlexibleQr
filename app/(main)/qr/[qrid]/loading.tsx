import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import TopNav from "./TopNavLoading";

const Loading = () => {
  return (
    <main className="w-full min-h-page-height m-auto px-10 lg1:px-7 md1:!px-2">
      {/* top nav */}
      <TopNav />

      <section className="ml-16 lg3:ml-0 ">
        <main className="flex flex-wrap justify-between mt-8 ">
          {/* main */}
          <div className="w-8/12 md1:w-full animate-pulse bg-[#eae2dc] border border-main-dark rounded h-[300px]"></div>
          {/* qr code */}
          <div className="w-[30%] md1:w-full ">
            <div className="w-full animate-pulse h-[300px] bg-[#eae2dc] border border-main-dark rounded mb-2"></div>
            <div className="w-full animate-pulse h-[50px] bg-main-dark border border-main-dark rounded"></div>
          </div>
        </main>
      </section>
    </main>
  );
};

export default Loading;
