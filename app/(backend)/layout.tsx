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
        <Sidebar />
        {children}
      </div>
    </>
  );
}
