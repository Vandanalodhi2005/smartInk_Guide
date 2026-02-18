import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import i1 from "../../assets/i1.jpg";
import i2 from "../../assets/i2.jpg";
import i3 from "../../assets/i3.jpg";

const ShopByCategory = () => {
  const categories = [
    { image: i1, title: "Printers", link: "/printers", badge: "Inkjet & Laser" },
    { image: i3, title: "Ink Cartridges", link: "/ink-toner", badge: "Original & Compatible" },
    { image: i2, title: "Toner Cartridges", link: "/ink-toner", badge: "High Yield" },
    { image: i1, title: "Scanners", link: "/printers", badge: "Document & Portable" },
    { image: i3, title: "Paper & Media", link: "/ink-toner", badge: "Photo & Everyday" },
    { image: i2, title: "Accessories", link: "/printers", badge: "Cables & Essentials" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#20a1dd]">
            Shop by Category
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Browse top printing essentials curated for performance.
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 no-scrollbar">

          {categories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative min-w-[85%] sm:min-w-[45%] lg:min-w-[30%] snap-center group rounded-2xl overflow-hidden"
            >
              {/* Glow Border */}
              <div className="absolute inset-0 rounded-2xl border border-[#20a1dd] opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none shadow-[0_0_25px_rgba(59,130,246,0.25)]"></div>

              {/* Image */}
              <div className="relative h-60 sm:h-72 overflow-hidden rounded-2xl">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* Floating Badge */}
                <div className="absolute top-4 left-4 bg-[#20a1dd] text-white text-xs px-3 py-1 rounded-full shadow-md">
                  {category.badge}
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 relative inline-block">
                  {category.title}
                  {/* Animated Underline */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#20a1dd] transition-all duration-300 group-hover:w-full"></span>
                </h3>

                <Link
                  to={category.link}
                  className="inline-block px-6 py-3 bg-[#20a1dd] hover:bg-[#1a8bbd] rounded-lg font-semibold transition-all duration-300 shadow-md"
                >
                  Shop Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SOLUTIONS SECTION */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-4xl font-bold text-[#20a1dd]">
              Solutions for Every Printing Need
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Home & Personal</h3>
              <p className="text-gray-600 mb-4 text-sm">Reliable printers and cost-effective ink solutions for daily tasks.</p>
              <Link to="/printers" className="text-[#20a1dd] font-semibold hover:underline">Shop Home Printers &rarr;</Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Small Business</h3>
              <p className="text-gray-600 mb-4 text-sm">Multifunction printers and high-capacity toner built for efficiency.</p>
              <Link to="/printers" className="text-[#20a1dd] font-semibold hover:underline">Shop Business Printers &rarr;</Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">High-Volume Office</h3>
              <p className="text-gray-600 mb-4 text-sm">Enterprise-ready laser printers designed for demanding workflows.</p>
              <Link to="/printers" className="text-[#20a1dd] font-semibold hover:underline">Explore Office Solutions &rarr;</Link>
            </div>
          </div>
        </div>

        {/* FEATURED PRODUCTS SECTION */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#20a1dd] mb-4">
            Featured Products
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            Explore our featured selection of printers and ink supplies chosen for performance, reliability, and value.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto text-left mb-8">
            <div className="flex items-center gap-2 text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100"><span className="text-[#20a1dd]">✔</span> Wireless Connectivity</div>
            <div className="flex items-center gap-2 text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100"><span className="text-[#20a1dd]">✔</span> High Print Speeds</div>
            <div className="flex items-center gap-2 text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100"><span className="text-[#20a1dd]">✔</span> Energy-Efficient Designs</div>
            <div className="flex items-center gap-2 text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100"><span className="text-[#20a1dd]">✔</span> Compatible Supplies</div>
          </div>

          <Link
            to="/printers"
            className="inline-block px-8 py-3 bg-[#20a1dd] text-white font-semibold rounded-lg hover:bg-[#1a8bbd] transition shadow-md"
          >
            View All Products
          </Link>
        </div>
      </div>

      {/* Hide Scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ShopByCategory;
