import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import i1 from "../../assets/i1.jpg";
import i2 from "../../assets/i2.jpg";
import i3 from "../../assets/i3.jpg";

const ShopByCategory = () => {
  const categories = [
    { image: i1, title: "Printers", link: "/printers", badge: "Popular" },
    { image: i3, title: "Ink Cartridges", link: "/ink-toner", badge: "Best Seller" },
    { image: i2, title: "Toner & Supplies", link: "/ink-toner", badge: "Premium" },
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
                  className="inline-block px-6 py-3 bg-[#20a1dd] hover:bg-[#20a1dd] rounded-lg font-semibold transition-all duration-300 shadow-md"
                >
                  Shop Now
                </Link>
              </div>
            </motion.div>
          ))}

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
