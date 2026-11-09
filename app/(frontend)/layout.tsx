import Navbar from "@/components/front/general/navbar/navbar";
import Footer from "@/components/front/general/footer/footer";
import SearchModel from "@/components/model/searchModel";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col">
      <Navbar />
      <SearchModel />
      <div className="w-full flex items-center justify-center px-5 md:px-20 mx-auto min-h-[calc(100vh-84px)] pt-16">
        {children}
      </div>
      <Footer />
    </main>
  );
}
