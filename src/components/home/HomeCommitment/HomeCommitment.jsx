import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const stats = [
  { value: 100, suffix: "%", label: "Transparency" },
  { value: 24, suffix: "/7", label: "Secure" },
  { value: 5000, suffix: "+", label: "Customers" },
];

const HomeCommitment = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="relative bg-white py-14 sm:py-20 lg:py-24">

      <div className="max-w-6xl mx-auto px-5 sm:px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#20a1dd] leading-tight">
            Professional-Grade Printing Solutions
          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
            Designed for teams and businesses that require consistent, high-quality output. Our goal is to help you reduce long-term printing expenses while maintaining productivity.
          </p>
        </motion.div>

        {/* FEATURES GRID */}
        <div
          ref={ref}
          className="mt-10 sm:mt-14"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "High-Speed Laser Printers",
              "Multifunction All-in-One Devices",
              "High-Yield Toner Options",
              "Cost-Per-Page Optimization"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 flex items-center justify-center min-h-[100px]"
              >
                <div className="text-lg font-bold text-gray-800">
                  <span className="block text-[#20a1dd] text-2xl mb-2">✔</span>
                  {item}
                </div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <Link to="/about">
            <button className="px-7 py-3 text-sm sm:text-base font-semibold rounded-lg text-white bg-[#20a1dd] hover:bg-[#20a1dd] transition duration-300 shadow-md hover:shadow-lg">
              Explore Professional Solutions
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default HomeCommitment;
