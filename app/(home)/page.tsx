import Image from "next/image";
import ActionButton from "./ActionButton";

export default function Home() {
  return (
    <main className="flex ">
      <section className="w-1/2 page-height text-main-dark p-6 sm:p-8 md:p-10 lg:p-12 relative">
        <div className="w-full absolute">
          <h1 className="min-w-[70vw] z-40 font-extrabold break-words clamper relative">
            Keep the Look, <br />
            Change the Link
          </h1>
          <h3 className=" text-2xl my-3">Your Content Changes, But your QR Code Stays the Same</h3>
          <ActionButton />
        </div>
      </section>
      <section className="w-1/2 h-screen relative z-10">
        <Image
          src={"/Mockup.png"}
          objectFit="contain"
          fill
          objectPosition="right"
          alt="design"
          priority={true}
          className=""
        />
      </section>
    </main>
  );
}
