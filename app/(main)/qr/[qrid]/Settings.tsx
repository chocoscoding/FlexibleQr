"use client";

import React, { FC, memo, useContext, useState } from "react";
import useActiveSection from "@/app/hooks/useActiveSection";
import InputField from "@/app/components/InputField";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { QrContext } from "./Provider";
const Settings = () => {
  const { mainInfo, id } = useContext(QrContext)!;
  const { activeSection } = useActiveSection();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const { push, refresh } = useRouter();

  //run the delete request
  const submit = async () => {
    toast.dismiss();
    if (mainInfo.name !== name) {
      toast.error(`Name doesn't match`);
      return;
    }
    setLoading(true);
    toast.loading("loading");
    try {
      if (name.length < 1) {
        toast.error(`Name can't be empty`);
        return;
      }
      const apicall = await fetch("/api/user/qr/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      push("/qrs");
      refresh();
      setName("");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong,try again");
    } finally {
      //timeout is a quick fix
      //would look at this later but loading stops. routing starts but still on the deleted page (ENV:DEV)
      setTimeout(() => {
        setLoading(false);
        toast.dismiss();
      }, 800);
    }
  };

  if (activeSection !== 3) return null;

  return (
    <div className="border-2 border-main-dark rounded p-4 bg-white">
      <p className="text-red-700 text-xl font-semibold h-10 border-b border-main-dark mb-3">Danger Zone</p>

      <InputField
        name=""
        placeholder="Enter QR name to delete"
        inputType="text"
        id="qrname"
        value={name}
        onChange={setName}
      />
      <p className="text-sm text-gray-10 my-4">{`Delete this QR (This action is irreversible)`}</p>
      <button
        className={`bg-red-10 hover:bg-red-500 border border-main-dark rounded  min-w-[150px] max-w-[200px] h-[55px] hover:border-2 ${
          loading ? "opacity-50" : ""
        }`}
        onClick={submit}
        disabled={loading}>
        Delete
      </button>
    </div>
  );
};

export default memo(Settings);
