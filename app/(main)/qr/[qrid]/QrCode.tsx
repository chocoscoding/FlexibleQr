"use client";
import { useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { useContext } from "react";
import { QrContext } from "./Provider";
import { downloadPng } from "svg-crowbar";
import { useRouter } from "next/navigation";
const QrCode = () => {
  const { linkId, qr_imageSettings, qr, mainInfo } = useContext(QrContext)!;
  const qrRef = useRef<HTMLDivElement | null>(null);

  const download = () => {
    downloadPng(qrRef.current?.firstChild, mainInfo.name + "- flexible Qr", { downloadPNGOptions: { scale: 2 }, css: "internal" });
  };
  let v = {
    src: qr_imageSettings.src,
    x: qr_imageSettings.position === "CENTERED" ? undefined : qr_imageSettings.x,
    y: qr_imageSettings.position === "CENTERED" ? undefined : qr_imageSettings.y,
    height: qr_imageSettings.height,
    width: qr_imageSettings.width,
    excavate: qr_imageSettings.excavate === "NO" ? false : true,
  };
  const qrcode = (
    <QRCodeSVG
      id="qrCode"
      value={`https://flexibleqrcodes.vercel.app/r/${linkId}`}
      level={"H"}
      size={qr.size}
      bgColor={qr.bgColor}
      fgColor={qr.fgColor}
      imageSettings={v}
    />
  );
  return (
    <main className="w-full overflow-hidden flex flex-col items-center gap-6 pb-4 md1:mt-4">
      <div className="w-full overflow-hidden">
        <div
          className="p-4 border-2 border-main-dark rounded-md m-auto w-fit md:w-full  lg:max-w-[350px]  aspect-square flex items-center justify-center overflow-hidden"
          ref={qrRef}>
          {qrcode}
        </div>
      </div>

      <button
        className="bg-purple-10 text-main-dark w-full max-w-[350px] md1:max-w-[300px] h-14 m-auto font-bold backdrop2 rounded-md border border-main-dark focus:outline-none"
        onClick={download}>
        Download QR Code
      </button>
    </main>
  );
};

export default QrCode;
