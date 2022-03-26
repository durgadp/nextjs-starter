import { ReactNode } from 'react';

export function ButtonOutlined({ children }: { children: ReactNode }) {
  // className="hover:border-transparent hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-cyan via-blue to-pink
  return (
    <div className="border-gradient rounded-full">
      <button className="rounded-full bg-black px-14 py-4.5 text-3xl text-white">
        {children}
      </button>
    </div>
  );
}
