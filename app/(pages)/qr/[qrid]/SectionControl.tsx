import useActiveSection from "@/app/hooks/useActiveSection";
import React from "react";

const SectionControl = () => {
  const sectionButton = `rounded text-center px-3 py-2 ba1:px-2 ba1:py-1 text-[clamp(clamp(0.7rem,0.625rem_+_0.4vw,1rem))] flex-shrink-0 outline-none`;
  const { activeSection, setSection } = useActiveSection();

  return (
    <section className="flex gap-3 overflow-x-auto py-5">
      <button
        className={`${
          activeSection === 1 ? "border border-main-dark bg-main-dark text-main-light" : "border border-main-dark text-main-dark backdrop1"
        }  ${sectionButton}`}
        onClick={() => setSection(1)}>
        Main Info
      </button>
      <button
        className={`${
          activeSection === 2 ? "border border-main-dark bg-main-dark text-main-light" : "border border-main-dark text-main-dark backdrop1"
        } ${sectionButton} `}
        onClick={() => setSection(2)}>
        QR Style
      </button>
      <button
        className={`${
          activeSection === 3 ? "border border-main-dark bg-main-dark text-main-light" : "border border-main-dark text-main-dark backdrop1"
        } ${sectionButton} `}
        onClick={() => setSection(3)}>
        Settings
      </button>
    </section>
  );
};

export default SectionControl;
