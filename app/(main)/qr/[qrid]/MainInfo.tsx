"use client";
import React, { useContext, useState } from "react";
import useActiveSection from "@/app/hooks/useActiveSection";
import InputField from "@/app/components/InputField";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { QrContext } from "./Provider";

const MainInfo = () => {
  const { mainInfo, oldMainInfo, updateOldMainInfo, name, link, id, resetMain } = useContext(QrContext)!;

  const { activeSection } = useActiveSection();
  const [loading, setLoading] = useState(false);
  const { refresh } = useRouter();

  //run the UPDATE request
  const submit = async (e: any) => {
    e.preventDefault();
    toast.dismiss();
    setLoading(true);
    toast.loading("loading");
    try {
      if (mainInfo.name.length < 1) {
        toast.error("Name can't be empty");
        return;
      }
      const d = await fetch("/api/user/qr/updatemain", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, name: mainInfo.name, link: mainInfo.link }),
      });
      updateOldMainInfo();
      refresh();
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

  //to show cancel button
  const showCancel = JSON.stringify(mainInfo) === JSON.stringify(oldMainInfo);
  if (activeSection !== 1) return null;

  return (
    <div className="border-2 border-main-dark rounded p-4 bg-white">
      <form>
        <InputField
          name="QR Name"
          placeholder="QR code name"
          inputType="text"
          id="qrname"
          onChange={name}
          value={mainInfo.name}
        />
        <InputField
          name="Url (Must start with https://)"
          placeholder="https://example.com"
          inputType="text"
          id="url"
          onChange={link}
          value={mainInfo.link || ""}
        />

        <div className="flex gap-4 justify-end">
          {showCancel ? null : (
            <button
              onClick={resetMain}
              type="button"
              className="bg-white border border-main-dark rounded  min-w-[150px] max-w-[200px] h-[55px] hover:border-2">
              Cancel
            </button>
          )}
          <button
            className={`bg-main-light border border-main-dark rounded min-w-[150px] max-w-[200px] h-[55px] hover:border-2 ${
              loading ? "opacity-50" : ""
            }`}
            onClick={submit}
            disabled={loading}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MainInfo;
