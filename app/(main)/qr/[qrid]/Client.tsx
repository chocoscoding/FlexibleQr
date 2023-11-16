"use client";

import SectionControl from "./SectionControl";
import MainInfo from "./MainInfo";
import QrStyle from "./QrStyle";
import Settings from "./Settings";
import QrCode from "./QrCode";
import TopNav from "./TopNav";
import { FC, useEffect } from "react";
import { Qr } from "@prisma/client";
import useQrInfo from "@/app/hooks/useQrInfo";

const Client: FC<Qr> = (props) => {
  const {
    id,
    userId,
    linkId,
    name,
    link,

    qr_size,
    qr_bg,
    qr_fg,
    qr_image_url,
    qr_image_width,
    qr_image_height,
    qr_image_excavate,
    qr_image_positioning,
    qr_image_X,
    qr_image_Y,
  } = props;
  const { init, mainInfo, qr_imageSettings, qr_image_X: qr_image_X_func, qr_image_Y: qr_image_Y_func } = useQrInfo();
  useEffect(() => {
    const data = {
      id,
      qr: {
        size: qr_size,
        bgColor: qr_bg,
        fgColor: qr_fg,
      },
      qr_imageSettings: {
        src: qr_image_url,
        x: qr_image_X,
        y: qr_image_Y,
        height: qr_image_height,
        width: qr_image_width,
        position: qr_image_positioning,
        excavate: qr_image_excavate,
      },
      mainInfo: {
        name,
        link,
      },
      mainInfoOld: {
        name,
        link,
      },
    };
    init(data);
  }, []);

  useEffect(() => {
    if (qr_imageSettings.position === "CENTERED") {
      console.log("ran");
      qr_image_X_func(undefined);
      qr_image_Y_func(undefined);
    }
  }, [qr_imageSettings.position]);
  return (
    <main className="w-full min-h-page-height m-auto px-10 lg1:px-7 md1:!px-2">
      {/* top nav */}
      <TopNav name={mainInfo.name} />
      <section className="ml-16 lg3:ml-0">
        <SectionControl />

        <main className="flex flex-wrap justify-between mt-8">
          {/* main */}
          <div className="w-8/12 md1:w-full">
            <MainInfo />
            <QrStyle />
            <Settings/>
          </div>
          {/* qr code */}
          <div className="w-[30%] md1:w-full">
            <QrCode id={linkId} />
          </div>
        </main>
      </section>
    </main>
  );
};

export default Client;
