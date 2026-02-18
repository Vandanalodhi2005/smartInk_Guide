import React from "react";

const HomeWhyChoose = () => {
  const reasons = [
    {
      title: "Transparent Information",
      description:
        "We provide clear product details, compatibility information, and specifications to help you choose correctly.",
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      ),
    },
    {
      title: "Secure Transactions",
      description:
        "All payments are processed using encrypted, secure payment systems.",
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
    {
      title: "30-Day Return Policy",
      description:
        "Eligible items can be returned within 30 days of delivery.",
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 10h10a5 5 0 0 1 5 5v2" />
          <path d="M7 6l-4 4 4 4" />
        </svg>
      ),
    },
    {
      title: "Independent Retailer",
      description:
        "We operate independently and are not affiliated with printer manufacturers unless explicitly stated.",
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21h18" />
          <path d="M5 21v-7l8-4 8 4v7" />
          <path d="M9 10a2 2 0 1 1-4 0v7h4v-7z" />
          <path d="M19 10a2 2 0 1 1-4 0v7h4v-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left">
            Why Choose Smart Ink Guide?
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 
                         hover:shadow-lg transition duration-300"
            >
              <div className="flex flex-col md:flex-col lg:flex-row items-center lg:items-start gap-5 text-center lg:text-left">

                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-blue-100 text-[#20a1dd]">
                  {reason.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default HomeWhyChoose;
