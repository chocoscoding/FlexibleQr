import { useState } from "react";
import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";
import useQrInfo from "@/app/hooks/useQrInfo";

const QrCode = ({id}: {id:string}) => {
  const { qr_imageSettings, qr, mainInfo } = useQrInfo();
  const [url, setUrl] = useState("ssss");

  const downloadQRCode = (e: any) => {
    e.preventDefault();
    setUrl("");
  };

  const qrCodeEncoder = (e: any) => {
    setUrl(e.target.value);
  };

  let v = {
    src: qr_imageSettings.src,
    x: qr_imageSettings.x,
    y: qr_imageSettings.y,
    height: qr_imageSettings.height,
    width: qr_imageSettings.width,
    excavate: qr_imageSettings.excavate === "NO" ? false : true,
  };
  const qrcode = (
    <QRCodeSVG
      id="qrCode"
      value={`https://flexibleqr.codes/${id}`}
      level={"M"}
      size={qr.size}
      bgColor={qr.bgColor}
      fgColor={qr.fgColor}
      imageSettings={v}
    />
  );
  return (
    <main className="w-full overflow-hidden flex flex-col items-center gap-6 pb-4 md1:mt-4">
      <div className="w-full overflow-hidden">
        <div className="p-4 border-2 border-main-dark rounded-md m-auto w-fit md:w-full lg:max-w-[350px]  aspect-square flex items-center justify-center overflow-hidden">
          {qrcode}
        </div>
      </div>

      <button className="bg-purple-10 text-main-dark w-full max-w-[350px] md1:max-w-[300px] h-14 m-auto font-bold backdrop2 rounded-md border border-main-dark">
        Download QR Code
      </button>
    </main>
  );
};

export default QrCode;
