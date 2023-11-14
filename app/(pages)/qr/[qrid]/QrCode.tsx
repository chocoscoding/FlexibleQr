import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import useQrInfo from "@/app/hooks/useQrInfo";

const QrCode = () => {
  const { qr, mainInfo } = useQrInfo();
  const [url, setUrl] = useState("ssss");

  const downloadQRCode = (e: any) => {
    e.preventDefault();
    setUrl("");
  };

  const qrCodeEncoder = (e: any) => {
    setUrl(e.target.value);
  };

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={mainInfo.link}
      size={qr.size}
      bgColor={qr.bgColor}
      fgColor={qr.fgColor}
      level={"H"}
    />
  );
  return (
    <main className="w-full overflow-hidden flex flex-col items-center gap-6 pb-4">
      <div className="w-full overflow-hidden">
        <div className="p-4 border-2 border-main-dark rounded-md m-auto w-fit max-w-[350px] min-w-[300px]">{qrcode}</div>
      </div>

      <button className="bg-purple-10 text-main-dark w-[300px] h-14 m-auto font-bold backdrop2 rounded-md border border-main-dark">
        Download QR Code
      </button>
    </main>
  );
};

export default QrCode;
