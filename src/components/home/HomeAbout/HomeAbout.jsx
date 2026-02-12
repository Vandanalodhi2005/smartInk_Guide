import React from "react";
import { Link } from "react-router-dom";
import homeAboutImage from "../../../assets/homeAboutImage.jpg";

const HomeAbout = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col-reverse lg:flex-row items-center gap-20">

          {/* IMAGE SIDE */}
          <div className="w-full lg:w-1/2">
            <div className="w-full h-[350px] md:h-[450px] overflow-hidden rounded-lg shadow-lg">
              <img
                src={homeAboutImage}
                alt="Printing supplies and office setup"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div className="w-full lg:w-1/2 space-y-6 text-left">

            <h2 className="text-blue-400 font-semibold uppercase tracking-wider text-sm">
              About SmartInk Guide
            </h2>

            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Your Trusted Online Destination for Printing Essentials
            </h3>

            <p className="text-gray-600 leading-relaxed">
              SmartInk Guide is an independent online retail platform offering
              a broad range of printers, genuine-quality ink and toner cartridges,
              and essential printing supplies.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We focus on transparency, product accuracy, and customer
              satisfaction—helping homes, students, and businesses choose
              the right printing solutions with confidence.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/about"
                className="px-6 py-3 border border-blue-400 text-blue-400 font-semibold rounded-md hover:bg-blue-50 transition duration-300"
              >
                Learn More
              </Link>

              <Link
                to="/printers"
                className="px-6 py-3 bg-blue-400 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300"
              >
                Explore Products
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeAbout;
