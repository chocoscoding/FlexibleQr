import { create } from "zustand";

interface NewModalStateStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const useNewModalState = create<NewModalStateStore>((set) => ({
  isOpen: false,
  open: () => set((state) => ({ isOpen: true })),
  close: () => set((state) => ({ isOpen: false })),
}));

export default useNewModalState