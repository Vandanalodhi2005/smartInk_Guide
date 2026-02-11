import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';

const EcoFriendlyPrintingGuide = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <div className="flex-grow pt-8 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Back Link */}
          <div className="mb-8">
            <Link to="/blogs" className="text-sm font-medium text-gray-500 hover:text-primary transition-colors">
              &larr; Back to Blog
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-10 pb-10 border-b border-gray-200">
            <span className="inline-block bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded mb-4 uppercase tracking-wider">
              Sustainability
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Eco-Friendly Printing — How to Reduce Waste & Extend Printer Life (2026 Sustainability Guide)
            </h1>
            <div className="flex items-center text-gray-500 text-sm">
              <span className="font-semibold text-gray-900 mr-2">By PrintsCarts Team</span>
              <span className="mx-2">•</span>
              <span>February 11, 2026</span>
              <span className="mx-2">•</span>
              <span>10 min read</span>
            </div>
          </header>

          {/* Main Content */}
          <div className="prose prose-lg prose-blue max-w-none text-gray-700">

            {/* Introduction */}
            <p className="lead text-xl text-gray-600 mb-8 font-light">
              Eco-friendly printing is no longer just an environmental choice — it is a cost-saving, efficiency-boosting, and longevity-improving strategy for homes, small businesses, and large organizations. In 2026, as households and companies print more documents, photos, labels, and everyday materials, reducing waste and conserving resources has become a crucial part of modern printing practices.
            </p>
            <p className="mb-6">
              Whether you're a student printing assignments, a home office user handling invoices, or a business managing large print volumes, sustainable printing helps you:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
              <li>Reduce paper consumption</li>
              <li>Lower ink and toner usage</li>
              <li>Extend your printer’s lifespan</li>
              <li>Decrease long-term maintenance costs</li>
              <li>Minimize environmental waste</li>
            </ul>
            <p className="mb-8">
              This comprehensive guide outlines the best methods for eco-friendly printing, including hardware recommendations, ink/toner optimization, paper-saving techniques, and real-world sustainability practices every user can adopt.
            </p>

            {/* Why Eco-Friendly Printing Matters */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why Eco-Friendly Printing Matters in 2026</h2>
            <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg mb-8">
              <p className="mb-4 text-gray-800">
                Modern printers are more efficient than ever, but printing waste remains high. Users often print excess pages, throw out cartridges prematurely, and ignore settings that minimize environmental impact.
              </p>
              <ul className="list-decimal pl-6 space-y-2 text-gray-700">
                <li><strong>Reduces Cartridge Waste:</strong> Billions of ink and toner cartridges end up in landfills annually.</li>
                <li><strong>Cuts Paper Waste:</strong> Schools, offices, and home users often print unnecessary pages.</li>
                <li><strong>Saves Energy:</strong> Modern printers use power-saving modes that extend hardware life.</li>
                <li><strong>Extends Printer Life:</strong> Well-maintained printers last longer and require fewer repairs.</li>
                <li><strong>Saves Money:</strong> Sustainable printing reduces operational costs by 40–70%.</li>
              </ul>
            </div>

            {/* Section 1 */}
            <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-8 border-b pb-4">Section 1 — Print Smartly: Reduce Ink, Toner & Paper Usage</h2>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-teal-600 mr-2">✔ 1.</span> Use Duplex (Two-Sided) Printing by Default
              </h3>
              <p className="text-gray-600 mb-2">
                Duplex printing is one of the easiest ways to cut paper usage. It reduces paper consumption by 50% and ideally saves storage space.
              </p>
              <div className="bg-gray-50 p-4 rounded text-sm">
                <strong>How to Enable:</strong>
                <br />Windows: Printer Properties → Enable Duplex
                <br />macOS: Print Dialog → Two-Sided Printing
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-teal-600 mr-2">✔ 2.</span> Use Draft or Eco Mode for Everyday Printing
              </h3>
              <p className="text-gray-600 mb-2">Draft mode uses significantly less ink while maintaining readable text. Best for daily notes, internal documents, and homework drafts.</p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-teal-600 mr-2">✔ 3.</span> Use Grayscale When Color Is Not Needed
              </h3>
              <p className="text-gray-600 mb-2">Color printing uses multiple ink cartridges simultaneously. Use Grayscale for contracts, forms, text documents, and receipts.</p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-teal-600 mr-2">✔ 4.</span> Print Only the Pages You Need
              </h3>
              <p className="text-gray-600 mb-2">Use Print Preview to avoid blank ending pages, unneeded images, and extra pages from formatting errors.</p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-teal-600 mr-2">✔ 5.</span> Use Eco-Optimized Fonts
              </h3>
              <p className="text-gray-600 mb-2">
                Some fonts use less ink. Best choices include Garamond, Century Gothic, Calibri, Ryman Eco, and Ecofont. Avoid heavy fonts like Arial Black.
              </p>
            </div>


            {/* Section 2 */}
            <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-8 border-b pb-4">Section 2 — Paper Sustainability: Choosing the Right Options</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                 <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold">6</div>
                 <div>
                    <h4 className="font-bold text-gray-900">Use Recycled Paper</h4>
                    <p className="text-gray-600 text-sm">Modern recycled paper offers bright whiteness, smooth finish, and low dust levels. Ideal for documents and everyday use.</p>
                 </div>
              </li>
              <li className="flex gap-4">
                 <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold">7</div>
                 <div>
                    <h4 className="font-bold text-gray-900">Choose FSC-Certified or Eco-Label Paper</h4>
                    <p className="text-gray-600 text-sm">Look for FSC (Forest Stewardship Council), EcoLogo, or Blue Angel labels to ensure responsible sourcing.</p>
                 </div>
              </li>
              <li className="flex gap-4">
                 <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold">8</div>
                 <div>
                    <h4 className="font-bold text-gray-900">Reduce Margins & Font Sizes</h4>
                    <p className="text-gray-600 text-sm">Shrinking margins to 0.5-inch and using size 10–11 font significantly reduces total printed pages.</p>
                 </div>
              </li>
               <li className="flex gap-4">
                 <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold">9</div>
                 <div>
                    <h4 className="font-bold text-gray-900">Reuse Single-Sided Paper</h4>
                    <p className="text-gray-600 text-sm">For internal notes or drafts, use the back of previously printed sheets.</p>
                 </div>
              </li>
            </ul>

            {/* Section 3 */}
            <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-8 border-b pb-4">Section 3 — Eco-Friendly Ink & Toner Practices</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-gray-50 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">10. Choose High-Yield Cartridges</h3>
                    <p className="text-gray-600 text-sm">They print more pages, have a lower cost per page, and require fewer replacements, reducing plastic waste.</p>
                </div>
                 <div className="p-6 bg-gray-50 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">11. Switch to Ink Tank Printers</h3>
                    <p className="text-gray-600 text-sm">No cartridge waste, bottled ink lasts 2–3 years, and extremely low ink cost. Best for families and students.</p>
                </div>
                 <div className="p-6 bg-gray-50 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">12. Recycle Cartridges</h3>
                    <p className="text-gray-600 text-sm">Use manufacturer programs or local office supply stores. Never throw cartridges in the trash.</p>
                </div>
                 <div className="p-6 bg-gray-50 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">13. Avoid Over-Cleaning</h3>
                    <p className="text-gray-600 text-sm">Excessive cleaning cycles waste ink. Clean only when text is broken or colors fade.</p>
                </div>
            </div>

            {/* Section 4 */}
            <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-8 border-b pb-4">Section 4 — Eco-Friendly Printer Maintenance</h2>
            <div className="space-y-4 mb-12">
                 <p><strong className="text-gray-900">14. Keep Your Printer Clean:</strong> Dust buildup wastes ink and causes jams. Clean paper trays and vents.</p>
                 <p><strong className="text-gray-900">15. Use Power-Saving Modes:</strong> Enable auto-sleep and auto-shutdown to save electricity.</p>
                 <p><strong className="text-gray-900">16. Update Firmware:</strong> Updates improve power efficiency and stability.</p>
            </div>

            {/* Section 5 */}
            <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-8 border-b pb-4">Section 5 — Sustainable Printing Habits</h2>
            <ul className="list-disc pl-6 space-y-3 mb-12 text-gray-700">
                <li><strong>Print Digitally When Possible:</strong> Use PDFs, e-signatures, and cloud storage instead of paper.</li>
                <li><strong>Share One Printer:</strong> Use network sharing to reduce energy consumption and maintenance.</li>
                <li><strong>Avoid Idle Periods:</strong> Ink drains when unused. Use printer weekly.</li>
                <li><strong>Print in Batches:</strong> Reduces warm-up cycles and energy use.</li>
            </ul>

            {/* Section 6 */}
            <div className="bg-teal-900 text-white p-8 rounded-lg mb-12">
                <h2 className="text-2xl font-bold mb-6">Choosing the Most Eco-Friendly Printers in 2026</h2>
                <div className="grid md:grid-cols-3 gap-6 text-white/90">
                    <div>
                        <h3 className="font-bold text-teal-300 mb-2">Inkjet (Tank-Based)</h3>
                        <p className="text-sm">Epson EcoTank, Canon MegaTank. Bottled ink lasts years, very low waste.</p>
                    </div>
                     <div>
                        <h3 className="font-bold text-teal-300 mb-2">Laser Printers</h3>
                        <p className="text-sm">Brother HL, HP LaserJet EcoSmart. Efficient toner prints thousands of pages.</p>
                    </div>
                     <div>
                        <h3 className="font-bold text-teal-300 mb-2">Hybrid Models</h3>
                        <p className="text-sm">Combine low power use with tank systems and cloud printing.</p>
                    </div>
                </div>
            </div>

             {/* Section 7 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to Dispose of Printers Responsibly</h2>
            <p className="mb-4 text-gray-600">Printers contain plastic, electronics, circuit boards, and hazardous components. Never throw them in the trash.</p>
            <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
                <li>E-waste recycling centers</li>
                <li>Manufacturer take-back programs</li>
                <li>Local municipal recycling drives</li>
            </ul>

            {/* Section 8: Myths */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Eco-Friendly Printing Myths (Debunked)</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
                <div className="bg-red-50 p-4 rounded border-l-4 border-red-400">
                    <p className="font-bold text-red-800">❌ Myth 1: Draft mode ruins quality</p>
                    <p className="text-sm text-red-700">Wrong. It works perfectly for text documents.</p>
                </div>
                <div className="bg-red-50 p-4 rounded border-l-4 border-red-400">
                    <p className="font-bold text-red-800">❌ Myth 2: Laser printers aren't eco-friendly</p>
                    <p className="text-sm text-red-700">Laser printers produce less waste and lower cp.</p>
                </div>
                 <div className="bg-red-50 p-4 rounded border-l-4 border-red-400">
                    <p className="font-bold text-red-800">❌ Myth 3: Recycling is hard</p>
                    <p className="text-sm text-red-700">Most brands offer free drop-off programs.</p>
                </div>
                 <div className="bg-red-50 p-4 rounded border-l-4 border-red-400">
                    <p className="font-bold text-red-800">❌ Myth 4: Reduces productivity</p>
                    <p className="text-sm text-red-700">Smart settings save time and resources.</p>
                </div>
            </div>

            {/* Section 9: Savings */}
            <div className="bg-gray-100 p-8 rounded-lg mb-12 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">How Much Can You Save?</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-bold text-lg mb-2">Home User</h3>
                        <p className="text-green-600 text-3xl font-bold mb-2">25–50%</p>
                        <p className="text-sm text-gray-600">Savings on paper, ink, and energy annually.</p>
                    </div>
                     <div>
                        <h3 className="font-bold text-lg mb-2">Small Business</h3>
                        <p className="text-green-600 text-3xl font-bold mb-2">30–70%</p>
                        <p className="text-sm text-gray-600">Combined total operational savings.</p>
                    </div>
                </div>
            </div>

            {/* Conclusion */}
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h2>
            <p className="mb-6">
              Eco-friendly printing isn’t just about helping the environment—it’s about lowering long-term printing costs, improving efficiency, and extending the life of your device. By using duplex printing, choosing sustainable paper, upgrading to tank-based printers, and following smart maintenance habits, you can dramatically reduce waste while keeping your printing fast, reliable, and cost-effective.
            </p>
            <p className="mb-6">
              Whether you're a student, home user, or business owner, adopting the practices in this guide will ensure you save money, protect the environment, and get the maximum life out of your printer.
            </p>

            <div className="mt-12 text-center">
                <Link to="/printers" className="inline-block border-2 border-teal-500 text-teal-600 font-bold py-3 px-8 rounded-full hover:bg-teal-500 hover:text-white transition-colors">
                    Shop Eco-Friendly Printers
                </Link>
            </div>

          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
};

export default EcoFriendlyPrintingGuide;
