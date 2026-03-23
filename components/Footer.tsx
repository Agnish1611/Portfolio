import React from "react";

const FlexSpacer = ({ className }: { className: string }) => (
  <div className={`bg-[#f9f9f9] dark:bg-zinc-900 flex-1 ${className}`}></div>
);

function Footer() {
  return (
    <footer className="w-screen flex gap-[1px] mt-[1px] h-[100px]">
      <FlexSpacer className="rounded-r-lg" />
      
      {/* Desktop Footer */}
      <div className="hidden lg:grid grid-cols-12 w-[95vw] lg:w-[90vw] xl:w-[1200px] max-w-[1200px] gap-[1px] flex-shrink-0 h-full">
        <div className="h-full col-span-1 rounded-lg bg-[#f9f9f9] dark:bg-zinc-900"></div>
        <div className="h-full col-span-1 rounded-lg bg-[#f9f9f9] dark:bg-zinc-900"></div>
        <div className="h-full col-span-8 rounded-lg bg-[#f9f9f9] dark:bg-zinc-900 flex justify-between items-center px-5 text-xs text-zinc-400 font-mono">
           <div>Copyright © <span className="text-red-500">Agnish</span></div>
           <div>[updated/September.2025]</div>
        </div>
        <div className="h-full col-span-1 rounded-lg bg-[#f9f9f9] dark:bg-zinc-900"></div>
        <div className="h-full col-span-1 rounded-lg bg-[#f9f9f9] dark:bg-zinc-900"></div>
      </div>

      {/* Mobile Footer */}
      <div className="lg:hidden w-[90vw] md:w-[600px] gap-[1px] flex flex-shrink-0 h-full">
         <div className="h-full w-full rounded-lg bg-[#f9f9f9] dark:bg-zinc-900 flex justify-between items-center px-5 text-xs text-zinc-400 font-mono">
            <div>Copyright © <span className="text-red-500">Agnish</span></div>
            <div>[updated/September.2025]</div>
         </div>
      </div>
      
      <FlexSpacer className="rounded-l-lg" />
    </footer>
  );
}

export default Footer;
