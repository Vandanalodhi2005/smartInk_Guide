import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import "../styles/dashboard.css";

const DashboardLayout = () => {
    return (
        <div className="flex bg-[var(--bg)] text-[var(--text)] min-h-screen">
            <Sidebar />

            <main className="flex-1 p-6">
                <Topbar />
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
