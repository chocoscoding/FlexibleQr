import Image from "next/image";
import ActionButton from "./ActionButton";

export default function Home() {
  return (
    <main className="flex md:flex-row flex-col md:px-8 lg:px-14 relative min-h-page-height">
      <section className="w-full md:w-5/12 lg:w-1/2 md:relative md:h-page-height text-main-dark p-2 sm:p-4 md:p-6 lg:p-12  flex flex-col justify-center mt-4 md:mt-0">
        <h1 className="text-center md:text-start font-bold break-words clamper">Keep the Look, Change the Link</h1>
        <h3 className=" text-center md:text-start xl:text-xl text-base my-3">Your Content Changes, But your QR Code Stays the Same</h3>
        <ActionButton />
      </section>
      <section className="w-full md:w-7/12 lg:w-1/2 h-[450px] md:h-screen relative z-10">
        <Image
          src={"/Mockup1.png"}
          objectFit="contain"
          fill
          alt="design"
          priority={true}
          className="object-center md:object-right"
        />
      </section>
    </main>
  );
}
