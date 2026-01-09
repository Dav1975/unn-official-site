import React, { ReactNode } from "react";
import AcademicHeader  from "../AcademicHeader";
import AcademicFooter  from "../AcademicFooter";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <AcademicHeader />
      <main>{children}</main>
      <AcademicFooter />
    </div>
  );
}