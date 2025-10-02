import { Outlet } from "react-router-dom";
import AppSidebar from "../components/AppSidebar";

function AppLayout() {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-[340px_1fr]">
      <AppSidebar />
      <main className="h-screen overflow-y-auto bg-white">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
