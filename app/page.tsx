import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-screen h-[6rem] flex gap-[1px] mt-[1px]">
        <div className="bg-[#f9f9f9] rounded-r-lg flex-1 h-full"></div>
        
        {/* Fixed 100px divs for large screens only */}
        <div className="hidden lg:block bg-[#f9f9f9] w-[100px] rounded-lg h-full"></div>
        
        <div className="bg-[#f9f9f9] rounded-lg w-[350px] lg:w-[1000px] h-full flex-shrink-0 flex justify-between lg:justify-center px-5 items-center"></div>
        
        {/* Fixed 100px divs for large screens only */}
        <div className="hidden lg:block bg-[#f9f9f9] w-[100px] rounded-lg h-full"></div>
        
        <div className="bg-[#f9f9f9] rounded-l-lg flex-1 h-full"></div>
      </div>
    </>
  );
}
