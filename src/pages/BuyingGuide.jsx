import React from 'react';
import { motion } from 'framer-motion';
import {
    Printer, Droplet, DollarSign, Briefcase, Wrench, FileText, Smartphone, Search, ShieldCheck, Mail, MapPin, Globe, CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const BuyingGuide = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
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
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Smart Ink Guide Resource Center</h1>
                        <p className="text-xl md:text-2xl text-blue-50/90 mb-8 max-w-3xl mx-auto">
                            Choosing the right printer or cartridge doesn’t have to be complicated.
                            Our Buying Guide helps you make informed decisions for your home or business.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">

                {/* 1. Choosing the Right Printer */}
                <section>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mb-8"
                    >
                        <div className="flex items-center gap-3 mb-4 text-secondary">
                            <Printer size={32} />
                            <h2 className="text-3xl font-bold text-gray-900">1. Choosing the Right Printer</h2>
                        </div>
                        <p className="text-gray-600 text-lg mb-6">
                            Selecting a printer depends on how often and what type of documents you print.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            className="bg-white p-8 rounded-xl shadow-md border-t-4 border-secondary"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">Inkjet Printers</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-secondary mb-2">Best suited for:</h4>
                                    <ul className="list-disc list-inside text-gray-600 ml-2">
                                        <li>Home users</li>
                                        <li>Students</li>
                                        <li>Photo printing</li>
                                        <li>Low-to-moderate monthly printing</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-success mb-2">Advantages:</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2 text-gray-700"><CheckCircle size={16} className="text-success" /> Lower upfront cost</li>
                                        <li className="flex items-center gap-2 text-gray-700"><CheckCircle size={16} className="text-success" /> Better photo quality</li>
                                        <li className="flex items-center gap-2 text-gray-700"><CheckCircle size={16} className="text-success" /> Compact designs</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="bg-white p-8 rounded-xl shadow-md border-t-4 border-primary"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">Laser Printers</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-primary mb-2">Best suited for:</h4>
                                    <ul className="list-disc list-inside text-gray-600 ml-2">
                                        <li>Offices</li>
                                        <li>Small businesses</li>
                                        <li>High-volume document printing</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-success mb-2">Advantages:</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2 text-gray-700"><CheckCircle size={16} className="text-success" /> Faster print speeds</li>
                                        <li className="flex items-center gap-2 text-gray-700"><CheckCircle size={16} className="text-success" /> Lower cost per page</li>
                                        <li className="flex items-center gap-2 text-gray-700"><CheckCircle size={16} className="text-success" /> High monthly duty cycle</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="mt-8 bg-slate-50 p-6 rounded-lg"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h4 className="font-bold text-lg mb-3 text-gray-800">Key Features to Consider:</h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
                            <div className="flex items-center gap-2"><span>•</span> Print speed (PPM)</div>
                            <div className="flex items-center gap-2"><span>•</span> Monthly duty cycle</div>
                            <div className="flex items-center gap-2"><span>•</span> Wireless connectivity</div>
                            <div className="flex items-center gap-2"><span>•</span> Automatic duplex printing</div>
                            <div className="flex items-center gap-2"><span>•</span> Scan & copy functionality</div>
                            <div className="flex items-center gap-2"><span>•</span> Mobile printing compatibility</div>
                        </div>
                        <p className="mt-4 text-sm text-gray-600 italic">Understanding these features helps you avoid overpaying for features you don’t need.</p>
                    </motion.div>
                </section>

                {/* 2. How to Choose Ink/Toner */}
                <section>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <div className="flex items-center gap-3 mb-6 text-secondary">
                            <Droplet size={32} />
                            <h2 className="text-3xl font-bold text-gray-900">2. How to Choose the Right Ink or Toner</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Step 1: Find Model Number",
                                    desc: "Locate the exact model number on your printer. Even small differences can affect compatibility."
                                },
                                {
                                    title: "Step 2: OEM vs Compatible",
                                    desc: "OEMs are made by the brand (higher cost). Compatibles are third-party (cost-effective). confirm compatibility."
                                },
                                {
                                    title: "Step 3: Standard vs High-Yield",
                                    desc: "High-yield prints more pages at a lower cost per page. Standard is better for occasional printing."
                                }
                            ].map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="text-4xl font-bold text-gray-200 mb-2">{idx + 1}</div>
                                    <h3 className="font-bold text-lg mb-2 text-gray-800">{step.title}</h3>
                                    <p className="text-gray-600 text-sm">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* 3. Reduce Printing Costs */}
                <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <div className="flex items-center gap-3 mb-6 text-success">
                            <DollarSign size={32} />
                            <h2 className="text-3xl font-bold text-gray-900">3. How to Reduce Printing Costs</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-success mt-1 flex-shrink-0" size={20} />
                                    <span className="text-gray-700">Enable duplex (double-sided) printing to save paper.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-success mt-1 flex-shrink-0" size={20} />
                                    <span className="text-gray-700">Use draft mode for internal documents to save ink.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-success mt-1 flex-shrink-0" size={20} />
                                    <span className="text-gray-700">Choose high-yield cartridges for better value.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-success mt-1 flex-shrink-0" size={20} />
                                    <span className="text-gray-700">Monitor monthly print volume to avoid waste.</span>
                                </li>
                            </ul>
                            <div className="bg-slate-50 p-6 rounded-xl">
                                <p className="text-muted font-medium text-lg">
                                    "Businesses should calculate total cost of ownership — not just the printer’s purchase price."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* 4. Small Business & 5. Maintenance */}
                <div className="grid md:grid-cols-2 gap-8">
                    <section>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <div className="flex items-center gap-3 mb-6 text-primary">
                                <Briefcase size={28} />
                                <h2 className="text-2xl font-bold text-gray-900">4. Business Printers</h2>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                                <h4 className="font-bold mb-4 text-gray-800">What to Look For:</h4>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-center gap-2 text-gray-700"><span>•</span> High monthly duty cycle</li>
                                    <li className="flex items-center gap-2 text-gray-700"><span>•</span> Network connectivity</li>
                                    <li className="flex items-center gap-2 text-gray-700"><span>•</span> Multifunction capability</li>
                                    <li className="flex items-center gap-2 text-gray-700"><span>•</span> Secure printing features</li>
                                </ul>
                                <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                                    Laser printers are generally preferred for office environments due to speed and efficiency.
                                </p>
                            </div>
                        </motion.div>
                    </section>

                    <section>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="flex items-center gap-3 mb-6 text-warning">
                                <Wrench size={28} />
                                <h2 className="text-2xl font-bold text-gray-900">5. Maintenance Tips</h2>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle size={18} className="text-warning" /> Clean printheads regularly
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle size={18} className="text-warning" /> Store cartridges properly
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle size={18} className="text-warning" /> Use recommended supplies
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle size={18} className="text-warning" /> Keep firmware updated
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle size={18} className="text-warning" /> Power off properly
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </section>
                </div>

                {/* 6, 7, 8 Sections */}
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Section 6 */}
                    <motion.div
                        className="bg-white p-6 rounded-xl shadow-sm"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <div className="flex items-center gap-2 mb-4 text-secondary">
                            <FileText size={24} />
                            <h3 className="font-bold text-lg text-gray-900">6. Page Yield</h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">
                            Estimated number of pages a cartridge can print.
                        </p>
                        <ul className="text-sm space-y-2 text-gray-700">
                            <li>• Actual yield may vary</li>
                            <li>• Coverage affects output</li>
                            <li>• Graphics use more ink</li>
                        </ul>
                    </motion.div>

                    {/* Section 7 */}
                    <motion.div
                        className="bg-white p-6 rounded-xl shadow-sm"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="flex items-center gap-2 mb-4 text-secondary">
                            <Smartphone size={24} />
                            <h3 className="font-bold text-lg text-gray-900">7. Mobile Printing</h3>
                        </div>
                        <ul className="text-sm space-y-2 text-gray-700">
                            <li>• WiFi connectivity</li>
                            <li>• Cloud printing support</li>
                            <li>• Mobile app compatibility</li>
                            <li>• AirPrint® services</li>
                        </ul>
                    </motion.div>

                    {/* Section 8 */}
                    <motion.div
                        className="bg-white p-6 rounded-xl shadow-sm"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center gap-2 mb-4 text-secondary">
                            <Search size={24} />
                            <h3 className="font-bold text-lg text-gray-900">8. Verify Compatibility</h3>
                        </div>
                        <ul className="text-sm space-y-2 text-gray-700">
                            <li>• Confirm printer model #</li>
                            <li>• Verify cartridge number</li>
                            <li>• Check product listing</li>
                            <li>• Contact support if unsure</li>
                        </ul>
                    </motion.div>
                </div>

                {/* Independent Retailer Notice */}
                <motion.section
                    className="bg-gray-100 p-8 rounded-2xl text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <div className="flex justify-center mb-4 text-gray-600">
                        <ShieldCheck size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Independent Retailer Notice</h3>
                    <p className="text-gray-600 text-sm max-w-2xl mx-auto">
                        Smart Ink Guide operates as an independent online retailer.
                        We are not affiliated with or endorsed by printer manufacturers unless explicitly stated.
                        All brand names and trademarks are the property of their respective owners.
                    </p>
                </motion.section>

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

export default BuyingGuide;
