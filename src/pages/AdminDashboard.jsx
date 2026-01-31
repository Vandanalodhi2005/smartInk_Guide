import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/dashboard/Sidebar';
import Topbar from '../components/dashboard/Topbar';
import StatCard from '../components/dashboard/StatCard';
import ChartCard from '../components/dashboard/ChartCard';
import TrafficChart from '../components/dashboard/TrafficChart';
import VisitorsPie from '../components/dashboard/VisitorsPie';
import OSChart from '../components/dashboard/OSChart';
import '../styles/dashboard.css';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // SVG Icons as components for use in StatCard
  const IconRevenue = (props) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  );
  const IconOrders = (props) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
  );
  const IconProducts = (props) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
  );
  const IconUsers = (props) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
  );

  const stats = [
    { title: 'Gross Revenue', value: '$45,678', change: 12, icon: IconRevenue, color: 'indigo' },
    { title: 'New Orders', value: '1,234', change: 8, icon: IconOrders, color: 'emerald' },
    { title: 'Inventory count', value: '156', change: -3, icon: IconProducts, color: 'amber' },
    { title: 'Total Customers', value: '892', change: 23, icon: IconUsers, color: 'indigo' }
  ];

  const recentOrders = [
    { id: '#1234', customer: 'John Doe', product: 'HP LaserJet Pro', amount: '$539', status: 'Completed' },
    { id: '#1235', customer: 'Jane Smith', product: 'Canon PIXMA', amount: '$199', status: 'Processing' },
    { id: '#1236', customer: 'Bob Johnson', product: 'Epson EcoTank', amount: '$179', status: 'Shipped' },
    { id: '#1237', customer: 'Alice Wong', product: 'Brother MFC-L2710', amount: '$249', status: 'Shipped' }
  ];

  return (
    <div className="flex bg-[#f8fafc] min-h-screen font-sans">
      <Sidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <Topbar />

        <div className="max-w-7xl mx-auto space-y-10">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-2 border-b border-gray-100">
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-2 h-8 bg-indigo-500 rounded-full inline-block"></span>
                Admin Intelligence
              </h1>
              <p className="text-slate-500 font-medium mt-1">
                Real-time commerce data for <span className="text-indigo-600 font-bold underline decoration-indigo-200">TechnoSky Official</span>
              </p>
            </div>
            <div className="flex items-center gap-3 bg-white p-2 rounded-2xl shadow-sm border border-slate-200/60">
              <div className="flex -space-x-3 pl-2">
                {[1, 2, 3].map(i => <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-slate-${i * 2}00 shadow-sm`} />)}
              </div>
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest px-2">3 users viewing now</p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-1 bg-slate-200/50 p-1.5 rounded-[1.25rem] w-fit">
            {['overview', 'products', 'orders', 'users'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-2.5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${activeTab === tab
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800 hover:bg-white/40'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'overview' && (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {/* Stats & Mini-Charts */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <StatCard key={index} {...stat} />
                ))}
              </div>

              {/* Main Visualizations */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <ChartCard title="Revenue Stream" subtitle="Cumulative transaction volume by day">
                    <div className="h-[400px] mt-4">
                      <TrafficChart />
                    </div>
                  </ChartCard>
                </div>
                <div>
                  <ChartCard title="User Demographics" subtitle="Visitor breakdown by continent">
                    <div className="h-[400px] mt-4">
                      <VisitorsPie />
                    </div>
                  </ChartCard>
                </div>
              </div>

              {/* Table & Sub-analytics */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10">
                <div className="lg:col-span-2">
                  <div className="glass shadow-premium rounded-[2.5rem] border border-white/40 overflow-hidden">
                    <div className="px-8 py-7 border-b border-slate-100 flex items-center justify-between bg-white/40">
                      <div>
                        <h3 className="text-xl font-black text-slate-800 tracking-tight">Enterprise Ledger</h3>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-0.5">Live order stream</p>
                      </div>
                      <button className="p-2.5 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors">
                        <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                      </button>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead className="bg-slate-50/80">
                          <tr>
                            <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">ID Reference</th>
                            <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Client</th>
                            <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Volume</th>
                            <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {recentOrders.map((order) => (
                            <tr key={order.id} className="hover:bg-indigo-500/[0.02] transition-colors group">
                              <td className="px-8 py-6">
                                <span className="font-black text-slate-900 tracking-tighter">{order.id}</span>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">{order.product}</p>
                              </td>
                              <td className="px-8 py-6">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-xs font-black text-slate-500">{order.customer.charAt(0)}</div>
                                  <span className="font-bold text-slate-700 tracking-tight">{order.customer}</span>
                                </div>
                              </td>
                              <td className="px-8 py-6">
                                <span className="text-indigo-600 font-black tracking-tight text-lg">{order.amount}</span>
                              </td>
                              <td className="px-8 py-6">
                                <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm ${order.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20' :
                                    order.status === 'Processing' ? 'bg-amber-500/10 text-amber-600 border border-amber-500/20' : 'bg-slate-500/10 text-slate-600 border border-slate-500/20'
                                  }`}>
                                  {order.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div>
                  <ChartCard title="System Context" subtitle="OS landscape analysis">
                    <div className="h-[320px] mt-6">
                      <OSChart />
                    </div>
                  </ChartCard>
                </div>
              </div>
            </div>
          )}

          {activeTab !== 'overview' && (
            <div className="glass shadow-premium rounded-[3rem] p-32 border border-white/40 text-center animate-in zoom-in duration-500">
              <div className="w-24 h-24 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-xl shadow-indigo-500/20">
                <svg className="w-12 h-12 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 20"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a2 2 0 012 2v6a2 2 0 11-4 0V7a2 2 0 012-2V4a2 2 0 114 0v1a2 2 0 012 2v6a2 2 0 11-4 0V7a2 2 0 012-2M5 11l6 6M11 7l6 6" /></svg>
              </div>
              <h2 className="text-3xl font-black text-slate-800 mb-3 capitalize">{activeTab} Interface</h2>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs max-w-sm mx-auto leading-loose">
                Module under architectural synchronization for v4 enterprise standards.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;

