import { ButtonOutlined } from "@/atoms";

export function IncreaseSales(){
  return(
    <div className=" mt-20">
      <div className=" border-gradient max-w-7xl rounded-3xl mx-auto">
        <div className=" rounded-3xl px-3 py-2 md:px-32 md:py-24 flex flex-col gap-3 text-white bg-gradient-to-b md:bg-gradient-to-r from-black via-black to-[#00f0ff]">
          <h1 className=" font-bold text-7xl text-transparent bg-clip-text bg-gradient-to-b from-cyan via-blue to-pink md:text-gradient">Increase your sales by analyzing your colleced data!</h1>
          <span className=" text-xl font-normal opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit est ac nulla faucibus proin nisl augue. Vestibulum sem scelerisque suspendisse praesent pretium non. At mattis bibendum ut sed praesent. Nam at id elementum gravida.</span>
          <div><ButtonOutlined><span>Learn More...</span></ButtonOutlined></div>
        </div>
      </div>
    </div>
  )
}