import React, { FC } from "react";
interface OptionFieldType {
  name: string;
  id: string;
  options: string[];
  value: string;
  onChange: (e: any) => void;
}
const OptionField: FC<OptionFieldType> = ({ name, id, options, value, onChange }) => {
  return (
    <div className="border-b border-main-dark h-[3.7rem] mb-5 flex flex-col justify-between w-full">
      <label
        htmlFor={id}
        className=" text-gray-10 text-xs">
        {name}
      </label>
      <select
        onChange={(e) => onChange(e.target.value)}
        value={value}
        className="mb-2 outline-none border-none font-semibold placeholder-shown:font-normal"
        name={id}
        id={id}>
        {options.map((e, i) => (
          <option
            value={e}
            key={`${id}_${i}`}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OptionField;