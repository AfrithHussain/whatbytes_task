"use client";
import React from "react";
import Image from "next/image";
import Avatar from "../ui-components/Avatar";

function Navbar() {
  return (
    <div className="w-full border-b border-slate-200">
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-10 py-3 flex-nowrap overflow-x-auto">
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-2 shrink-0">
          <Image
            src="/WhatByte_logo.png"
            alt="WhatByte Logo"
            width={45}
            height={45}
            className="object-contain"
          />
          <h1 className="font-semibold text-lg sm:text-xl md:text-2xl">
            WhatBytes
          </h1>
        </div>

        {/* Right: Avatar + Name */}
        <div className="flex items-center gap-2 border border-slate-200 rounded-md px-3 py-2 shrink-0 hover:bg-neutral-100 cursor-pointer hover:transition-all active:scale-95">
          <Avatar />
          <p className="font-semibold text-sm sm:text-base hidden md:block">Rahil Siddique</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
