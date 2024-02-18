import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <h1 className="text-9xl">404</h1>
      <h2 className="text-3xl mb-3">Page Not Found</h2>
      <Link href="/" className="text-blue-500">
        Go Home
      </Link>
    </div>
  );
}
