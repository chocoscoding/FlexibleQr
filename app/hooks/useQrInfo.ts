import { Qr } from "@prisma/client";
import { create } from "zustand";

interface QrInfoType {
  qr: {
    size: number;
    bgColor: string;
    fgColor: string;
    includeMargin: boolean;
    imageSettings: {
      src?: string;
      x?: number;
      y?: number;
      height: number;
      width: number;
      excavate: boolean;
    };
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
  qr_image_url: (qr_image_url: string) => void;
  qr_image_width: (qr_image_width: number) => void;
  qr_image_height: (qr_image_height: number) => void;
  qr_image_excavate: (qr_image_excavate: boolean) => void;
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
    includeMargin: false,
    imageSettings: {
      src: "https://static.zpao.com/favicon.png",
      x: undefined,
      y: undefined,
      height: 24,
      width: 24,
      excavate: true,
    },
  },
  init: (data) => set((state) => ({ qr: data.qr, mainInfo: data.mainInfo })),
  name: (name) => set((state) => ({ mainInfo: { ...state.mainInfo, name } })),
  link: (link) => set((state) => ({ mainInfo: { ...state.mainInfo, link } })),

  qr_size: (qr_size) => set((state) => ({ qr: { ...state.qr, qr_size } })),
  qr_bg: (qr_bg) => set((state) => ({ qr: { ...state.qr, qr_bg } })),
  qr_fg: (qr_fg) => set((state) => ({ qr: { ...state.qr, qr_fg } })),
  qr_image_url: (qr_image_url) => set((state) => ({ qr: { ...state.qr, qr_image_url } })),
  qr_image_width: (qr_image_width) => set((state) => ({ qr: { ...state.qr, qr_image_width } })),
  qr_image_height: (qr_image_height) => set((state) => ({ qr: { ...state.qr, qr_image_height } })),
  qr_image_excavate: (qr_image_excavate) => set((state) => ({ qr: { ...state.qr, qr_image_excavate } })),
  qr_image_positioning: (qr_image_positioning) => set((state) => ({ qr: { ...state.qr, qr_image_positioning } })),
  qr_image_X: (qr_image_X) => set((state) => ({ qr: { ...state.qr, qr_image_X } })),
  qr_image_Y: (qr_image_Y) => set((state) => ({ qr: { ...state.qr, qr_image_Y } })),
}));

export default useQrInfo;
