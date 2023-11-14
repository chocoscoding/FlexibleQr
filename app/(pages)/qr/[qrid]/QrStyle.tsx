import React from "react";

import InputField from "@/app/components/InputField";
import useActiveSection from "@/app/hooks/useActiveSection";
import OptionField from "@/app/components/OptionField";
const QrStyle = () => {
  const { activeSection } = useActiveSection();
  if (activeSection !== 2) return null;

  return (
    <div className="border-2 border-main-dark rounded p-4 bg-white">
      <form>
        <div className="w-[calc(50%-1rem)]">
          <InputField
            name="Size"
            placeholder="QR size"
            inputType="number"
            id="size"
          />
        </div>
        <div className="w-full flex gap-8">
          <InputField
            name="Foreground"
            placeholder="https://example.com"
            inputType="color"
            id="foreground"
          />
          <InputField
            name="Background"
            placeholder="https://example.com"
            inputType="color"
            id="background"
          />
        </div>

        {/* image settings */}
        <section className="flex items-center gap-3 my-4">
          <div className="bg-main-dark w-[10px] h-[10px] rounded-sm"></div>
          <p className="font-bold text-xl">Image Settings</p>
        </section>

        <div className="w-[calc(50%-1rem)]">
          <InputField
            name="Image url"
            placeholder="Image url for QR code"
            inputType="string"
            id="imageurl"
          />
        </div>
        <div className="w-full flex gap-8">
          <InputField
            name="Width"
            placeholder=""
            inputType="number"
            id="imagewidth"
          />
          <InputField
            name="Height"
            placeholder=""
            inputType="number"
            id="imageheight"
          />
        </div>
        <div className="w-full flex gap-8">
          <OptionField
            name="Image position"
            id="imageposition"
            options={["CENTERED", "FLEXIBLE"]}
          />
          <OptionField
            name="Excavate Image"
            id="excavateimage"
            options={["YES", "NO"]}
          />
        </div>
        <div className="w-full flex gap-8">
          <InputField
            name="Image X"
            placeholder=""
            inputType="number"
            id="imageX"
          />
          <InputField
            name="Image Y"
            placeholder=""
            inputType="number"
            id="imageY"
          />
        </div>
      </form>
    </div>
  );
};

export default QrStyle;
