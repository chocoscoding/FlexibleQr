"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { AiFillPlusCircle, AiOutlineUnorderedList } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { nameShortener } from "../helpers";
import useNewModalState from "../hooks/useNewModalState";
import { useEffect, useRef } from "react";
import useNav from "../hooks/useNav";
const Dropdown = () => {
  const { data } = useSession();
  const { isOpen, toggle } = useNav();
  const { open } = useNewModalState();
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

  //use escape key to close dropdown
  useEffect(() => {
    const handleEscKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        toggle(false);
        return;
      }
    };
    window.addEventListener("keydown", handleEscKeyPress);
    return () => {
      window.removeEventListener("keydown", handleEscKeyPress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //function to check if an element or its next 2 parent have that id
  function hasParentWithId(element: any, id: string) {
    let currentElement = element;
    let count = 0;
    while (currentElement !== null && currentElement !== document) {
      //dont traverse more than 3 times
      if (count > 2) return;
      count++;
      if (currentElement.id === id) {
        return true;
      }
      currentElement = currentElement.parentElement;
    }

    return false;
  }

  //close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      //if you clicked on the nav toggle itself
      if (hasParentWithId(event.target, "dropdown_toggle_d14223")) return;
      //if nav isn't open, don't do anything
      if (!isOpen) return;
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        hasParentWithId(event.target, "dropdown_34rfe34") !== true
      ) {
        toggle(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //reuseable li component
  const Li = ({ item }: { item: (typeof dropdownigationList)[number] }) => (
    <li
      className="min-w-full flex items-center gap-2 p-3 border-b border-main-dark w-max hover:bg-yellow-20 cursor-pointer"
      onClick={item.onclick}
      id="dropdown_34rfe34">
      {item.icon}
      <p
        className="flex-shrink-0"
        id="dropdown_34rfe34">
        {item.name}
      </p>
    </li>
  );

  return (
    <>
      <div
        id="dropdown_34rfe34"
        ref={dropdownRef}
        className=" border border-main-dark bg-white shadow-3xl absolute top-14 right-0 rounded-sm z-50">
        <ul
          className="select-none"
          id="dropdown_34rfe34">
          {/* dropdown items */}
          <li
            id="dropdown_34rfe34"
            className="min-w-full flex items-center gap-2 p-3 border-b border-main-dark w-max cursor-pointer bg-main-dark text-main-light">
            <p
              className="flex-shrink-0"
              id="dropdown_34rfe34">{`Welcome ${nameShortener(data?.user?.name)} 🤗`}</p>
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
