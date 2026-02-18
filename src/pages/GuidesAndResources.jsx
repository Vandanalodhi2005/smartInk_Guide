import React from 'react';
import { motion } from 'framer-motion';
import {
    Printer, Droplet, DollarSign, Briefcase, Wrench, Wifi, Search, ShieldCheck, Mail, MapPin, Globe, CheckCircle, FileText, Smartphone, AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const GuidesAndResources = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative text-white py-20 px-6" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e5aaf 100%)' }}>
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Guides & Resources</h1>
                        <h2 className="text-2xl md:text-3xl font-light text-blue-100/80 mb-6">Smart Ink Guide Learning Center</h2>
                        <p className="text-lg md:text-xl text-blue-50/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                            At Smart Ink Guide, we believe informed customers make confident purchasing decisions.
                            Our Guides & Resources page is designed to provide clear, practical, and easy-to-understand information about printers, ink, toner, and printing efficiency.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-12 space-y-20">

                {/* 1. Printer Buying Guide */}
                <section id="printer-buying-guide">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mb-8"
                    >
                        <div className="flex items-center gap-3 mb-6 text-secondary">
                            <Printer size={36} />
                            <h2 className="text-3xl font-bold text-gray-900">Printer Buying Guide</h2>
                        </div>

                        {/* How to Choose */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-10">
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">How Do I Choose the Right Printer?</h3>
                            <p className="text-gray-600 mb-4">Choosing the right printer depends on three main factors:</p>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-slate-50 p-6 rounded-xl text-center">
                                    <div className="font-bold text-primary text-lg mb-2">Frequency</div>
                                    <p className="text-muted">How often you print</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-xl text-center">
                                    <div className="font-bold text-primary text-lg mb-2">Type</div>
                                    <p className="text-muted">What type of documents you print</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-xl text-center">
                                    <div className="font-bold text-primary text-lg mb-2">Budget</div>
                                    <p className="text-muted">Your long-term printing budget</p>
                                </div>
                            </div>
                        </div>

                        {/* Inkjet vs Laser */}
                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                            {/* Inkjet */}
                            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-secondary">
                                <h3 className="text-2xl font-bold mb-2 text-gray-800">Inkjet Printers</h3>
                                <p className="text-gray-500 text-sm mb-6">Use liquid ink sprayed onto paper.</p>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><CheckCircle size={18} className="text-secondary" /> Ideal For:</h4>
                                        <ul className="list-disc list-inside text-gray-600 ml-6 space-y-1">
                                            <li>Home use</li>
                                            <li>Students</li>
                                            <li>Photo printing</li>
                                            <li>Low to moderate volume</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><CheckCircle size={18} className="text-success" /> Advantages:</h4>
                                        <ul className="text-gray-600 space-y-2">
                                            <li className="flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 bg-success rounded-full"></span> Lower upfront cost</li>
                                            <li className="flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 bg-success rounded-full"></span> Excellent photo quality</li>
                                            <li className="flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 bg-success rounded-full"></span> Compact size & Quiet</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><AlertCircle size={18} className="text-warning" /> Considerations:</h4>
                                        <ul className="text-gray-600 space-y-1 ml-6 list-disc list-inside text-sm">
                                            <li>Higher cost per page</li>
                                            <li>Ink can dry out if unused</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Laser */}
                            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-primary">
                                <h3 className="text-2xl font-bold mb-2 text-gray-800">Laser Printers</h3>
                                <p className="text-gray-500 text-sm mb-6">Use toner powder and heat to bond text.</p>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><CheckCircle size={18} className="text-primary" /> Ideal For:</h4>
                                        <ul className="list-disc list-inside text-gray-600 ml-6 space-y-1">
                                            <li>Offices</li>
                                            <li>Businesses</li>
                                            <li>High-volume printing</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><CheckCircle size={18} className="text-success" /> Advantages:</h4>
                                        <ul className="text-gray-600 space-y-2">
                                            <li className="flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 bg-success rounded-full"></span> Faster print speeds</li>
                                            <li className="flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 bg-success rounded-full"></span> Lower cost per page</li>
                                            <li className="flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 bg-success rounded-full"></span> Higher monthly duty cycle</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><AlertCircle size={18} className="text-warning" /> Considerations:</h4>
                                        <ul className="text-gray-600 space-y-1 ml-6 list-disc list-inside text-sm">
                                            <li>Higher initial purchase cost</li>
                                            <li>Larger physical size</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Features to Look For */}
                        <div className="bg-gray-100 p-8 rounded-xl">
                            <h4 className="font-bold text-xl mb-4 text-gray-800">What Features Should I Look for?</h4>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    ['Print Speed (PPM)', 'Pages per minute'],
                                    ['Monthly Duty Cycle', 'Recommended monthly volume'],
                                    ['Duplex Printing', 'Automatic double-sided printing'],
                                    ['Connectivity', 'WiFi, Ethernet, USB'],
                                    ['Multifunction', 'Print, scan, copy, fax'],
                                    ['Mobile Printing', 'Smartphone compatibility']
                                ].map(([title, desc], i) => (
                                    <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                                        <div className="font-bold text-gray-900">{title}</div>
                                        <div className="text-sm text-gray-500">{desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* 2. Ink & Toner Buying Guide */}
                <section id="ink-toner-guide">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <div className="flex items-center gap-3 mb-6 text-secondary">
                            <Droplet size={36} />
                            <h2 className="text-3xl font-bold text-gray-900">Ink & Toner Buying Guide</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                            {/* Find Correct Cartridge */}
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold mb-4 text-gray-800">How Do I Find the Correct Cartridge?</h3>
                                <p className="text-gray-600 mb-4">The most important step is locating your exact printer model number.</p>
                                <ul className="space-y-2 mb-4 text-gray-700">
                                    <li className="flex items-center gap-2"><Search size={16} className="text-secondary" /> Front panel of the printer</li>
                                    <li className="flex items-center gap-2"><Search size={16} className="text-secondary" /> Inside the ink access door</li>
                                    <li className="flex items-center gap-2"><Search size={16} className="text-secondary" /> On the back label</li>
                                </ul>
                                <p className="text-sm text-gray-500 italic border-l-4 border-secondary/20 pl-3">
                                    Once you know the model number, check the compatible cartridge number listed in the printer manual.
                                </p>
                            </div>

                            {/* OEM vs Compatible */}
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold mb-4 text-gray-800">OEM vs. Compatible</h3>
                                <div className="space-y-4">
                                    <div>
                                        <span className="font-bold text-slate-700 block mb-1">OEM (Original Equipment Manufacturer)</span>
                                        <p className="text-sm text-gray-600">Produced by the brand. Consistent quality but higher price.</p>
                                    </div>
                                    <div>
                                        <span className="font-bold text-secondary block mb-1">Compatible Cartridges</span>
                                        <p className="text-sm text-gray-600">Produced by third-parties. Lower cost, similar yield. Always verify compatibility.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Page Yield */}
                        <div className="bg-slate-50 p-8 rounded-xl">
                            <h3 className="text-xl font-bold mb-3 text-slate-900 flex items-center gap-2"><FileText size={24} /> What Is Page Yield?</h3>
                            <p className="text-slate-800 mb-4">
                                Page yield refers to the estimated number of pages a cartridge can print. Real-world results vary based on coverage, color usage, and graphics.
                            </p>
                            <div className="bg-white/60 p-4 rounded-lg inline-block">
                                <span className="font-semibold text-slate-700">Pro Tip:</span> If you print frequently, high-yield cartridges often provide better long-term value.
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* 3. Reduce Costs */}
                <section id="reduce-costs">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-teal-100"
                    >
                        <div className="flex items-center gap-3 mb-6 text-teal-600">
                            <DollarSign size={36} />
                            <h2 className="text-3xl font-bold text-gray-900">How Can I Reduce Printing Costs?</h2>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: 'Enable Duplex', desc: 'Printing on both sides reduces paper usage by up to 50%.' },
                                { title: 'Use Draft Mode', desc: 'For internal documents, draft mode uses less ink.' },
                                { title: 'High-Yield Cartridges', desc: 'Higher upfront cost but lower cost per page.' },
                                { title: 'Monitor Volume', desc: 'Avoid purchasing a printer that exceeds your usage needs.' },
                                { title: 'Turn Off Power', desc: 'Extend component life and reduce energy consumption.' },
                            ].map((tip, i) => (
                                <div key={i} className="flex gap-3 items-start">
                                    <CheckCircle className="text-teal-500 mt-1 flex-shrink-0" size={20} />
                                    <div>
                                        <h4 className="font-bold text-gray-800">{tip.title}</h4>
                                        <p className="text-sm text-gray-600">{tip.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* 4. Maintenance Guide */}
                <section id="maintenance">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <div className="flex items-center gap-3 mb-6 text-slate-600">
                            <Wrench size={36} />
                            <h2 className="text-3xl font-bold text-gray-900">Printer Maintenance Guide</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-slate-400">
                                <h3 className="font-bold text-lg mb-3">Inkjet Maintenance</h3>
                                <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                                    <li>Run cleaning cycles when needed</li>
                                    <li>Print regularly to prevent drying</li>
                                    <li>Keep printer dust-free</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-slate-400">
                                <h3 className="font-bold text-lg mb-3">Laser Maintenance</h3>
                                <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                                    <li>Use high-quality toner</li>
                                    <li>Replace maintenance kits</li>
                                    <li>Avoid overloading trays</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-slate-400">
                                <h3 className="font-bold text-lg mb-3">Storage Tips</h3>
                                <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                                    <li>Store at room temperature</li>
                                    <li>Keep in original packaging</li>
                                    <li>Avoid direct sunlight</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-6 bg-slate-50 p-6 rounded-xl">
                            <h4 className="font-bold text-slate-800 mb-2">Preventing Paper Jams</h4>
                            <p className="text-gray-700 text-sm">
                                Use clean, dry paper and adjust guides properly. Avoid overfilled trays, damaged paper, or incorrect size settings.
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* 5. Wireless & Mobile */}
                <section id="wireless">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="grid md:grid-cols-2 gap-8 items-center bg-primary text-white p-8 rounded-3xl"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <Wifi size={32} className="text-blue-200" />
                                <h2 className="text-3xl font-bold">Wireless & Mobile Printing</h2>
                            </div>
                            <p className="text-blue-50/80 mb-6">
                                Print without physical cables using WiFi, Cloud printing, or AirPrint®. Ideal for shared networks and remote work.
                            </p>
                            <h4 className="font-bold text-white mb-3">Remote Work Setup:</h4>
                            <ul className="space-y-2 text-blue-100 text-sm">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div> Connect printer to WiFi</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div> Install updated drivers</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div> Configure mobile apps</li>
                            </ul>
                        </div>
                        <div className="flex justify-center">
                            <Smartphone size={180} className="text-white/10" />
                        </div>
                    </motion.div>
                </section>

                {/* 6. Business Solutions */}
                <section id="business">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                    >
                        <div className="flex items-center gap-3 mb-6 text-slate-700">
                            <Briefcase size={36} />
                            <h2 className="text-3xl font-bold text-gray-900">Business Printing Solutions</h2>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1">
                                <h4 className="font-bold text-lg mb-3">What Businesses Should Consider:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Monthly Print Volume', 'Cost Per Page', 'Print Speed', 'Security Features', 'Network Capability'].map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">{tag}</span>
                                    ))}
                                </div>
                                <p className="mt-4 text-gray-600 text-sm">Laser printers are typically preferred for business environments due to speed and durability.</p>
                            </div>
                            <div className="flex-1 bg-slate-50 p-6 rounded-xl">
                                <h4 className="font-bold text-lg mb-3">Total Cost of Ownership</h4>
                                <p className="text-gray-600 text-sm mb-4">Total cost includes not just the purchase price, but ink/toner, maintenance, and energy consumption.</p>
                                <div className="font-semibold text-slate-800">Evaluating long-term costs = Smarter decisions.</div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Compatibility & Footer Info */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="grid md:grid-cols-2 gap-8"
                >
                    {/* Verify Compatibility */}
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <div className="flex items-center gap-2 mb-4 text-secondary">
                            <Search size={28} />
                            <h3 className="font-bold text-xl text-gray-900">Verify Compatibility</h3>
                        </div>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-center gap-3 text-gray-700"><CheckCircle size={18} className="text-secondary" /> Confirm printer model</li>
                            <li className="flex items-center gap-3 text-gray-700"><CheckCircle size={18} className="text-secondary" /> Verify cartridge number</li>
                            <li className="flex items-center gap-3 text-gray-700"><CheckCircle size={18} className="text-secondary" /> Review compatibility details</li>
                        </ul>
                        <p className="text-sm text-gray-500">Prevents incorrect purchases and delays.</p>
                    </div>

                    {/* Independent Notice */}
                    <div className="bg-gray-100 p-8 rounded-xl text-center flex flex-col justify-center">
                        <div className="flex justify-center mb-4 text-gray-500"><ShieldCheck size={32} /></div>
                        <h3 className="font-bold text-gray-800 mb-2">Independent Retailer Notice</h3>
                        <p className="text-xs text-gray-500 mb-4">
                            Smart Ink Guide is an independent online retailer. We are not affiliated with or endorsed by printer manufacturers unless explicitly stated.
                        </p>
                    </div>
                </motion.div>

                {/* Contact/Support - Redesigned */}
                <motion.section
                    className="py-12 border-t border-gray-200"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Printing Support Resources</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Need help finding the right product or have a question about your order? Our team is ready to assist you.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {/* Email Support */}
                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
                            whileHover={{ y: -5 }}
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-4">
                                <Mail size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Support</h3>
                            <p className="text-gray-500 mb-4 flex-grow">
                                Send us your questions anytime. We typically respond within 24 business hours.
                            </p>
                            <a
                                href="mailto:support@smartinkguide.com"
                                className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                            >
                                support@smartinkguide.com
                            </a>
                        </motion.div>

                        {/* Location */}
                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
                            whileHover={{ y: -5 }}
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-4">
                                <MapPin size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Mailing Address</h3>
                            <p className="text-gray-500 mb-4 flex-grow">
                                Smart Ink Guide<br />
                                30 N GOULD STREET SUITE R<br />
                                SHERIDAN, WY 82801, USA
                            </p>
                            <span className="text-sm text-gray-400">Headquarters</span>
                        </motion.div>

                        {/* Website */}
                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
                            whileHover={{ y: -5 }}
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-4">
                                <Globe size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Online Resources</h3>
                            <p className="text-gray-500 mb-4 flex-grow">
                                Visit our website for the latest guides, articles, and product information.
                            </p>
                            <a
                                href="https://www.smartinkguide.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                            >
                                www.smartinkguide.com
                            </a>
                        </motion.div>
                    </div>
                </motion.section>

            </div>
        </div>
    );
};

export default GuidesAndResources;
