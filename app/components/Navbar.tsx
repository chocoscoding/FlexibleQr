import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import Navigation from "./Navigation";
import Link from "next/link";
const Navbar = () => {
  const { data, status } = useSession();
  const SignInButton = () => (
    <button
      className="flex items-center gap-2 px-2 h-[70%] border-2  border-main-dark text-main-dark bg-purple-10 rounded font-bold cursor-pointer backdrop1 z-[10]"
      onClick={() => signIn("google")}>
      <FcGoogle className="w-[25px] h-[25px]" />
      Sign in with Google
    </button>
  );
  return (
    <nav className="bg-main-light h-16 border-b border-gray-20 flex justify-between lg:px-10 md:px-6 sm:px-4 px-2 items-center">
      <Link
        href={"/"}
        className="relative flex flex-col items-center justify-center">
        <span className="hidden sm:block">
          <Image
            src={"/LOGO.png"}
            objectFit="contain"
            width={150}
            height={30}
            alt="logo"
          />
        </span>
        <span className="sm:hidden block">
          <Image
            src={"/LOGO-MINI.png"}
            objectFit="contain"
            width={35}
            height={30}
            alt="logo"
          />
        </span>
      </Link>

      {status === "authenticated" ? <Navigation /> : <SignInButton />}
    </nav>
  );
};

export default Navbar;
