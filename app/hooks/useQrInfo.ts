import { Qr } from "@prisma/client";
import { stat } from "fs";
import { create } from "zustand";

interface QrInfoType {
  qr: {
    size: number;
    bgColor: string;
    fgColor: string;
  };
  qr_imageSettings: {
    src: string;
    x?: number;
    y?: number;
    height: number;
    width: number;
    position: Qr["qr_image_positioning"];
    excavate: "YES" | "NO";
  };
  mainInfo: {
    name: string;
    link: string;
  };

  init: (data: { qr: QrInfoType["qr"]; mainInfo: QrInfoType["mainInfo"] }) => void;

  name: (name: string) => void;
  link: (link: string) => void;

  qr_size: (qr_size: number) => void;
  qr_bg: (qr_bg: string) => void;
  qr_fg: (qr_fg: string) => void;
  qr_image_src: (qr_image_src: string) => void;
  qr_image_width: (qr_image_width: number) => void;
  qr_image_height: (qr_image_height: number) => void;
  qr_image_excavate: (qr_image_excavate: "YES" | "NO") => void;
  qr_image_positioning: (qr_image_positioning: Qr["qr_image_positioning"]) => void;
  qr_image_X: (qr_image_X: number) => void;
  qr_image_Y: (qr_image_Y: number) => void;
}

const useQrInfo = create<QrInfoType>((set) => ({
  mainInfo: {
    name: "string",
    link: "https://flexibleqr.codes",
  },
  qr: {
    size: 260,
    bgColor: "#ffffff",
    fgColor: "#000000",
  },
  qr_imageSettings: {
    src: "https://static.zpao.com/favicon.png",
    position: "CENTERED",
    x: undefined,
    y: undefined,
    height: 24,
    width: 24,
    excavate: "NO",
  },

  init: (data) => set((state) => ({ qr: data.qr, mainInfo: data.mainInfo })),
  name: (name) => set((state) => ({ mainInfo: { ...state.mainInfo, name } })),
  link: (link) => set((state) => ({ mainInfo: { ...state.mainInfo, link } })),

  qr_size: (size) =>
    set((state) => {
      if (size > 306) return { qr: { ...state.qr, size: 306 } };
      return { qr: { ...state.qr, size } };
    }),
  qr_bg: (bgColor) => set((state) => ({ qr: { ...state.qr, bgColor } })),
  qr_fg: (fgColor) => set((state) => ({ qr: { ...state.qr, fgColor } })),

  //qr_imageSettings
  qr_image_src: (src) => set((state) => ({ qr_imageSettings: { ...state.qr_imageSettings, src } })),
  qr_image_positioning: (position) => set((state) => ({ qr_imageSettings: { ...state.qr_imageSettings, position } })),
  qr_image_width: (width) => set((state) => ({ qr_imageSettings: { ...state.qr_imageSettings, width } })),
  qr_image_height: (height) => set((state) => ({ qr_imageSettings: { ...state.qr_imageSettings, height } })),
  qr_image_excavate: (excavate) => set((state) => ({ qr_imageSettings: { ...state.qr_imageSettings, excavate } })),
  qr_image_X: (x) => set((state) => ({ qr_imageSettings: { ...state.qr_imageSettings, x } })),
  qr_image_Y: (y) => set((state) => ({ qr_imageSettings: { ...state.qr_imageSettings, y } })),
}));

export default useQrInfo;
