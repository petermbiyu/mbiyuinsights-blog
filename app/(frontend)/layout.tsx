import Navbar from "@/components/front/general/navbar/navbar";
import Footer from "@/components/front/general/footer/footer";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="min-h-[calc(100vh-90px)] pt-16">{children}</div>
      <Footer />
    </main>
  );
}
