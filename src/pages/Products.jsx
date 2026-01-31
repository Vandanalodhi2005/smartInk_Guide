import PageContainer from "../components/common/PageContainer";

const Products = () => {
    const mockProducts = [
        { id: 1, name: "HP LaserJet Pro M404", stock: 45, price: 289.99, category: "Laser Printer" },
        { id: 2, name: "Canon Pixma G3000", stock: 12, price: 159.99, category: "Inkjet Printer" },
        { id: 3, name: "Epson EcoTank L3210", stock: 28, price: 189.99, category: "EcoTank" },
        { id: 4, name: "Brother HL-L2350DW", stock: 5, price: 145.00, category: "Compact Laser" },
    ];

    return (
        <PageContainer>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">Product Inventory</h1>
                    <p className="text-gray-500 font-medium">Manage and track your printer catalog</p>
                </div>
                <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-2xl font-bold shadow-lg shadow-indigo-500/20 transition-all flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                    Add Product
                </button>
            </div>

            <div className="glass shadow-premium rounded-[2.5rem] overflow-hidden border border-white/40">
                <table className="w-full text-left">
                    <thead className="bg-gray-50/50">
                        <tr>
                            <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Product Info</th>
                            <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
                            <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Price</th>
                            <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {mockProducts.map((product) => (
                            <tr key={product.id} className="hover:bg-indigo-50/30 transition-colors group">
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition-transform">🖨️</div>
                                        <div>
                                            <p className="font-bold text-gray-800">{product.name}</p>
                                            <p className="text-xs text-gray-400 font-semibold uppercase">{product.category}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${product.stock > 10 ? 'bg-emerald-500' : 'bg-red-500'} animate-pulse`} />
                                        <span className={`text-sm font-bold ${product.stock > 10 ? 'text-emerald-600' : 'text-red-600'}`}>
                                            {product.stock} in stock
                                        </span>
                                    </div>
                                </td>
                                <td className="px-8 py-6 font-bold text-gray-800">${product.price.toFixed(2)}</td>
                                <td className="px-8 py-6 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="p-2.5 rounded-xl bg-white border border-gray-100 text-gray-400 hover:text-indigo-500 hover:border-indigo-100 transition-all shadow-sm">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                        </button>
                                        <button className="p-2.5 rounded-xl bg-white border border-gray-100 text-gray-400 hover:text-red-500 hover:border-red-100 transition-all shadow-sm">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </PageContainer>
    );
};

export default Products;
