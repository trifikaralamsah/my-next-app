import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  const { data: sesion, status }: { data: any; status: string } = useSession();

  return (
    <nav className="flex bg-gray-800 py-2 px-7 justify-between">
      <div className="flex items-center">
        <h1 className="text-white">Navbar</h1>
        <ul className="flex ml-5">
          <Link href={"/"}>
            <li
              className={`mr-3 ${
                pathName === "/" ? "text-blue-300" : "text-white"
              } cursor-pointer`}
            >
              Home
            </li>
          </Link>
          <Link href={"/about"}>
            <li
              className={`mr-3 ${
                pathName === "/about" ? "text-blue-300" : "text-white"
              } cursor-pointer`}
            >
              About
            </li>
          </Link>
          <Link href={"/about/profile"}>
            <li
              className={`mr-3 ${
                pathName === "/about/profile" ? "text-blue-300" : "text-white"
              } cursor-pointer`}
            >
              Profile
            </li>
          </Link>
        </ul>
      </div>
      <div>
        {status === "authenticated" ? (
          <div className="flex justify-items-center items-center gap-3">
            <Image
              width={50}
              height={50}
              src="/images/profile.png"
              alt="profile"
              className="rounded-full w-10 h-10"
              loading="lazy"
            />
            <h3 className="text-white">{sesion.user.fullname}</h3>
            <button
              className="bg-white px-3 rounded-md cursor-pointer"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="bg-white px-3 rounded-md cursor-pointer"
            onClick={() => signIn()}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
