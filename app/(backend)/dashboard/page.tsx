import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

const Admin = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/auth");
  }
  return (
    <div className="border">
      <h1 className="text-2xl md:text-3xl font-bold text-zinc-700 text-center">
        Admin Panel
      </h1>
    </div>
  );
};

export default Admin;
