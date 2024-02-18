"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminDashboardPage() {
  // const { data: session, status }: { data: any; status: string } = useSession();
  // const router = useRouter();

  // useEffect(() => {
  //   if (status === "unauthenticated") {
  //     router.push("/login");
  //   } else {
  //     if (session !== undefined && session?.user.role !== "admin") {
  //       router.push("/");
  //     }
  //   }
  // }, [router, session?.role, status]);

  return (
    <div className="p-5 flex w-full justify-center border border-slate-500">
      <h1>Admin Dashboard Page</h1>
    </div>
  );
}
