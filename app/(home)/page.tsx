import Image from "next/image";
import ActionButton from "./ActionButton";

export default function Home() {
  return (
    <main className="flex flex-wrap-reverse relative">
      <section className=" md:w-1/2 md:page-height text-main-dark p-6 md:p-10 lg:p-12 w-full absolute md:relative  bg-main-light z-30 md:bg-transparent">
        <div className=" md:absolute w-full">
          <h1 className="md:min-w-[70vw] z-40 font-extrabold break-words clamper relative">
            Keep the Look, <br />
            Change the Link
          </h1>
          <h3 className="text-xl  md:text-2xl my-1 md:my-3">Your Content Changes, But your QR Code Stays the Same</h3>
          <ActionButton />
        </div>
      </section>
      <section className=" md:w-1/2 h-screen relative z-10 w-full">
        <Image
          src={"/Mockup.png"}
          objectFit="contain"
          fill
          objectPosition="right"
          alt="design"
          priority={true}
          className="mockup"
        />
      </section>
    </main>
  );
}
