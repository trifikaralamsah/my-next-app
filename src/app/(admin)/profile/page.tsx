"use client";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: sesion }: { data: any } = useSession();
  return (
    <div>
      <h1>Profile Page</h1>
      <h3>{sesion?.user?.email}</h3>
    </div>
  );
}
