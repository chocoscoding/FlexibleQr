"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Dropdown from "./Dropdown";
import { useSession } from "next-auth/react";
const Navigation = () => {
  const [open, setOpen] = useState(false);
  const { data } = useSession();
  return (
    <div className="flex items-center gap-3 relative">
      <div className="w-[35px] h-[35px] overflow-hidden rounded-full relative border border-main-dark">
        <Image
          src={data?.user?.image || "/user.jpg"}
          objectFit="contain"
          width={70}
          height={70}
          alt="user pic"
        />
      </div>
      <span
        onClick={() => setOpen(!open)}
        className="cursor-pointer">
        {open ? <AiOutlineClose className="w-[30px] h-[30px]" /> : <AiOutlineMenu className="w-[30px] h-[30px]" />}
      </span>

      {/* dropdown */}
      {open ? <Dropdown /> : null}
    </div>
  );
};

export default Navigation;
