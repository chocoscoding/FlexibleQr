import { create } from "zustand";
type sectionType = 1 | 2 | 3;
interface ActiveSectionType {
  activeSection: sectionType;
  setSection: (arg0: sectionType) => void;
}

const useActiveSection = create<ActiveSectionType>((set) => ({
  activeSection: 1,
  setSection: (section) => set((state) => ({ activeSection: section })),
}));

export default useActiveSection;