import { $Enums, Qr } from "@prisma/client";

interface ProviderType {
  children: React.ReactNode;
  initialValue: Qr;
}
interface ProviderContextType {
  id: string;
  linkId: string;
  oldQr: {
    size: number;
    bgColor: string;
    fgColor: string;
  };
  qr: {
    size: number;
    bgColor: string;
    fgColor: string;
  };
  oldQr_imageSettings: {
    src: string;
    position: $Enums.ImagePosition;
    x: number;
    y: number;
    height: number;
    width: number;
    excavate: $Enums.Excavate;
  };
  qr_imageSettings: {
    src: string;
    position: $Enums.ImagePosition;
    x: number;
    y: number;
    height: number;
    width: number;
    excavate: $Enums.Excavate;
  };
  mainInfo: {
    name: string;
    link: string | null;
  };
  oldMainInfo: {
    name: string;
    link: string | null;
  };

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
  updateOldMainInfo: () => void;
  updateOldQrInfo: () => void;
  updateQrImageSettings: () => void;
  resetMain: () => void;
}
