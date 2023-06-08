import React from "react";

export default function BaseCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative grid sm:grid-cols-8">
      <div className="absolute -inset-4 rounded-md lg:block lg:group-hover:bg-slate-800/50"></div>
      {children}
    </div>
  );
}
