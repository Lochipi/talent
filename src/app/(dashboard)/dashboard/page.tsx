import { redirect } from "next/navigation";
import Banner from "~/app/_components/dashboard_components/sidebar/Banner";
import { getServerAuthSession } from "~/server/auth";

const page = async () => {
  const session = await getServerAuthSession();

  if (!session) {
     redirect("/api/auth/signin")
  }

  return (
    <div className="min-h-screen">
      <div className="px-4 py-6">
        <h1>Dashboard</h1>
      </div>
      <div className="flex">
        <div className="flex-1/3">
          <Banner />
        </div>
        <div className="flex-2/3"></div>
      </div>
    </div>
  );
};

export default page;
