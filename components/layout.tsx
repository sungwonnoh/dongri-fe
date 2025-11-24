import type { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full  min-h-screen bg-white shadow-xl">
      <main className="w-full h-full">{children}</main>
    </div>
  );
};
