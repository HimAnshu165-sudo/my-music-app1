import React from "react";
import { LanguageIcon } from "@heroicons/react/16/solid";
const SideBaar = () => {
  return (
    <>
      <div className="hidden lg:flex flex-col text-white h-[80%]lg:w-[35%] bg-[#1b1a1a] rounded-lg p-7 gap-7">
        <h1 className="text-3xl font-medium">Library</h1>
        <div className="flex flex-col gap-2 mb-6">
          <p className="font-semibold text-2xl">Create Your First Library</p>
          <p>It's easy we'll help you</p>
          <button className="bg-white text-black mt-7 w-50 p-1 rounded-2xl font-medium">
            Create Playlist
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-2xl">Browse The Songs</p>
          <p>It's easy we'll help you</p>
          <button className="bg-white text-black mt-7 w-50 p-1 rounded-4xl font-medium flex items-center justify-center gap-6">
            <LanguageIcon className="h-5 w-5"/>
            <p>English</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBaar;
