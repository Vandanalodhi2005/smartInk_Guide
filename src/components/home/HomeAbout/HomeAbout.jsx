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

            <h2 className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
              Your Partner in Smart Printing
            </h2>

            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Simplifying Your Printing Experience
            </h3>

            <p className="text-gray-600 leading-relaxed">
              At Smart Ink Guide, we focus on simplifying the way customers purchase printers and supplies online. From ink cartridges and toner to multifunction printers and paper, we provide detailed product information to help you make confident decisions.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Whether you're printing school assignments, managing business documents, or running a small office, our goal is to provide dependable products and transparent information — all in one place.
            </p>

            <ul className="text-gray-600 space-y-2 mt-2">
              <li className="flex items-center gap-2"><span className="text-[#20a1dd]">✔</span> Clear Product Descriptions</li>
              <li className="flex items-center gap-2"><span className="text-[#20a1dd]">✔</span> Compatibility Guidance</li>
              <li className="flex items-center gap-2"><span className="text-[#20a1dd]">✔</span> Responsive Customer Support</li>
              <li className="flex items-center gap-2"><span className="text-[#20a1dd]">✔</span> Reliable Fulfillment</li>
            </ul>

            <div className="mt-6">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Who We Serve</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-800">🏠 Home Users & Students</h5>
                  <p className="text-sm text-gray-600">Affordable printers and ink for everyday assignments, photos, and personal documents.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">💼 Remote Professionals</h5>
                  <p className="text-sm text-gray-600">Compact wireless printers and high-yield cartridges designed for home office productivity.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">🏢 Small & Growing Businesses</h5>
                  <p className="text-sm text-gray-600">High-volume laser printers, toner supplies, and cost-efficient printing solutions.</p>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Link
                to="/printers"
                className="px-6 py-3 bg-[#20a1dd] text-white font-semibold rounded-md hover:bg-[#1a8bbd] transition duration-300"
              >
                Explore All Products
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeAbout;
