"use client";
import React, { FC } from "react";
interface RangeFieldType {
  name: string;
  placeholder: string;
  id: string;
  disabled?: boolean;
  min: number;
  max: number;
  value: number;
  onchange: (e: number) => void;
}
const RangeField: FC<RangeFieldType> = ({ name, placeholder, onchange, value, id, disabled, min, max }) => {
  return (
    <div
      className={`border-none border-main-dark h-[3.7rem] mb-5 flex flex-col justify-between w-full ${
        disabled ? "opacity-60 cursor-not-allowed" : ""
      }`}>
      <label
        htmlFor={id}
        className={`text-gray-10 text-xs ${disabled ? " cursor-not-allowed" : ""}`}>
        {name}
        <span className="text-main-dark ml-1 font-semibold">{`(${value})`}</span>
      </label>
      <input
        disabled={disabled}
        placeholder={placeholder}
        className={`mb-2 outline-none border-none font-semibold placeholder-shown:font-normal ${disabled ? " cursor-not-allowed" : ""}`}
        type="range"
        min={min}
        value={value}
        onChange={(e) => onchange(~~e.target.value)}
        max={max}
        id={id}
      />
    </div>
  );
};

export default RangeField;
