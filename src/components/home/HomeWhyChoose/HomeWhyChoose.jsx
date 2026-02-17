import React from "react";

const HomeWhyChoose = () => {
  const reasons = [
    {
      title: "Clear, Accurate Product Information",
      description:
        "Each product listing includes detailed descriptions, compatibility information, and specifications so you can choose the right item without confusion.",
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
      title: "Customer-Centered Experience",
      description:
        "We offer responsive assistance for product inquiries, order updates, and general questions.",
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
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      title: "Fast & Dependable Shipping",
      description:
        "We work with trusted carriers to ensure safe and timely delivery.",
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
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
    {
      title: "Wide Selection for Every Need",
      description:
        "From compact home printers to office-ready devices and everyday supplies.",
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
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      ),
    },
    {
      title: "Secure Online Shopping",
      description:
        "We use secure checkout processes to help protect your information.",
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
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left">
            Why Shop with Prints Carts?
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
