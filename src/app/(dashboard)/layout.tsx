import "~/styles/globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Sidebar from "../_components/dashboard_components/sidebar/sidebar";

export const metadata = {
  title: "Talent",
  description: "Talent dashboard",
};

interface DashboardProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardProps) {
  return (
    <html lang="en">
      <body>
        <div className="flex w-full">
          <div>
            <Sidebar />
          </div>
          <div className="w-full bg-gray-100 px-4 py-2">
            <AntdRegistry>{children}</AntdRegistry>
          </div>
        </div>
      </body>
    </html>
  );
}
