import { Suspense } from "react";
import Dashboard from "./dashboard";
import LaodingLayout from "@/layout/laodingLayout";

const Admin = () => {
  return (
    <Suspense fallback={<LaodingLayout>Loading Dashbord</LaodingLayout>}>
      <Dashboard />
    </Suspense>
  );
};

export default Admin;
