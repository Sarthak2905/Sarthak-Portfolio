import { Routes, Route } from "react-router-dom";

// Temporary placeholder pages — replaced with real pages in later phases
const Home = () => <div className="p-8 text-center">Home Page (public)</div>;
const NotFound = () => <div className="p-8 text-center">404 — Page Not Found</div>;
const AdminLogin = () => <div className="p-8 text-center">Admin Login (placeholder)</div>;
const AdminDashboard = () => <div className="p-8 text-center">Admin Dashboard (placeholder)</div>;

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />

            {/* Admin routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;