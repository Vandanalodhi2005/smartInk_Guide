import PageContainer from "../components/common/PageContainer";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { FiPackage, FiTruck, FiCheckCircle } from "react-icons/fi";

const statusStyles = {
  shipped: "bg-indigo-100 text-indigo-700",
  delivered: "bg-emerald-100 text-emerald-700",
};

const steps = [
  { label: "Ordered", icon: <FiPackage /> },
  { label: "Processing", icon: <FiPackage /> },
  { label: "Shipped", icon: <FiTruck /> },
  { label: "Delivered", icon: <FiCheckCircle /> },
];

const MyOrders = () => {
  const mockOrders = [
    {
      id: "ORD-7721",
      date: "Oct 12, 2025",
      status: "shipped",
      total: "$539.00",
      trackingStep: 2,
      items: [
        {
          id: 1,
          name: "HP LaserJet Pro M404",
          price: "$539",
          image: "https://i.imgur.com/2nCt3Sbl.jpg",
          qty: 1,
        },
      ],
    },
    {
      id: "ORD-6540",
      date: "Sep 28, 2025",
      status: "delivered",
      total: "$159.00",
      trackingStep: 3,
      items: [
        {
          id: 2,
          name: "Canon Pixma G3000",
          price: "$159",
          image: "https://i.imgur.com/FYFZ5PZ.jpg",
          qty: 1,
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <PageContainer>
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900">My Orders</h1>
          <p className="text-gray-500 mt-2">
            Track your recent purchases and order progress
          </p>
        </div>

        {/* Orders */}
        <div className="space-y-8">
          {mockOrders.map((order) => (
            <div
              key={order.id}
              className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition"
            >
              {/* Order Header */}
              <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b">
                <div>
                  <p className="text-sm text-gray-500">Order ID</p>
                  <p className="text-lg font-bold text-gray-800">
                    {order.id}
                    <span className="text-gray-400 font-medium">
                      {" "}
                      • {order.date}
                    </span>
                  </p>
                </div>

                <span
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold capitalize ${statusStyles[order.status]}`}
                >
                  {order.status}
                </span>
              </div>

              {/* Body */}
              <div className="grid md:grid-cols-3 gap-6 p-6">
                {/* Items */}
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-xl object-cover border"
                      />
                      <div>
                        <p className="font-semibold text-gray-800">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          Qty {item.qty} • {item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tracking */}
                <div className="md:col-span-2">
                  <p className="text-sm font-semibold text-gray-500 mb-4">
                    Order Progress
                  </p>

                  <div className="grid grid-cols-4 gap-3">
                    {steps.map((step, idx) => {
                      const active = idx <= order.trackingStep;
                      return (
                        <div
                          key={step.label}
                          className={`rounded-xl p-3 text-center border transition ${
                            active
                              ? "bg-emerald-50 border-emerald-200"
                              : "bg-gray-50 border-gray-200"
                          }`}
                        >
                          <div
                            className={`mx-auto mb-2 text-lg ${
                              active
                                ? "text-emerald-600"
                                : "text-gray-400"
                            }`}
                          >
                            {step.icon}
                          </div>
                          <p
                            className={`text-xs font-semibold ${
                              active
                                ? "text-emerald-700"
                                : "text-gray-400"
                            }`}
                          >
                            {step.label}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Total */}
                  <div className="mt-6 flex justify-end">
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Order Total</p>
                      <p className="text-2xl font-extrabold text-gray-900">
                        {order.total}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
      <Footer />
    </>
  );
};

export default MyOrders;
