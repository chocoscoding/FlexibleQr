"use client";
import Link from "next/link";
import React, { FC } from "react";
import QrStatus from "./QrStatus";
import { formattedDate } from "@/app/helpers";

interface OneQrLinkType {
  link: string;
  name: string;
  status: string;
  createdAt: Date | string;
}
const OneQrLink: FC<OneQrLinkType> = ({ link, name, status, createdAt }) => {
  return (
    <Link
      href={link}
      className="flex min-h-12 border-b border-main-dark last:border-none items-center py-3 md:py-6 cursor-pointer md1:flex-wrap md1:gap-2 sm1:!gap-3 md1:px-2.5 hover:bg-white ">
      <div className="flex-[8] md:pl-8 md:pr-3 font-semibold text-sm md1:-order-1 md1:flex-[1_0_100%] flex items-center">
        <p className="w-full max-h-9 break-all text-truncate md1:w-[75%] ba1:h-4 ba1:!w-full">{name}</p>
      </div>
      <div className="flex flex-[2] ba1:flex-[1] text-center text-sm flex-shrink-0 justify-center md1:justify-end">
        <QrStatus />
      </div>
      <p className="flex-[2] ba1:flex-[1] text-center font-normal text-sm flex-shrink-0 md1:flex-[1_0_0%] md1:-order-1 md1:flex md1:justify-start">
        {formattedDate(createdAt)}
      </p>
    </Link>
  );
};

export default OneQrLink;
