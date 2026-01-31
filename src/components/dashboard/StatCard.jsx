const StatCard = ({ title, value, change, icon: Icon, color = "indigo" }) => {
    const isPositive = change?.toString().startsWith('+') || (typeof change === 'number' && change > 0);
    const displayChange = typeof change === 'number' ? (change > 0 ? `+${change}%` : `${change}%`) : change;

    // Explicit mappings for Tailwind JIT
    const colorClasses = {
        indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', glow: 'bg-indigo-500/5', ring: 'ring-indigo-500/10' },
        emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', glow: 'bg-emerald-500/5', ring: 'ring-emerald-500/10' },
        amber: { bg: 'bg-amber-50', text: 'text-amber-600', glow: 'bg-amber-500/5', ring: 'ring-amber-500/10' },
        rose: { bg: 'bg-rose-50', text: 'text-rose-600', glow: 'bg-rose-500/5', ring: 'ring-rose-500/10' },
    };

    const theme = colorClasses[color] || colorClasses.indigo;

    return (
        <div className="glass shadow-premium p-6 rounded-[2rem] hover-lift group relative overflow-hidden border border-white/40">
            <div className={`absolute top-0 right-0 w-24 h-24 ${theme.glow} -mr-8 -mt-8 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`} />

            <div className="flex items-start justify-between relative z-10">
                <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{title}</p>
                    <h3 className="text-3xl font-black text-gray-900 tracking-tighter">{value}</h3>
                    {change && (
                        <div className="flex items-center gap-1 mt-2">
                            <span className={`flex items-center justify-center w-5 h-5 rounded-lg ${isPositive ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                                {isPositive ? (
                                    <svg className="w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 15l7-7 7 7" /></svg>
                                ) : (
                                    <svg className="w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7" /></svg>
                                )}
                            </span>
                            <span className={`text-xs font-black ${isPositive ? 'text-emerald-600' : 'text-red-600'}`}>
                                {displayChange}
                            </span>
                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">vs period</span>
                        </div>
                    )}
                </div>
                <div className={`w-12 h-12 rounded-2xl ${theme.bg} ${theme.text} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 ring-4 ${theme.ring}`}>
                    {typeof Icon === 'function' ? <Icon className="w-6 h-6" /> : Icon}
                </div>
            </div>
        </div>
    );
};

export default StatCard;
