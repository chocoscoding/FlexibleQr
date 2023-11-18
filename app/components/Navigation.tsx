"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Dropdown from "./Dropdown";
import { useSession } from "next-auth/react";
import useNav from "../hooks/useNav";
const Navigation = () => {
  const { isOpen, toggle } = useNav();
  const { data } = useSession();
  return (
    <div className="flex items-center gap-3 relative z-[10]">
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
        onClick={() => toggle(!isOpen)}
        className="cursor-pointer"
        id="dropdown_toggle_d14223">
        {isOpen ? (
          <AiOutlineClose
            className="w-[30px] h-[30px]"
            id="dropdown_toggle_d14223"
          />
        ) : (
          <AiOutlineMenu
            className="w-[30px] h-[30px]"
            id="dropdown_toggle_d14223"
          />
        )}
      </span>

      {/* dropdown */}
      {isOpen ? <Dropdown /> : null}
    </div>
  );
};

export default Navigation;
