import PageContainer from "../components/common/PageContainer";

const Customers = () => {
    const mockCustomers = [
        { id: 1, name: "John Doe", email: "john@example.com", orders: 5, spent: 1250.00, status: "Active" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", orders: 2, spent: 450.50, status: "Active" },
        { id: 3, name: "Alice Brown", email: "alice@example.com", orders: 12, spent: 3400.00, status: "VIP" },
        { id: 4, name: "Bob Wilson", email: "bob@wilson.com", orders: 8, spent: 2100.00, status: "Active" },
    ];

    return (
        <PageContainer>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">Customer Network</h1>
                    <p className="text-gray-500 font-medium">Analyze and manage your user relationships</p>
                </div>
                <button className="px-6 py-3 bg-white border border-gray-100 text-gray-700 rounded-2xl font-bold shadow-sm hover:border-indigo-100 transition-all flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v5m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>
                    Download Directory
                </button>
            </div>

            <div className="glass shadow-premium rounded-[2.5rem] overflow-hidden border border-white/40">
                <table className="w-full text-left">
                    <thead className="bg-gray-50/50">
                        <tr>
                            <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Customer Profile</th>
                            <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Membership</th>
                            <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest text-right">Lifetime Value</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {mockCustomers.map((customer) => (
                            <tr key={customer.id} className="hover:bg-indigo-50/30 transition-colors group">
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
                                            {customer.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-800">{customer.name}</p>
                                            <p className="text-xs text-indigo-400 font-bold tracking-tight">{customer.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <div className="flex flex-col gap-1">
                                        <span className={`w-fit px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${customer.status === 'VIP' ? 'bg-amber-100 text-amber-600' : 'bg-indigo-50 text-indigo-400'
                                            }`}>
                                            {customer.status}
                                        </span>
                                        <p className="text-xs text-gray-400 font-bold">{customer.orders} Orders placed</p>
                                    </div>
                                </td>
                                <td className="px-8 py-6 text-right">
                                    <p className="text-lg font-black text-gray-800 tracking-tighter">${customer.spent.toFixed(2)}</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </PageContainer>
    );
};

export default Customers;
