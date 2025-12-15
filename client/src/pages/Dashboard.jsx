import React from 'react';
import Sidebar from '../components/Sidebar';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import { ArrowUpRight, Zap, MoreHorizontal, Bell, Search, Moon } from 'lucide-react';

const mockChartData = [
    { name: 'Mon', value: 4000 },
    { name: 'Tue', value: 3000 },
    { name: 'Wed', value: 2000 },
    { name: 'Thu', value: 2780 },
    { name: 'Fri', value: 1890 },
    { name: 'Sat', value: 2390 },
    { name: 'Sun', value: 3490 },
];

const Dashboard = () => {

    return (
        <div className="min-h-screen bg-gray-50 flex">
            <Sidebar />

            <main className="flex-1 md:ml-64 p-8 transition-all duration-300">

                {/* 1. Top Bar */}
                <header className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                    <div className="relative w-full md:w-96">
                        <input
                            type="text"
                            placeholder="Search stock..."
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#6425FE] focus:ring-1 focus:ring-[#6425FE] transition-all bg-white shadow-xs"
                        />
                        <div className="absolute left-3 top-3.5 text-gray-400">
                            <Search size={20} />
                        </div>
                    </div>

                    <div className="flex items-center space-x-6">
                        <button className="p-2 text-gray-400 hover:text-[#6425FE] transition-colors">
                            <Moon size={24} />
                        </button>
                        <div className="flex items-center space-x-4">
                            <button className="p-2 text-gray-400 hover:text-[#6425FE] transition-colors relative">
                                <Bell size={24} />
                                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>
                            <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden border-2 border-white shadow-sm ring-2 ring-gray-50">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* 2. Market Overview Cards */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Market Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { symbol: 'AAPL', price: '193.45', change: '+1.2%', bg: 'bg-linear-to-br from-[#A6F7E2] to-[#64FCD8]' },
                            { symbol: 'TSLA', price: '243.12', change: '-0.5%', bg: 'bg-linear-to-br from-[#FFE5A5] to-[#FFD572]' },
                            { symbol: 'NVDA', price: '485.00', change: '+3.5%', bg: 'bg-linear-to-br from-[#E2D5FF] to-[#D0BCFF]' },
                        ].map((stock, i) => (
                            <div key={i} className={`p-6 rounded-3xl shadow-xs transition-transform hover:-translate-y-1 ${stock.bg}`}>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-12 h-12 bg-white/50 backdrop-blur-md rounded-2xl flex items-center justify-center font-bold text-gray-800 text-lg">
                                        {stock.symbol[0]}
                                    </div>
                                    <span className="bg-white/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gray-900">
                                        {stock.change}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">{stock.symbol}</h3>
                                    <p className="text-gray-800 font-medium text-xl">${stock.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. Main Stock Chart */}
                <section className="mb-10">
                    <div className="bg-white p-6 rounded-3xl shadow-xs border border-gray-100">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Portfolio Analytics</h3>
                                <div className="flex items-center space-x-2 mt-1">
                                    <span className="text-2xl font-bold text-[#6425FE]">$14,032.56</span>
                                    <span className="text-green-500 bg-green-50 px-2 py-0.5 rounded-lg text-xs font-bold">+5.63%</span>
                                </div>
                            </div>
                            <div className="flex space-x-1 bg-gray-50 p-1 rounded-xl">
                                {['1D', '1W', '1M', '1Y'].map(tf => (
                                    <button key={tf} className={`text-xs px-4 py-2 rounded-lg font-medium transition-all ${tf === '1M' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}>
                                        {tf}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="h-[350px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={mockChartData}>
                                    <defs>
                                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#6425FE" stopOpacity={0.2} />
                                            <stop offset="95%" stopColor="#6425FE" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} dy={10} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                        cursor={{ stroke: '#6425FE', strokeWidth: 2 }}
                                    />
                                    <Area type="monotone" dataKey="value" stroke="#6425FE" strokeWidth={4} fillOpacity={1} fill="url(#colorValue)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </section>

                {/* 4. AI Sentiment Summary */}
                <section className="mb-10">
                    <div className="bg-[#2C2C2C] p-8 rounded-3xl shadow-lg relative overflow-hidden text-white group hover:shadow-2xl transition-all duration-500">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                            <Zap size={200} />
                        </div>
                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-6">
                                    <span className="bg-[#6425FE] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center shadow-lg shadow-[#6425FE]/50">
                                        <Zap size={14} className="mr-2 fill-white" />
                                        AI Insight
                                    </span>
                                </div>
                                <h3 className="text-3xl font-bold mb-3">Market is <span className="text-[#A6F7E2]">Bullish</span></h3>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    Sentiment analysis indicates strong buy signals for Tech and Energy sectors.
                                </p>

                                <div className="flex space-x-6">
                                    <div>
                                        <p className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Confidence</p>
                                        <div className="flex items-baseline space-x-1">
                                            <span className="text-2xl font-bold text-white">87</span>
                                            <span className="text-sm text-[#A6F7E2]">%</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Trend</p>
                                        <div className="flex items-center space-x-2">
                                            <ArrowUpRight size={20} className="text-[#A6F7E2]" />
                                            <span className="text-lg font-bold text-white">Positive</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Latest News */}
                <section className="mb-10">
                    <div className="bg-white p-6 rounded-3xl shadow-xs border border-gray-100">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-xl text-gray-900">Latest News</h3>
                            <button className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50 text-gray-400">
                                <MoreHorizontal size={16} />
                            </button>
                        </div>
                        <div className="space-y-6 relative">
                            <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gray-100"></div>

                            {[
                                { title: "Fed signals potential rate cuts inside 2024", time: "2h ago", source: "Bloomberg", sentiment: "Positive" },
                                { title: "Tech stocks rally as inflation cools down", time: "4h ago", source: "Reuters", sentiment: "Positive" },
                                { title: "Oil prices drop amid global demand concerns", time: "6h ago", source: "CNBC", sentiment: "Negative" },
                            ].map((news, i) => (
                                <div key={i} className="group cursor-pointer relative pl-10">
                                    <div className={`absolute left-[13px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white shadow-md z-10 ${news.sentiment === 'Positive' ? 'bg-green-500' : news.sentiment === 'Negative' ? 'bg-red-500' : 'bg-gray-300'}`}></div>

                                    <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase block mb-1">{news.time} • {news.source}</span>
                                    <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#6425FE] transition-colors leading-relaxed line-clamp-2">
                                        {news.title}
                                    </h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default Dashboard;
