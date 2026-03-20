import React from "react";

const FlexSpacer = ({ className }: { className: string }) => (
  <div className={`bg-[#f9f9f9] dark:bg-zinc-900 flex-1 ${className}`}></div>
);

function Footer() {
  return (
    <div className="w-screen flex gap-[1px] mt-[1px] h-[100px]">
      <FlexSpacer className="rounded-r-lg" />
      <div className="h-full w-[100px] rounded-lg bg-[#f9f9f9] dark:bg-zinc-900"></div>
      <div className="h-full w-[99px] rounded-lg bg-[#f9f9f9] dark:bg-zinc-900"></div>
      <div className="h-full rounded-lg bg-[#f9f9f9] dark:bg-zinc-900 w-[calc(8*(1000px-9px)/10+7px)] flex justify-between items-center px-5 text-xs text-zinc-400 font-mono">
         <div>Copyright © <span className="text-red-500">Agnish</span></div>
         <div>[updated/September.2025]</div>
      </div>
      <div className="h-full w-[99px] rounded-lg bg-[#f9f9f9] dark:bg-zinc-900"></div>
      <div className="h-full w-[100px] rounded-lg bg-[#f9f9f9] dark:bg-zinc-900"></div>
      <FlexSpacer className="rounded-l-lg" />
    </div>
  );
}

export default Footer;
