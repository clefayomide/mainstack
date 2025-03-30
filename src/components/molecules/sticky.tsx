import { BarlistFour, BarlistOne, BarlistThree, BarlistTwo } from "@/icons";
import React from "react";

export default function Sticky() {
  return (
    <aside className="w-[48px] h-[192px] p-[4px] rounded-[100px] fixed top-[310px] bg-white shadow-[0px_6px_12px_0px_#5C738314] flex items-center justify-center">
      <div className="h-full flex justify-center flex-col gap-[4px] ">
        <BarlistOne />
        <BarlistTwo />
        <BarlistThree />
        <BarlistFour />
      </div>
    </aside>
  );
}
