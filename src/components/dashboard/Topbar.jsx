const Topbar = () => {
    return (
        <header className="flex items-center justify-between mb-8 sticky top-0 z-50 py-4 px-2 backdrop-blur-md bg-white/30 rounded-2xl">
            <div className="relative group">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-indigo-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                    placeholder="Search analytics..."
                    className="pl-10 pr-4 py-2.5 rounded-xl bg-white border border-transparent focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none w-80 shadow-sm transition-all text-sm font-medium"
                />
            </div>

            <div className="flex items-center gap-6">
                <button className="relative w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-gray-500 hover:text-indigo-500 transition-all shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>

                <div className="flex items-center gap-3 bg-white p-1 pr-4 rounded-2xl shadow-sm border border-gray-100">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 border border-white/20 shadow-md" />
                    <div className="text-right">
                        <p className="text-xs font-bold text-gray-800">Admin Panel</p>
                        <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-tighter">Online</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Topbar;
