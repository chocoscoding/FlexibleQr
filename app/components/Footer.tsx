import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="border-t border-gray-300 h-12 flex justify-center items-center text-lg ">
      Made with 💓 by
      <Link href={"https://github.com/chocoscoding"} className="font-bold ml-2">chocoscoding</Link>
    </div>
  );
};

export default Footer;
