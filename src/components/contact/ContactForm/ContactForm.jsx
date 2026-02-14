import React from "react";

const ContactForm = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-8 md:p-12">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-500 mb-8">
          Send a Message
        </h2>

        <form className="space-y-6">
          
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Phone + Order ID (2 column on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                placeholder="Enter Your Phone Number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Order Number (If Applicable)
              </label>
              <input
                type="text"
                placeholder="Enter Order ID"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

          </div>

          {/* Subject */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Subject<span className="text-red-500">*</span>
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option>General Question</option>
              <option>Order Issue</option>
              <option>Technical Support</option>
              <option>Return / Refund</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              required
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
};

export default ContactForm;
