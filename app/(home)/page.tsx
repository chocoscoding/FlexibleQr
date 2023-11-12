import Image from "next/image";
import ActionButton from "./ActionButton";

export default function Home() {
  return (
    <main className="flex md:flex-row flex-col md:px-14 relative min-h-page-height">
      <section className="w-full md:w-1/2 md:relative md:h-page-height text-main-dark p-6 sm:p-8 md:p-10 lg:p-12  flex flex-col md:block items-center justify-center z-20 mt-4 md:mt-0">
        <h1 className=" font-bold break-words clamper">Keep the Look, Change the Link</h1>
        <h3 className=" text-xl my-3">Your Content Changes, But your QR Code Stays the Same</h3>
        <ActionButton />
      </section>
      <section className="w-full md:w-1/2 h-[500px] md:h-screen relative z-10 border border-red-400 ">
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
