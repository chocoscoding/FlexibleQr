import React from "react";

const Loading = () => {
  return (
    <main className="w-full min-h-page-height px-10 ba1:p-2 ">
      {/* search */}
      <section className="w-full my-4 flex justify-end">
        <div className="flex border border-main-dark overflow-hidden rounded min-w-[250px] max-w-[400px] h-[30px] animate-pulse bg-[#eae2dc]"></div>
      </section>
      {/* main table */}
      <div className="flex justify-center w-full ">
        <section className="rounded border border-main-dark w-full max-w-screen-[1300px] overflow-hidden">
          <div className="flex  h-12 border-b border-main-dark last:border-none items-center md1:hidden">
            <p className="flex-[8] pl-8 font-semibold text-sm">Name</p>
            <p className="flex-[2] text-center font-semibold text-sm">Status</p>
            <p className="flex-[2] text-center font-semibold text-sm">Created At</p>
          </div>

          {Array(6)
            .fill(0)
            .map((ele, i) => (
              <div
                key={`loading_oneqrlink_${i}`}
                className="flex min-h-10 border-b border-main-dark last:border-none items-center py-3 md:py-6 cursor-pointer md1:flex-wrap md1:gap-2 sm1:!gap-3 md1:px-2.5 hover:bg-white animate-pulse bg-[#eae2dc] justify-between px-3">
                <div className=" ml-2 w-[60%] h-[30px] animate-pulse bg-[#eae2dc] border border-main-dark rounded"></div>
                <div className=" ml-2 w-[5%] h-[30px] animate-pulse bg-[#eae2dc] border border-main-dark rounded"></div>
              </div>
            ))}
        </section>
      </div>
    </main>
  );
};

export default Loading;
