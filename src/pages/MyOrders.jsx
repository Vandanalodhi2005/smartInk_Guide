import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { listMyOrders } from '../redux/actions/orderActions';
import PageContainer from "../components/common/PageContainer";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { FiPackage, FiTruck, FiCheckCircle, FiClock, FiAlertCircle } from "react-icons/fi";

const MyOrders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading, error, orders } = orderListMy;

  useEffect(() => {
      if (!userInfo) {
          navigate('/signin');
      } else {
          dispatch(listMyOrders());
      }
  }, [dispatch, navigate, userInfo]);

  return (
    <>
      <Navbar />
      <div className="bg-slate-50 min-h-screen pt-24 pb-12">
        <PageContainer>
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-extrabold text-slate-900">My Orders</h1>
            <p className="text-slate-500 mt-2 text-lg">
              Track your recent purchases and order progress
            </p>
          </div>

          {loading ? (
             <div className="flex flex-col items-center justify-center py-20">
                 <div className="w-12 h-12 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                 <p className="text-slate-500 font-medium">Loading your orders...</p>
             </div>
          ) : error ? (
             <div className="bg-red-50 border border-red-100 rounded-2xl p-6 text-center">
                 <FiAlertCircle className="mx-auto text-red-500 text-3xl mb-2" />
                 <h3 className="text-red-800 font-bold text-lg mb-1">Error Loading Orders</h3>
                 <p className="text-red-600">{error}</p>
                 <button 
                    onClick={() => dispatch(listMyOrders())}
                    className="mt-4 px-6 py-2 bg-white border border-red-200 text-red-600 font-bold rounded-lg hover:bg-red-50 transition"
                 >
                    Try Again
                 </button>
             </div>
          ) : orders && orders.length === 0 ? (
             <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-12 text-center shadow-sm">
                 <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                     <FiPackage className="text-slate-400 text-3xl sm:text-4xl" />
                 </div>
                 <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">No orders found</h2>
                 <p className="text-slate-500 mb-6 sm:mb-8 max-w-md mx-auto text-sm sm:text-base">Looks like you haven't bought anything from us yet. Browse our products and find something you love!</p>
                 <Link 
                    to="/printers" 
                    className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-200 text-sm sm:text-base"
                 >
                    Start Shopping
                 </Link>
             </div>
          ) : (
            /* Orders List */
            <div className="space-y-6">
              {orders.map((order) => (
                <div
                  key={order._id}
                  className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all overflow-hidden group"
                >
                  {/* Order Header */}
                  <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Order Placed</p>
                          <p className="text-sm font-bold text-slate-700">
                             {new Date(order.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Total</p>
                          <p className="text-sm font-bold text-slate-900">${order.totalPrice.toFixed(2)}</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Order #</p>
                          <p className="text-sm font-mono text-slate-600">{order._id.substring(order._id.length - 8).toUpperCase()}</p>
                        </div>
                    </div>

                    <div className="mt-4 sm:mt-0 flex items-center gap-3">
                         {/* Status Badge */}
                         {order.status === 'Failed' ? (
                             <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold uppercase tracking-wide">
                                <FiAlertCircle /> Failed
                             </span>
                         ) : order.isDelivered ? (
                             <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wide">
                                <FiCheckCircle /> Delivered
                             </span>
                         ) : order.isPaid ? (
                             <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wide">
                                <FiTruck /> Processing
                             </span>
                         ) : (
                             <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold uppercase tracking-wide">
                                <FiClock /> Pending
                             </span>
                         )}
                         
                         {/* Details Button */}
                         <Link 
                            to={`/order/${order._id}`}
                            className="hidden sm:inline-block px-4 py-2 bg-white border border-slate-200 text-slate-600 text-sm font-bold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
                         >
                            View Details
                         </Link>
                    </div>
                  </div>

                  {/* Order Body */}
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                       {/* Preview Items (First 2) */}
                       <div className="flex-1 space-y-4">
                           {order.orderItems.slice(0, 2).map((item, index) => (
                               <div key={index} className="flex items-start gap-4">
                                   <div className="w-16 h-16 bg-white border border-slate-100 rounded-lg p-2 flex-shrink-0">
                                       <img 
                                          src={item.image.startsWith('http') ? item.image : `${import.meta.env.VITE_API_URL.replace('/api', '')}${item.image}`} 
                                          alt={item.name} 
                                          className="w-full h-full object-contain mix-blend-multiply"
                                       />
                                   </div>
                                   <div className='flex-1 min-w-0'>
                                       <Link to={`/product/${item.slug || item.product}`} className="text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors line-clamp-2">
                                           {item.name}
                                       </Link>
                                       <p className="text-xs text-slate-500 mt-1">Qty: {item.qty} × ${item.price}</p>
                                   </div>
                               </div>
                           ))}
                           {order.orderItems.length > 2 && (
                               <p className="text-xs text-slate-400 font-medium pl-20">+ {order.orderItems.length - 2} more items</p>
                           )}
                       </div>
                       
                       {/* Mobile Details Button */}
                       <div className="sm:hidden mt-2">
                            <Link 
                                to={`/order/${order._id}`}
                                className="w-full block text-center px-4 py-3 bg-slate-50 border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-100 transition-colors"
                            >
                                View Order Details
                            </Link>
                       </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </PageContainer>
      </div>
      <Footer />
    </>
  );
};
export default MyOrders;

