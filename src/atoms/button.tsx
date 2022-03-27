import { ReactNode } from "react";

export function ButtonOutlined({ children }: { children: ReactNode }) {
  // className="hover:border-transparent hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-cyan via-blue to-pink
  return (
    <span className="group border-gradient rounded-full inline-block relative overflow-hidden">
      <button className=" rounded-full bg-black px-14 py-4.5 text-3xl text-white">
        {children}
      </button>
      <span className="absolute top-0 left-0 z-10 group-hover:animate-wiggle origin-left -translate-x-full rounded-full  h-full w-full opacity-30 bg-gradient-to-r from-cyan via-blue to-pink"></span>
    </span>
  );
}
