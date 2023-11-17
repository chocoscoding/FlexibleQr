"use client";
import { $Enums, Qr } from "@prisma/client";
import React, { FC, createContext, useEffect, useRef, useState } from "react";
import { ProviderContextType, ProviderType } from "./types";

const QrContext = createContext<ProviderContextType | undefined>(undefined);

const QrContextProvider: FC<ProviderType> = ({ children, initialValue }) => {
  const id = useRef(initialValue.id);
  const linkId = useRef(initialValue.linkId);
  //main info
  const [mainInfo, setMainInfo] = useState({
    name: initialValue.name,
    link: initialValue.link,
  });
  const [oldMainInfo, setOldMainInfo] = useState({
    name: initialValue.name,
    link: initialValue.link,
  });
  //qr
  const [oldQr, setOldQr] = useState({
    size: initialValue.qr_size,
    bgColor: initialValue.qr_bg,
    fgColor: initialValue.qr_fg,
  });
  const [qr, setQr] = useState({
    size: initialValue.qr_size,
    bgColor: initialValue.qr_bg,
    fgColor: initialValue.qr_fg,
  });
  //qr image settings
  const [qr_imageSettings, setQr_imageSettings] = useState({
    src: initialValue.qr_image_url,
    position: initialValue.qr_image_positioning,
    x: initialValue.qr_image_X,
    y: initialValue.qr_image_Y,
    height: initialValue.qr_image_height,
    width: initialValue.qr_image_width,
    excavate: initialValue.qr_image_excavate,
  });
  const [oldQr_imageSettings, setOldQr_imageSettings] = useState({
    src: initialValue.qr_image_url,
    position: initialValue.qr_image_positioning,
    x: initialValue.qr_image_X,
    y: initialValue.qr_image_Y,
    height: initialValue.qr_image_height,
    width: initialValue.qr_image_width,
    excavate: initialValue.qr_image_excavate,
  });

  //qr main info
  const updateOldMainInfo = () => setOldMainInfo(mainInfo);
  const name = (name: string) => {
    if (name.length > 70) {
      setMainInfo((prev) => ({ ...prev, name: name.slice(0, 70) }));
    } else {
      setMainInfo((prev) => ({ ...prev, name }));
    }
  };
  const link = (link: string) => setMainInfo((prev) => ({ ...prev, link }));

  //qr info functions
  const updateOldQrInfo = () => setOldQr(qr);
  const qr_size = (size: number) => {
    let num = size;
    if (size > 306) {
      num = 306;
    }
    setQr((prev) => ({ ...prev, size: num }));
  };
  const qr_bg = (bgColor: string) => setQr((prev) => ({ ...prev, bgColor }));
  const qr_fg = (fgColor: string) => setQr((prev) => ({ ...prev, fgColor }));

  //qr_imageSettings functions
  const updateQrImageSettings = () => setOldQr_imageSettings(qr_imageSettings);
  const qr_image_src = (src: string) => setQr_imageSettings((prev) => ({ ...prev, src }));
  const qr_image_positioning = (position: Qr["qr_image_positioning"]) => setQr_imageSettings((prev) => ({ ...prev, position }));
  const qr_image_width = (width: number) => setQr_imageSettings((prev) => ({ ...prev, width }));
  const qr_image_height = (height: number) => setQr_imageSettings((prev) => ({ ...prev, height }));
  const qr_image_excavate = (excavate: "YES" | "NO") => setQr_imageSettings((prev) => ({ ...prev, excavate }));
  const qr_image_X = (x: number) => setQr_imageSettings((prev) => ({ ...prev, x }));
  const qr_image_Y = (y: number) => setQr_imageSettings((prev) => ({ ...prev, y }));
  const resetMain = () => setMainInfo(oldMainInfo);


  const contextvalue: ProviderContextType = {
    mainInfo,
    oldMainInfo,
    oldQr,
    qr,
    qr_imageSettings,
    oldQr_imageSettings,
    updateOldMainInfo,
    name,
    link,
    updateOldQrInfo,
    qr_size,
    qr_bg,
    qr_fg,
    updateQrImageSettings,
    qr_image_src,
    qr_image_positioning,
    qr_image_width,
    qr_image_height,
    qr_image_excavate,
    qr_image_X,
    qr_image_Y,
    id: id.current,
    linkId: linkId.current,
    resetMain,
  };

  return <QrContext.Provider value={contextvalue}>{children}</QrContext.Provider>;
};
export { QrContext, QrContextProvider };
