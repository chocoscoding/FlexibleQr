'use client'

import React from "react";
import useActiveSection from "@/app/hooks/useActiveSection";
import InputField from "@/app/components/InputField";
const Settings = () => {
  const { activeSection } = useActiveSection();
  if (activeSection !== 3) return null;

  return (
    <div className="border-2 border-main-dark rounded p-4 bg-white">
      <p className="text-red-700 text-xl font-semibold h-10 border-b border-main-dark mb-3">Danger Zone</p>

      <p className="text-sm text-gray-10 my-4">{`Delete this QR (This action is irreversible)`}</p>
      <button className=" bg-red-10 border border-main-dark rounded  min-w-[150px] max-w-[200px] h-[55px] hover:border-2">Cancle</button>
    </div>
  );
};

export default Settings;
