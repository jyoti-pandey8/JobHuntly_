// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useRouter } from "next/navigation";

export function MainLayout({ children }) {
    return (
      <>
      
        <main className="max-w-[100vw] flex-1 overflow-y-auto ">
          {children}
        </main>
      </>
    );
  }