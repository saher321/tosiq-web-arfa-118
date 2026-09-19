import React, { useState } from "react";
import {
  LayoutDashboard,
  CheckSquare,
  Menu,
  X,
} from "lucide-react";
import useAuth from "../store/useAuth";
import { useNavigate } from "react-router";
import { APP_NAME_LC, APP_NAME_UC } from "../utils/strings";
import toast from "react-hot-toast";

const navigation = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Tasks",
    href: "/admin/tasks",
    icon: CheckSquare,
  },
];

const UserLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const logout = useAuth(state => state.logout)
    const user = useAuth(state => state.user)
    const isAuthenticated = useAuth(state => state.isAuthenticated)
    const navigate = useNavigate()
    const handleLogout = () => {
        toast.success("Account has been logged out")
        logout()
        navigate('/auth/login', { replace: true })
    }
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
        {/* Mobile overlay */}
        {sidebarOpen && (
            <div
            className="fixed inset-0 z-40 bg-black/30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
            />
        )}

        {/* Sidebar */}
        <aside
            className={`
            fixed inset-y-0 left-0 z-50 flex w-64 flex-col
            border-r border-gray-200 bg-white
            transition-transform duration-300
            lg:translate-x-0
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            `}
        >
            {/* Logo */}
            <div className="flex h-20 items-center justify-between border-b border-gray-100 px-6">
            <a href="/admin" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-600 text-lg font-bold text-white">
                    {APP_NAME_LC}
                </div>

                <div>
                <h1 className="text-lg font-bold tracking-tight">
                    {APP_NAME_UC}
                </h1>
                <p className="text-xs text-gray-400">Management System</p>
                </div>
            </a>

            <button
                onClick={() => setSidebarOpen(false)}
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 lg:hidden"
            >
                <X size={20} />
            </button>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto px-4 py-6">
            <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                Main Menu
            </p>

            <nav className="space-y-1">
                {navigation.map((item, index) => {
                const Icon = item.icon;
                const active = index === 0;

                return (
                    <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`
                        group flex items-center gap-3 rounded-xl px-3 py-3
                        text-sm font-medium transition
                        ${
                        active
                            ? "bg-amber-50 text-amber-600"
                            : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                        }
                    `}
                    >
                    <Icon
                        size={19}
                        className={
                        active
                            ? "text-amber-600"
                            : "text-gray-400 group-hover:text-gray-700"
                        }
                    />

                        <span>{item.name}</span>
                    </a>
                );
                })}
            </nav>
            
            </div>

            {/* User */}
            <div className="border-t border-gray-100 p-4">
            <div className="flex items-center gap-3 rounded-xl p-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold">
                AM
                </div>

                <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">
                    Employee
                </p>
                <p className="truncate text-xs text-gray-400">
                    
                    <button className='hover:shadow-md bg-amber-600 text-amber-50 py-1 px-3 rounded cursor-pointer' onClick={handleLogout}>Logout</button>
                </p>
                </div>
            </div>
            </div>
        </aside>

        {/* Main area */}
        <div className="lg:pl-64">
            {/* Header */}
            <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-gray-200 bg-white/95 px-4 backdrop-blur sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
                <button
                onClick={() => setSidebarOpen(true)}
                className="rounded-xl p-2 text-gray-500 hover:bg-gray-100 lg:hidden"
                >
                <Menu size={22} />
                </button>

                <div>
                <h2 className="text-lg font-bold sm:text-xl">
                    Dashboard
                </h2>
                <p className="hidden text-xs text-gray-400 sm:block">
                    Here's what's happening with your workspace today.
                </p>
                </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex py-1 px-3 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">
                    {user?.email}
                </div>
                {/* Profile */}
                <div className="hidden items-center gap-2 border-l border-gray-200 pl-4 sm:flex">
                    { user?.role == "pm" ? 
                    <span className="text-xs rounded-full py-1 px-2 font-bold bg-green-50 text-green-600">Project Manager</span> :
                    <span className="text-xs rounded-full py-1 px-2 font-bold bg-gray-100 text-gray-500">Employee</span>
                    }
                </div>
            </div>
            </header>

            {/* Content */}
            <main className="min-h-[calc(100vh-80px)] p-4 sm:p-6 lg:p-8">
            {children}
            </main>
        </div>
        </div>
    );
};

export default UserLayout;
