import React from "react";
import useActiveSection from "@/app/hooks/useActiveSection";
import InputField from "@/app/components/InputField";

const MainInfo = () => {
  const { activeSection } = useActiveSection();
  if (activeSection !== 1) return null;

  return (
    <div className="border-2 border-main-dark rounded p-4 bg-white">
      <form>
        <InputField
          name="QR Name"
          placeholder="QR code name"
          inputType="text"
          id="qrname"
        />
        <InputField
          name="Url"
          placeholder="https://example.com"
          inputType="text"
          id="url"
        />

        <div className="flex gap-4 justify-end">
          <button className="bg-white border border-main-dark rounded  min-w-[150px] max-w-[200px] h-[55px] hover:border-2">Cancle</button>
          <button className=" bg-main-light border border-main-dark rounded min-w-[150px] max-w-[200px] h-[55px] hover:border-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MainInfo;
