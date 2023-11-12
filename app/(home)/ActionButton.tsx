"use client";
import { signIn, useSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { GrAddCircle } from "react-icons/gr";
import useFollowersCount from "@/app/hooks/useNewModalState";

const ActionButton = () => {
  const { status } = useSession();
  const { open } = useFollowersCount();
  const buttonStyle = `flex items-center justify-center font-semibold gap-2 backdrop2 w-full max-w-[450px] md:max-w-[370px] lg:max-w-[450px] border-2 border-black rounded xl:h-16 lg:h-14 h-12 outline-none mt-3 md:mt-6 self-center`;
  return (
    <div className="md:mt-0 mt-4">
      {status === "authenticated" ? (
        <button
          className={buttonStyle}
          onClick={open}>
          <GrAddCircle className="w-[25px] h-[25px]" /> Create a new QR Code
        </button>
      ) : (
        <button
          className={buttonStyle}
          onClick={() => signIn("google")}>
          <FcGoogle className="w-[30px] h-[30px]" />
          Login to start QR creation
        </button>
      )}
    </div>
  );
};

export default ActionButton;
