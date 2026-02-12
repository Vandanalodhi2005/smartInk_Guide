import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';

const PrinterSetupGuide = () => {
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
            <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded mb-4 uppercase tracking-wider">
              Technical Guide
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              The Ultimate Guide to Setting Up a New Printer (Windows & macOS) — 2026 Edition
            </h1>
            <div className="flex items-center text-gray-500 text-sm">
              <span className="font-semibold text-gray-900 mr-2">By SmartInk Guide Team</span>
              <span className="mx-2">•</span>
              <span>February 11, 2026</span>
              <span className="mx-2">•</span>
              <span>15 min read</span>
            </div>
          </header>

          {/* Main Content */}
          <div className="prose prose-lg prose-blue max-w-none text-gray-700">
            
            {/* Introduction */}
            <p className="lead text-xl text-gray-600 mb-8 font-light">
              Setting up a new printer can feel overwhelming—whether you're connecting it for home use, a small business, a remote workspace, or for school projects. The good news is that modern printers are easier to set up than ever before, especially with smart apps, wireless connectivity, and automated configuration tools.
            </p>
            <p className="mb-6">
               However, many users still face challenges such as drivers not installing, printers not appearing on the network, Wi-Fi drops, offline errors, or USB detection problems.
            </p>
            <p className="mb-8">
              This definitive guide walks you through the complete setup process for any modern printer—HP, Canon, Epson, Brother, or others—on both Windows and macOS. It also includes troubleshooting tips, expert recommendations, and best practices.
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Section 1 — Unboxing & Preparing Your Printer</h2>
            <p className="mb-4">Proper setup begins the moment you open the box.</p>
            <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-4 rounded border-l-4 border-primary">
                    <h4 className="font-bold text-gray-900 mb-1">Step 1: Carefully Unbox</h4>
                    <p className="text-sm text-gray-600">Remove printer, power cable, ink/toner, setup guide, and USB cable. Check for broken parts or missing accessories.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded border-l-4 border-primary">
                    <h4 className="font-bold text-gray-900 mb-1">Step 2: Remove Protective Material</h4>
                    <p className="text-sm text-gray-600">Remove blue tapes, orange tabs, and foams from the paper tray, scanner lid, and cartridge area. <strong>Note:</strong> Leaving tape inside causes immediate errors.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded border-l-4 border-primary">
                    <h4 className="font-bold text-gray-900 mb-1">Step 3: Placement</h4>
                    <p className="text-sm text-gray-600">Place on a flat, stable surface near power and Wi-Fi, away from heat/moisture.</p>
                </div>
            </div>

            {/* Section 2 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Section 2 — Connect Power & Run Initial Setup</h2>
            <p className="mb-4">Plug the printer directly into a wall outlet (avoid surge protectors if possible). Power it on.</p>
            <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
                <li>Printer will initialize and minimize align printheads (inkjet) or prepare toner (laser).</li>
                <li>Follow on-screen steps: Language, Region, Date & Time.</li>
            </ul>

            {/* Section 3 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Section 3 — Installing Ink or Toner Cartridges</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                 <div className="bg-blue-50 p-6 rounded-lg">
                     <h3 className="font-bold text-primary mb-2">Inkjet Installation</h3>
                     <ul className="list-disc pl-4 text-sm space-y-2">
                         <li>Insert cartridges into correct color slots (Black, Cyan, Magenta, Yellow).</li>
                         <li>Do not shake cartridges.</li>
                         <li>Do not touch copper contacts.</li>
                     </ul>
                 </div>
                 <div className="bg-gray-100 p-6 rounded-lg">
                     <h3 className="font-bold text-gray-900 mb-2">Laser Installation</h3>
                     <ul className="list-disc pl-4 text-sm space-y-2">
                         <li>Remove orange seal.</li>
                         <li>Slide toner into printer.</li>
                         <li>Shake toner gently 2–3 times to settle powder.</li>
                     </ul>
                 </div>
            </div>

             {/* Section 4 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Section 4 — Load Paper Correctly</h2>
            <p className="mb-8 bg-yellow-50 p-4 rounded text-yellow-800">
                <strong>Tip:</strong> Adjust paper guides snugly to avoid jams and misalignment. Use fresh, high-quality paper.
            </p>

            {/* Section 5 - Connecting */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-8 border-b pb-4">Section 5 — Connecting the Printer (Wi-Fi, USB, Ethernet)</h2>
            
            <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Option A — Wi-Fi Setup (Most Popular)</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="border p-4 rounded">
                        <strong className="block mb-2 text-primary">Method 1: Control Panel</strong>
                        Go to Settings {'>'} Network Setup {'>'} Wi-Fi Setup Wizard. Choose network and enter password.
                    </div>
                     <div className="border p-4 rounded">
                        <strong className="block mb-2 text-primary">Method 2: WPS</strong>
                        Press WPS button on router, then on printer. Wait for auto-connection.
                    </div>
                     <div className="border p-4 rounded">
                        <strong className="block mb-2 text-primary">Method 3: Mobile App</strong>
                        Use HP Smart, Canon PRINT, etc., for guided setup, updates, and mobile scanning.
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Option B — USB Setup</h3>
                    <p className="text-gray-600 text-sm">Best when Wi-Fi is weak or for single-device use. Simply plug in &rarr; OS detects printer &rarr; drivers install.</p>
                </div>
                <div>
                     <h3 className="text-xl font-bold text-gray-900 mb-2">Option C — Ethernet</h3>
                    <p className="text-gray-600 text-sm">Best for offices and high volume. Connect cable to router &rarr; printer joins network automatically.</p>
                </div>
            </div>

            {/* Section 6 - Drivers */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Section 6 — Installing Drivers</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded">
                    <h4 className="font-bold text-primary mb-2">Windows</h4>
                    <p className="text-sm mb-2"><strong>Recommended:</strong> Download official drivers from HP/Canon/Epson support websites.</p>
                    <p className="text-sm"><strong>Alternative:</strong> Let Windows Update automatically install via "Add Device".</p>
                </div>
                <div className="bg-gray-100 p-6 rounded">
                    <h4 className="font-bold text-gray-900 mb-2">macOS</h4>
                    <p className="text-sm mb-2">macOS automatically installs via <strong>AirPrint</strong>.</p>
                    <p className="text-sm">If AirPrint fails, download Mac drivers from manufacturer site and add manually.</p>
                </div>
            </div>

            {/* Section 7 & 8 - OS Specific Adding */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Section 7 — Add to Windows</h2>
                    <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                        <li>Go to Settings</li>
                        <li>Click Bluetooth & Devices</li>
                        <li>Select Printers & Scanners</li>
                        <li>Click Add Device</li>
                        <li>Select your printer</li>
                    </ol>
                </div>
                 <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Section 8 — Add to macOS</h2>
                    <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                        <li>System Settings</li>
                        <li>Printers & Scanners</li>
                        <li>Click Add Printer</li>
                        <li>Select printer from list</li>
                        <li>(Uses AirPrint by default)</li>
                    </ol>
                </div>
            </div>

            {/* Section 9 - Test Page */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Section 9 — Printing a Test Page</h2>
            <p className="mb-4">Always test to confirm setup, detect alignment issues, and verify drivers.</p>
            <ul className="list-disc pl-6 space-y-1 mb-8 text-gray-700 text-sm">
                <li><strong>Printer Panel:</strong> Tools {'>'} Print Test Page</li>
                <li><strong>Windows:</strong> Printer Settings {'>'} Print Test Page</li>
                <li><strong>macOS:</strong> Printers & Scanners {'>'} Open Print Queue {'>'} Test Page</li>
            </ul>

            {/* Section 10 - Troubleshooting */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Section 10 — Troubleshooting Common Setup Errors</h2>
            <div className="space-y-4 mb-12">
                <div className="border border-red-100 bg-red-50 p-4 rounded">
                    <strong className="block text-red-700 mb-1">1. Printer Not Found on Wi-Fi</strong>
                    <p className="text-sm text-gray-700">Ensure printer is close to router (2.4GHz often required). Restart both. Add manually via IP.</p>
                </div>
                 <div className="border border-red-100 bg-red-50 p-4 rounded">
                    <strong className="block text-red-700 mb-1">2. Printer Shows Offline</strong>
                    <p className="text-sm text-gray-700">Set as default, restart print spooler service (Windows), update drivers.</p>
                </div>
                 <div className="border border-red-100 bg-red-50 p-4 rounded">
                    <strong className="block text-red-700 mb-1">3. Driver Installation Failed</strong>
                    <p className="text-sm text-gray-700">Remove old drivers. Disable antivirus temporarily. Try USB connection first.</p>
                </div>
                 <div className="border border-red-100 bg-red-50 p-4 rounded">
                    <strong className="block text-red-700 mb-1">4. Blank Pages</strong>
                    <p className="text-sm text-gray-700">Check ink levels/tape removal. Clean printhead. Ensure no air bubbles.</p>
                </div>
            </div>

            {/* Section 11 & 12 */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Best Practices for Reliability</h2>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li>✔ Use genuine/high-quality ink</li>
                        <li>✔ Monthly printhead cleaning</li>
                        <li>✔ Restart router weekly</li>
                        <li>✔ Keep firmware updated</li>
                        <li>✔ Store cartridges properly</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Recommended Printers (2026)</h2>
                     <ul className="space-y-2 text-sm text-gray-700">
                        <li><strong>Home:</strong> HP Smart Tank 7602, Canon G3270</li>
                        <li><strong>Office:</strong> Brother HL-L2350DW, HP OfficeJet 9015e</li>
                    </ul>
                </div>
            </div>

            {/* Conclusion */}
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h2>
            <p className="mb-6">
              Setting up a printer in 2026 is easier than ever — but only if you follow the right steps. From unboxing to installing drivers and solving offline issues, this guide provides everything you need for a smooth, frustration-free setup.
            </p>
            <p className="mb-6">
              By following the proven methods above, you will get your printer running reliably, avoid common setup mistakes, and maintain stable connections for years to come.
            </p>

            <div className="mt-12 text-center">
                <Link to="/printers" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-blue-800 transition-colors shadow-lg">
                    Browse New Printers
                </Link>
            </div>

          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
};

export default PrinterSetupGuide;
