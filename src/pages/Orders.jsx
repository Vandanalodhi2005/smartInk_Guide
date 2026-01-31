import PageContainer from "../components/common/PageContainer";

const Orders = () => {
    const mockOrders = [
        { id: "ORD-7291", customer: "John Doe", date: "30 May 2025", total: 450.00, status: "Delivered", method: "Credit Card" },
        { id: "ORD-8823", customer: "Jane Smith", date: "29 May 2025", total: 129.99, status: "Processing", method: "PayPal" },
        { id: "ORD-9901", customer: "Alice Brown", date: "28 May 2025", total: 89.00, status: "Shipped", method: "Apple Pay" },
        { id: "ORD-1154", customer: "Bob Wilson", date: "27 May 2025", total: 1250.00, status: "Pending", method: "Bank Transfer" },
    ];

    return (
        <PageContainer>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">Order Management</h1>
                    <p className="text-gray-500 font-medium">Fulfill and track customer shipments</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-6 py-3 bg-white border border-gray-100 text-gray-700 rounded-2xl font-bold shadow-sm hover:border-indigo-100 transition-all">
                        Export Report
                    </button>
                    <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-2xl font-bold shadow-lg shadow-indigo-500/20 transition-all">
                        Refresh Data
                    </button>
                </div>
            </div>

            <div className="glass shadow-premium rounded-[2.5rem] overflow-hidden border border-white/40">
                <table className="w-full text-left">
                    <thead className="bg-gray-50/50">
                        <tr>
                            <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Order Details</th>
                            <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Customer</th>
                            <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Amount</th>
                            <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {mockOrders.map((order) => (
                            <tr key={order.id} className="hover:bg-indigo-50/30 transition-colors group">
                                <td className="px-8 py-6">
                                    <p className="font-bold text-gray-800">{order.id}</p>
                                    <p className="text-xs text-gray-400 font-semibold">{order.date}</p>
                                </td>
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-100 to-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-600 border border-white">
                                            {order.customer.charAt(0)}
                                        </div>
                                        <p className="font-bold text-gray-700">{order.customer}</p>
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <p className="font-bold text-gray-800">${order.total.toFixed(2)}</p>
                                    <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest">{order.method}</p>
                                </td>
                                <td className="px-8 py-6">
                                    <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest ${order.status === 'Delivered' ? 'bg-emerald-100 text-emerald-600' :
                                            order.status === 'Shipped' ? 'bg-indigo-100 text-indigo-600' :
                                                order.status === 'Processing' ? 'bg-amber-100 text-amber-600' :
                                                    'bg-gray-100 text-gray-500'
                                        }`}>
                                        {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </PageContainer>
    );
};

export default Orders;
