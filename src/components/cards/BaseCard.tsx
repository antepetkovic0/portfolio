import React from "react";

export default function BaseCard({ children }: { children: React.ReactNode }) {
  // TODO add div for on hover effect
  return <div className="relative grid sm:grid-cols-8">{children}</div>;
}
