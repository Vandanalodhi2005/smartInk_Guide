import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

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
            Our Commitment to Excellence
          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
            At <span className="font-semibold text-gray-900">Smart Ink Guide</span>, 
            we deliver transparency, secure shopping, and long-term reliability 
            for every customer.
          </p>
        </motion.div>

        {/* STATS STRIP (Better Mobile Design) */}
        <div
          ref={ref}
          className="mt-10 sm:mt-14"
        >
          <div className="grid grid-cols-3 gap-3 sm:gap-6">

            {stats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-gray-50 border border-gray-200 rounded-xl p-4 sm:p-6 text-center hover:shadow-md transition-all duration-300"
              >
                <div className="text-xl sm:text-3xl lg:text-4xl font-bold text-[#20a1dd]">
                  {inView && (
                    <CountUp
                      end={item.value}
                      duration={2}
                      separator=","
                    />
                  )}
                  {item.suffix}
                </div>

                <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600 font-medium uppercase tracking-wide mt-1">
                  {item.label}
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
          <button className="px-7 py-3 text-sm sm:text-base font-semibold rounded-lg text-white bg-[#20a1dd] hover:bg-[#20a1dd] transition duration-300 shadow-md hover:shadow-lg">
            Learn More
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default HomeCommitment;
