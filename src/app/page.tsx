import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - My Next App",
  description: "Aplikasi Untuk Belajar Next JS",
  authors: [{ name: "Tri Fikar Alamsah", url: "http://localhost:3000" }],
  icons: {
    icon: "/images/favicon.png",
  },
  openGraph: {
    title: "Home - My Next App",
    description: "Aplikasi Untuk Belajar Next JS",
    url: "http://localhost:3000",
    siteName: "My Next App",
    locale: "id_ID",
    type: "website",
  },
};

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
