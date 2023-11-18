import { create } from "zustand";

interface useNavType {
  isOpen: boolean;
  toggle: (value: boolean) => void;
}

const useNav = create<useNavType>((set) => ({
  isOpen: false,
  toggle: (value: boolean) => set(() => ({ isOpen: value })),
}));

export default useNav;
