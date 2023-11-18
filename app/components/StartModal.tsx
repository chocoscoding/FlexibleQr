"use client";
import React, { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import useNewModalState from "@/app/hooks/useNewModalState";
import LoadingSvg from "./LoadingSvg";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const StartModal = () => {
  const { push, refresh } = useRouter();
  const { isOpen, close, open } = useNewModalState();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const submit = async () => {
    toast.dismiss();
    setLoading(true);
    try {
      if (name.length < 1) {
        toast.error(`Name can't be empty`);
        return;
      }
      const apicall = await fetch("/api/user/qr/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });
      const data = await apicall.json();
      push("/qr/" + data.linkId);
      refresh();
      close();
      setName("")
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong,try again");
    } finally {
      setLoading(false);
      toast.dismiss();
    }
  };

  if (!isOpen) return null;
  return (
    <main className="w-screen h-screen fixed top-0 left-0 backdrop-blur-sm bg-[#0000005e] z-[1000] flex">
      <div
        className="absolute top-0 left-0 w-full h-full z-[900]"
        onClick={close}
      />
      <div className="w-[95%] max-w-[400px] lg:max-w-[500px] min-h-[350px] lg:min-h-[400px] m-auto  border-2 border-main-dark z-[999] relative rounded-md bg-main-light  flex flex-col justify-start items-center">
        <div className="w-[60%] py-4 bg-white rounded-md shadow-md flex flex-col items-center my-6 aspect-video">
          <IoAddCircleOutline className="w-[36%] h-auto" />
          <h2 className="clamper2 ">Start creating a new QR</h2>
        </div>
        <input
          type="text"
          placeholder="Your QR Code name"
          className="w-[90%] h-12 outline outline-1 outline-gray-10 focus:outline-2 focus:outline-main-dark rounded px-2 text-xl"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className={`flex items-center justify-center font-semibold gap-2  max-w-[450px] md:max-w-[370px] lg:max-w-[450px]  border-main-dark hover:border-none rounded lg:h-14 h-10 outline-none mt-3 self-center bg-purple-10 $ text-main-dark w-[90%]  ${
            loading ? "bg-purple-20" : ""
          }
          ${name.length < 1 ? "border-none opacity-70 cursor-not-allowed" : "border-2 backdrop-light"}
          `}
          disabled={name.length < 1 || loading}
          onClick={submit}>
          {loading ? <LoadingSvg /> : "Create and Continue"}
        </button>
      </div>
    </main>
  );
};

export default StartModal;
