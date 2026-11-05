import Navbar from "@/components/admin/navbar";
import Sidebar from "@/components/admin/sidebar";

export default function LayoutAdmin({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex items-stretch flex-row pt-16">
          <div className="w-1/5 flex-stretch flex-1 bg-zinc-500">
            <Sidebar />
          </div>
          <div className="w-4/5 min-h-[calc(100vh-65px)]">{children}</div>
        </div>
      </div>
    </>
  );
}
