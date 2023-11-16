"use client"; // Error components must be Client Components

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  const reload = () => {
    location.reload();
  };

  return (
    <main className="w-full h-[100vh] relative overflow-hidden flex justify-center ">
      <div className="flex flex-col w-full items-center pt-11">
        <div className="w-full min-w-[300px] max-w-[400px] md:max-w-[450px]  flex flex-col justify-start items-center md1:items-center gap-3">
          <h1 className="">
            <span className="text-[7rem] leading-[7rem] font-extrabold text-[#000000]">4</span>
            <span className="text-[7rem] leading-[7rem] font-extrabold text-[#FF8640]">0</span>
            <span className="text-[7rem] leading-[7rem] font-extrabold text-[#00B7AB]">4</span>
          </h1>
          <div>
            <p className="p-2 text-center ">{`Something went wrong, and it seems to be from us`}</p>
            <a
              href="mailto:chocoscoding@gmail.com"
              target="_blank"
              className="text-center w-full block">
              {`If error persists: kindly report to `}
              <span className="font-bold">chocoscoding@gmail.com</span>
            </a>
          </div>
          <button
            className="bg-purple-10 text-white w-[170px] h-12 m-auto font-bold shadow-3xl transition-all backdrop2 rounded-md border border-main-dark"
            onClick={reload}>
            Refresh
          </button>
        </div>

        <div className="relative flex w-full">
          <div
            style={{ position: "absolute", width: "700px", height: "350px" }}
            className="xl:!left-[-8.5%] lg:!left-[-11.5%] lg2a:left-[-15%] md:left-[-20%] sm:left-[-20%] left-[-40%] lg2:!w-[500px] lg2:!h-[300px] ba1:!w-[200px]">
            <Image
              src={`/socket.png`}
              alt="Picture of the author"
              sizes="400px"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div
            style={{ position: "absolute", width: "600px", height: "300px" }}
            className=" right-[-10%] xl2:right-[-16%] ba1:!right-[-25%] lg2:!w-[400px] lg2:!h-[250px] ba1:!w-[200px] top-[100px]">
            <Image
              src={`/plug.png`}
              alt="Picture of the author"
              sizes="400px"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
