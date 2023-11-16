import Image from "next/image";
import Link from "next/link";

export default function Custom400() {
  return (
    <main className="w-full h-[100vh] relative overflow-hidden flex justify-center items-center">
      <div className="flex flex-wrap  w-full max-w-[900px] justify-center">
        <div style={{ position: "relative", width: "400px", height: "250px" }}>
          <Image
            src={`/oops.png`}
            alt="Picture of the author"
            sizes="400px"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>

        <div className="w-full min-w-[300px] max-w-[350px] md:max-w-[400px]  flex flex-col justify-start md1:items-center gap-3">
          <h1 className="">
            <span className="text-[7rem] leading-[7rem] font-extrabold text-[#000000]">4</span>
            <span className="text-[7rem] leading-[7rem] font-extrabold text-[#FF8640]">0</span>
            <span className="text-[7rem] leading-[7rem] font-extrabold text-[#00B7AB]">4</span>
          </h1>
          <p>{`Sorry, the page you’re looking for doesn’t exist`}</p>
          <Link href={"/"}>
            <button className="bg-purple-10 text-white w-[170px] h-12 m-auto font-bold shadow-3xl transition-all backdrop2 rounded-md border border-main-dark">
              Go back home
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
