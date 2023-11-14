import React, { FC } from "react";
interface InputFieldType {
  name: string;
  placeholder: string;
  inputType: HTMLInputElement["type"];
  id: string;
  disabled?: boolean;
}
const InputField: FC<InputFieldType> = ({ name, placeholder, inputType, id, disabled }) => {
  return (
    <div
      className={`border-b border-main-dark h-[3.7rem] mb-5 flex flex-col justify-between w-full ${
        disabled ? "opacity-60 cursor-not-allowed" : ""
      }`}>
      <label
        htmlFor={id}
        className={` text-gray-10 text-xs ${disabled ? " cursor-not-allowed" : ""}`}>
        {name}
      </label>
      <input
        disabled={disabled}
        placeholder={placeholder}
        className={`mb-2 outline-none border-none font-semibold placeholder-shown:font-normal ${disabled ? " cursor-not-allowed" : ""}`}
        type={inputType}
        id={id}
      />
    </div>
  );
};

export default InputField;
