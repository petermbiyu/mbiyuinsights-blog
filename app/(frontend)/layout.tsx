import Navbar from "@/components/front/general/navbar/navbar";
import Footer from "@/components/front/general/footer/footer";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="flex px-5 md:px-20 mx-auto min-h-[calc(100vh-84px)] pt-16">
        {children}
      </div>
      <Footer />
    </main>
  );
}
