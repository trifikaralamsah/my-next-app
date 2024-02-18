"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <h1 className="font-bold text-3xl mt-2">Oops! Something went wrong</h1>
      <p>Please try again later</p>
      <div className="flex gap-5">
        <button
          className="mt-5 bg-cyan-300 p-2 rounded-md border border-blue-700"
          onClick={() => router.push("/")}
        >
          Back To Home
        </button>
        <button
          className="mt-5 bg-cyan-300 p-2 rounded-md border border-blue-700"
          onClick={() => reset()}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
