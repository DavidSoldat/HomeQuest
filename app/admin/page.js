import { redirect } from "next/navigation";
import getSession from "../_lib/getSession";

export const metadata = {
  title: "Admin Dashboard",
};

async function AdminDashboard() {
  const session = await getSession();
  const user = session?.user;
  if (!user) redirect("/signin");

  if (user.role !== "admin") {
    return (
      <main className="mx-auto my-10">
        <p className="text-center">You are not authorized to view this page</p>
      </main>
    );
  }

  return (
    <div className="h-screen w-full px-4 py-8 md:max-w-6xl lg:mx-auto">
      <h1 className="text-primary-darkGray text-2xl font-semibold leading-tight">
        Admin Dashboard
      </h1>
      
    </div>
  );
}

export default AdminDashboard;
