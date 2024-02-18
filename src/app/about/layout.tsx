import Link from "next/link";
import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <nav className="fixed right-0 top-10 z-10 h-screen w-60 bg-gray-800">
        <ul className="text-white p-5">
          <li>Home</li>
          <li>About</li>
          <li>Profile</li>
          <Link href="/dashboard">
            <li>Dashboard</li>
          </Link>
          <Link href="/product">
            <li>Product</li>
          </Link>
        </ul>
      </nav>
      <div>{children}</div>
    </React.Fragment>
  );
}
