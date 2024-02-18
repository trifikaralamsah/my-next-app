"use client";
import { useRouter } from "next/navigation";
import { MouseEventHandler, useRef, ReactNode } from "react";
export default function Modal({ children }: { children: ReactNode }) {
  const overlay = useRef(null);
  const router = useRouter();

  const close: MouseEventHandler = (event) => {
    event.preventDefault();
    console.log(event.target);
    console.log(overlay.current);
    if (event.target === overlay.current) {
      router.back();
    }
  };

  return (
    <div
      ref={overlay}
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-white rounded">
        {children}
      </div>
    </div>
  );
}
