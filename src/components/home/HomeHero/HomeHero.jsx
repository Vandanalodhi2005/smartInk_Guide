import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "../../../assets/hero.jpg";

const HomeHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#f8fbff] via-[#eef6ff] to-[#f8fbff]">

      {/* Soft Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 blur-3xl rounded-full -z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 blur-3xl rounded-full -z-0"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
              Print smarter with the world’s
              <span className="block text-[#20a1dd] mt-2">
                trusted printing platform
              </span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Save time, discover reliable printers, and explore genuine ink
              & toner solutions designed for smooth home and office printing.
            </p>

            <div className="mt-10">
              <Link
                to="/printers"
                className="inline-block px-9 py-3.5 bg-[#20a1dd] text-white font-semibold rounded-full hover:bg-[#20a1dd] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Shop Now
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center relative"
          >
            {/* Floating Shapes */}
            <div className="absolute -top-10 left-10 w-28 h-28 bg-yellow-300/50 rounded-xl backdrop-blur-md"></div>
            <div className="absolute -bottom-10 right-10 w-20 h-20 bg-blue-400/40 rounded-xl backdrop-blur-md"></div>

            <img
              src={heroImage}
              alt="Printer"
              className="relative z-10 w-full max-w-lg rounded-2xl shadow-2xl object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-20"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L80,74.7C160,85,320,107,480,101.3C640,96,800,64,960,58.7C1120,53,1280,75,1360,85.3L1440,96V120H0Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HomeHero;
