import MobSidebar from "@/components/admin/mobileSIdeBar";
import Navbar from "@/components/admin/navbar";
import Sidebar from "@/components/admin/sidebar";

export default function LayoutAdmin({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <Navbar />
      <div className="flex items-stretch flex-row mt-16 min-h-[calc(100vh-110px)] sm:min-h-[calc(100vh-65px)]">
        <div className="hidden md:block w-1/5 flex-stretch  flex-1 bg-zinc-500">
          <Sidebar />
        </div>
        <div className="md:hidden fixed bottom-0 bg-zinc-500 w-full">
          <MobSidebar />
        </div>
        <div className="md:w-4/5 w-full h-full">{children}</div>
      </div>
    </div>
  );
}
