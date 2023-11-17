"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { AiFillPlusCircle, AiOutlineUnorderedList } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { nameShortener } from "../helpers";
import useNewModalState from "../hooks/useNewModalState";
import { useEffect, useRef } from "react";
const Dropdown = () => {
  const { data } = useSession();
  const { open,isOpen,close } = useNewModalState();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownIconStyle = "w-[15px] h-[15px] text-main-dark";
  const dropdownigationList = [
    {
      name: "New QR Code",
      icon: <AiFillPlusCircle className={dropdownIconStyle} />,
      onclick: () => open(),
    },
    {
      name: "All QR Codes",
      icon: <AiOutlineUnorderedList className={dropdownIconStyle} />,
      link: "/qrs",
    },
    {
      name: "Logout",
      icon: <FiLogOut className={dropdownIconStyle} />,
      onclick: () => signOut(),
    },
  ];

  //reuseable li component
  const Li = ({ item }: { item: (typeof dropdownigationList)[number] }) => (
    <li
      className="min-w-full flex items-center gap-2 p-3 border-b border-main-dark w-max hover:bg-yellow-20 cursor-pointer"
      onClick={item.onclick}>
      {item.icon}
      <p className="flex-shrink-0">{item.name}</p>
    </li>
  );

  return (
    <>
      <div id="dropdown_34rfe34" className=" border border-main-dark bg-white shadow-3xl absolute top-14 right-0 rounded-sm z-50">
        <ul className="select-none">
          {/* dropdown items */}
          <li className="min-w-full flex items-center gap-2 p-3 border-b border-main-dark w-max cursor-pointer bg-main-dark text-main-light">
            <p className="flex-shrink-0">{`Welcome ${nameShortener(data?.user?.name)} 🤗`}</p>
          </li>
          {dropdownigationList.map((item, index) => {
            if (item.link) {
              return (
                <Link
                  href={item.link}
                  key={index}>
                  <Li item={item} />
                </Link>
              );
            }
            return (
              <Li
                key={index}
                item={item}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
