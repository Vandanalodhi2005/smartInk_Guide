const ChartCard = ({ title, children }) => {
    return (
        <div className="glass shadow-premium p-8 rounded-[2.5rem] hover-lift">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h4 className="text-lg font-bold text-gray-800 tracking-tight">{title}</h4>
                    <p className="text-xs text-gray-400 font-medium">Real-time data stream</p>
                </div>
                <div className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                    Last 30 days
                </div>
            </div>
            <div className="w-full h-[260px]">
                {children}
            </div>
        </div>
    );
};

export default ChartCard;
