"use client";

import React, { memo, useContext, useEffect, useRef } from "react";

import InputField from "@/app/components/InputField";
import useActiveSection from "@/app/hooks/useActiveSection";
import OptionField from "@/app/components/OptionField";
import RangeField from "@/app/components/RangeField";
import toast from "react-hot-toast";
import { GrUpdate } from "react-icons/gr";
import { useRouter } from "next/navigation";
import { QrContext } from "./Provider";
const QrStyle = () => {
  const { activeSection } = useActiveSection();
  const {
    id,
    qr,
    oldQr,
    qr_size,
    qr_imageSettings,
    qr_image_positioning,
    qr_image_excavate,
    qr_image_X,
    qr_image_Y,
    qr_fg,
    qr_bg,
    qr_image_src,
    qr_image_width,
    qr_image_height,
    oldQr_imageSettings,
  } = useContext(QrContext)!;
  const { refresh } = useRouter();
  const rendercount = useRef(0);

  //to submit the newqr changes
  const submit = async () => {
    const { position, excavate, src, width, height, x, y } = qr_imageSettings;
    const { size, fgColor, bgColor } = qr;
    toast.dismiss();
    const loadingToast = toast.loading("Saving changes");
    try {
      const apicall = await fetch("/api/user/qr/updatelook", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          data: {
            qr_size: ~~size,
            qr_bg: bgColor,
            qr_fg: fgColor,
            qr_image_url: src,
            qr_image_width: ~~width,
            qr_image_height: ~~height,
            qr_image_excavate: excavate,
            qr_image_positioning: position,
            qr_image_X: x,
            qr_image_Y: y,
          },
        }),
      });
      toast.success('Saved', {
        id: loadingToast,
        duration: 800,
      });
      refresh();
      // toast.dismiss();
    } catch (error) {
      console.log(error);
      toast.dismiss();
      //a toast to run the submit again
      toast(
        (t) => (
          <span className="text-red-600">
            Could not save changes,
            <button
              className="font-bold text-main-dark"
              onClick={() => submit()}>
              Retry
            </button>
          </span>
        ),
        {
          icon: <GrUpdate />,
        }
      );
    }
  };

  useEffect(() => {
    const condition = JSON.stringify(qr) === JSON.stringify(oldQr);
    const condition2 = JSON.stringify(qr_imageSettings) === JSON.stringify(oldQr_imageSettings);

    //if render count is greater than 0, submit the changes
    if (rendercount.current > 0) {
      //timeout to manage control continous changes
      const timeout = setTimeout(() => {
        if (!condition || !condition2) submit();
      }, 1500);
      return () => clearTimeout(timeout);
    }
    rendercount.current++;
  }, [qr_imageSettings, qr]);

  if (activeSection !== 2) return null;

  return (
    <div className="border-2 border-main-dark rounded p-4 bg-white">
      <form>
        <div className="w-[calc(50%-1rem)] md1:w-full ">
          <InputField
            name="Size"
            placeholder="QR size"
            inputType="number"
            id="size"
            value={qr.size}
            onChange={qr_size}
          />
        </div>
        <div className="w-full flex gap-8 md1:flex-col md1:gap-3">
          <InputField
            name="Foreground"
            placeholder="https://example.com"
            inputType="color"
            id="foreground"
            value={qr.fgColor}
            onChange={qr_fg}
          />
          <InputField
            name="Background"
            placeholder="https://example.com"
            inputType="color"
            id="background"
            value={qr.bgColor}
            onChange={qr_bg}
          />
        </div>

        {/* image settings */}
        <section className="flex items-center gap-3 my-4">
          <div className="bg-main-dark w-[10px] h-[10px] rounded-sm"></div>
          <p className="font-bold text-xl">Image Settings</p>
        </section>

        <div className="w-[calc(50%-1rem)] md1:w-full">
          <InputField
            name="Image url"
            placeholder="Image url for QR code"
            inputType="string"
            id="imageurl"
            value={qr_imageSettings.src}
            onChange={qr_image_src}
          />
        </div>
        <div className="w-full flex gap-8 md1:flex-col md1:gap-3">
          <InputField
            disabled={!qr_imageSettings.src}
            name="Width"
            placeholder=""
            inputType="number"
            id="imagewidth"
            value={qr_imageSettings.width}
            onChange={qr_image_width}
          />
          <InputField
            disabled={!qr_imageSettings.src}
            name="Height"
            placeholder=""
            inputType="number"
            id="imageheight"
            value={qr_imageSettings.height}
            onChange={qr_image_height}
          />
        </div>
        <div className="w-full flex gap-8 md1:flex-col md1:gap-3">
          <OptionField
            disabled={!qr_imageSettings.src}
            name="Image position"
            id="imageposition"
            options={["CENTERED", "FLEXIBLE"]}
            value={qr_imageSettings.position}
            onChange={qr_image_positioning}
          />
          <OptionField
            disabled={!qr_imageSettings.src}
            name="Excavate Image"
            id="excavateimage"
            options={["YES", "NO"]}
            value={qr_imageSettings.excavate}
            onChange={qr_image_excavate}
          />
        </div>
        <div className="w-full flex gap-8 md1:flex-col md1:gap-3">
          <RangeField
            disabled={qr_imageSettings.position === "CENTERED" || !qr_imageSettings.src}
            name="Image X"
            placeholder=""
            id="imageX"
            min={1}
            max={qr.size - qr_imageSettings.width}
            value={qr_imageSettings.x}
            onchange={qr_image_X}
          />
          <RangeField
            disabled={qr_imageSettings.position === "CENTERED" || !qr_imageSettings.src}
            name="Image Y"
            placeholder=""
            value={qr_imageSettings.y}
            onchange={qr_image_Y}
            id="imageY"
            min={1}
            max={qr.size - qr_imageSettings.height}
          />
        </div>
      </form>
    </div>
  );
};

export default memo(QrStyle);
