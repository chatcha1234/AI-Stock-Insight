import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    TrendingUp,
    Newspaper,
    GitCompare,
    Info,
    LogOut
} from 'lucide-react';
import { clsx } from 'clsx';

const Sidebar = () => {
    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
        { icon: TrendingUp, label: 'Stock Detail', path: '/stock/AAPL' }, // Default to AAPL for now
        { icon: Newspaper, label: 'News & Sentiment', path: '/news' },
        { icon: GitCompare, label: 'Compare Stocks', path: '/compare' },
        { icon: Info, label: 'About', path: '/about' },
    ];

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-100 flex-col z-30 hidden md:flex">
            {/* Logo Area */}
            <div className="h-20 flex items-center px-8 border-b border-gray-50">
                <span className="text-2xl font-bold bg-linear-to-r from-[#6425FE] to-[#A6F7E2] bg-clip-text text-transparent">
                    FoxStocks
                </span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-8 px-4 space-y-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => clsx(
                            'flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors font-medium',
                            isActive
                                ? 'bg-[#F3F0FF] text-[#6425FE]'
                                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                        )}
                    >
                        <item.icon size={20} />
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            {/* User Area / Logout */}
            <div className="p-4 border-t border-gray-50">
                <button className="flex items-center space-x-3 text-gray-500 hover:text-red-500 w-full px-4 py-3 transition-colors">
                    <LogOut size={20} />
                    <span className="font-medium">Sign Out</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
