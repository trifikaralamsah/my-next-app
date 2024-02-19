"use client";

import { useState } from "react";

export default function AdminDashboardProductPage() {
  const [status, setStatus] = useState("");
  const handleRevalidate = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/revalidate?tag=products&secret=123456`,
      {
        method: "POST",
      }
    );
    if (!res.ok) {
      setStatus("Failed to revalidate");
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatus(response.message);
      }
    }
  };

  return (
    <div>
      <h1>{status}</h1>
      <button
        onClick={() => handleRevalidate()}
        className="bg-blue-500 text-white p-2 m-5 rounded-lg"
      >
        Revalidate
      </button>
    </div>
  );
}
