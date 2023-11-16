import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const Loading = () => {
  return (
    <main className="w-full min-h-page-height m-auto px-10 lg1:px-7 md1:!px-2">
      {/* top nav */}
      <section className="my-4 flex w-full items-center h-10">
        <button className="border border-main-dark rounded-sm p-1 flex-shrink-0 h-10 w-10 md1:h-8 md1:w-8 backdrop1 outline-none mr-6 flex justify-center items-center">
          <IoIosArrowBack />
        </button>
        <p className="truncate mr-3 text-[clamp(1rem,0.9471rem_+_0.2824vw,1.3rem)] font-semibold ">
          012345678901234567890123456789012345678901234567890123456789
        </p>
      </section>

      <section className="ml-16 lg3:ml-0 border border-red-400">
        <main className="flex flex-wrap justify-between mt-8 border border-blue-700">
          {/* main */}
          <div className="w-8/12 md1:w-full border border-purple-600"></div>
          {/* qr code */}
          <div className="w-[30%] md1:w-full border border-yellow-600"></div>
        </main>
      </section>
    </main>
  );
};

export default Loading;
