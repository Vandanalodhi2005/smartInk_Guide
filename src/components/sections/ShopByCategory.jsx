import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ShopByCategory = () => {
  const scrollRef = useRef(null);

  const categories = [
    { image: "/homePrinter.png", title: "Home Printers", link: "/home-printers", badge: "Compact & Photo" },
    { image: "/ofiicePrinter.png", title: "Office Printers", link: "/office-printers", badge: "High Volume" },
    { image: "/lasserPrinter.png", title: "Laser Printers", link: "/laser-printers", badge: "Fast & Sharp" },
    { image: "/inkjetPrinter.png", title: "Inkjet Printers", link: "/inkjet-printers", badge: "Vibrant Color" },
    { image: "/ink&toner.png", title: "Ink & Toner", link: "/ink-toner", badge: "Supplies" },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300; // Adjust scroll distance
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative group">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#20a1dd]">
            Shop by Category
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Browse top printing essentials curated for performance.
          </p>
        </div>

        {/* Slider Controls (Desktop) */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-[45%] -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#20a1dd] p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 -ml-4 md:ml-0 hidden md:block"
          aria-label="Previous category"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-[45%] -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#20a1dd] p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 -mr-4 md:mr-0 hidden md:block"
          aria-label="Next category"
        >
          <ChevronRight size={24} />
        </button>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 px-4"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative min-w-[85%] sm:min-w-[45%] lg:min-w-[30%] snap-center group/card rounded-2xl overflow-hidden bg-white"
            >
              {/* Image Container */}
              <div className="relative h-60 sm:h-72 overflow-hidden rounded-2xl border border-gray-100">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover/card:scale-105"
                />

                {/* Floating Badge */}
                <div className="absolute top-4 left-4 bg-[#20a1dd] text-white text-xs px-3 py-1 rounded-full shadow-md z-10">
                  {category.badge}
                </div>
              </div>

              {/* Content (Below Image) */}
              <div className="pt-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover/card:text-[#20a1dd] transition-colors">
                  {category.title}
                </h3>

                <Link
                  to={category.link}
                  className="inline-block px-8 py-2.5 border-2 border-[#20a1dd] text-[#20a1dd] font-bold rounded-full hover:bg-[#20a1dd] hover:text-white transition-all duration-300"
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
          <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory">
            <div className="min-w-[280px] md:min-w-0 bg-gray-50 p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition snap-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Home & Personal</h3>
              <p className="text-gray-600 mb-4 text-sm">Reliable printers and cost-effective ink solutions for daily tasks.</p>
              <Link to="/printers" className="text-[#20a1dd] font-semibold hover:underline">Shop Home Printers &rarr;</Link>
            </div>
            <div className="min-w-[280px] md:min-w-0 bg-gray-50 p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition snap-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Small Business</h3>
              <p className="text-gray-600 mb-4 text-sm">Multifunction printers and high-capacity toner built for efficiency.</p>
              <Link to="/printers" className="text-[#20a1dd] font-semibold hover:underline">Shop Business Printers &rarr;</Link>
            </div>
            <div className="min-w-[280px] md:min-w-0 bg-gray-50 p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition snap-center">
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

      {/* Custom Scrollbar Styling - Mobile Only */}
      <style>{`
        @media (max-width: 1024px) {
          .overflow-x-auto::-webkit-scrollbar {
            height: 6px;
          }
          .overflow-x-auto::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
          }
          .overflow-x-auto::-webkit-scrollbar-thumb {
            background: #20a1dd;
            border-radius: 10px;
          }
        }
        
        @media (min-width: 1024px) {
           .overflow-x-auto::-webkit-scrollbar {
            display: none;
           }
           .overflow-x-auto {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        }
      `}</style>
    </section>
  );
};

export default ShopByCategory;
