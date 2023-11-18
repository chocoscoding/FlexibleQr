"use client";
import React, { FC, useState } from "react";
import { BsSearch } from "react-icons/bs";
import OneQrLink from "./OneQrLink";
import PrevNext from "./PrevNext";
import Empty from "./Empty";

interface ClientPropsType {
  list: {
    linkId: string;
    name: string;
    createdAt: Date;
  }[];
  count: number;
}
const amount = 10;
const Client: FC<ClientPropsType> = (props) => {
  const [lists, setLists] = useState(props.list);
  const [currentPage, setCurrentPage] = useState(1);

  const start = (currentPage - 1) * amount;
  const end = currentPage * amount;

  return (
    <main className="w-full min-h-page-height px-10 ba1:p-2 ">
      {/* search */}
      <section className="w-full my-4 flex justify-end">
        <div className="flex border border-main-dark overflow-hidden rounded min-w-[250px] max-w-[400px]">
          <input
            type="text"
            placeholder="search here by name"
            className="h-9 w-full  outline-none pl-2"
          />
          <button className="border rounded-sm h-full px-3 hover:bg-main-dark hover:text-main-light outline-none border-none">
            <BsSearch />
          </button>
        </div>
      </section>
      {/* main table */}
      <div className="flex justify-center w-full ">
        <section className="rounded border border-main-dark w-full max-w-screen-[1300px] overflow-hidden">
          <div className="flex  h-12 border-b border-main-dark last:border-none items-center md1:hidden">
            <p className="flex-[8] pl-8 font-semibold text-sm">Name</p>
            <p className="flex-[2] text-center font-semibold text-sm">Status</p>
            <p className="flex-[2] text-center font-semibold text-sm">Created At</p>
          </div>

          {lists.length < 1 ? (
            <Empty />
          ) : (
            lists.slice(start, end).map((ele, i) => (
              <OneQrLink
                name={ele.name}
                link={`qr/${ele.linkId}`}
                status="Active"
                createdAt={ele.createdAt}
                key={`oneqrlink_${i}`}
              />
            ))
          )}
        </section>
      </div>

      {/* prev and next */}
      <PrevNext
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={Math.ceil(props.count / amount)}
      />
    </main>
  );
};

export default Client;
