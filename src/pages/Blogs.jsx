import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom';
import ecofriendly from '../assets/ecofriendly.png';
import inkjetvstoner from '../assets/inkjetvstoner.jpg';
import moneysave from '../assets/moneysave.jpg';
import printerisoffline from '../assets/printerisoffline.png';
import top10 from '../assets/top10.jpg';
import ultimateguide from '../assets/ultimateguide.jpg';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Top 10 Home Printers in 2026 — Best Picks for Students, Families & Remote Workers",
      excerpt: "Choosing the best home printer in 2026 has become more important than ever. Find out our top picks across different categories.",
      date: "February 11, 2026",
      slug: "top-10-home-printers-2026",
      category: "Buying Guide",
      // Placeholder image since we don't have one yet, or I can use a color block
      imageColor: "bg-blue-100",
      image: top10
    },
     {
      id: 2,
      title: "Inkjet vs Laser Printers (2026 Buying Guide) — Which One Is Right for You?",
      excerpt: "Should you buy an inkjet printer or a laser printer? We break down the technical and financial differences to help you decide.",
      date: "February 11, 2026",
      slug: "inkjet-vs-laser-printers-2026",
      category: "Buying Guide",
      imageColor: "bg-indigo-100",
      image: inkjetvstoner
    },
     {
      id: 3,
      title: "How to Save Money on Ink & Toner — Smart Printing Tips Every User Should Know (2026 Guide)",
      excerpt: "Ink costs can be frustrating. Learn instant ways to reduce printing costs, optimize settings, and save 30-60% per year.",
      date: "February 11, 2026",
      slug: "save-money-on-ink-toner-2026",
      category: "Cost Saving Tips",
      imageColor: "bg-green-100",
      image: moneysave
    },
    {
      id: 4,
      title: "The Ultimate Guide to Setting Up a New Printer (Windows & macOS) — 2026 Edition",
      excerpt: "Frustrated with printer setup? Follow our step-by-step guide for unboxing, driver installation, and troubleshooting common connection issues.",
      date: "February 11, 2026",
      slug: "printer-setup-guide-2026",
      category: "Technical Guide",
      imageColor: "bg-purple-100",
      image: ultimateguide
    },
    {
      id: 5,
      title: "Why Your Printer Is Offline — 7 Quick Fixes You Can Try at Home (2026 Guide)",
      excerpt: "Is your printer refusing to connect? We break down 7 quick and effective fixes to get your printer back online in minutes.",
      date: "February 11, 2026",
      slug: "printer-offline-fix-guide-2026",
      category: "Troubleshooting",
      imageColor: "bg-red-100",
      image: printerisoffline
    },
   
    {
      id: 6,
      title: "Eco-Friendly Printing — How to Reduce Waste & Extend Printer Life (2026 Sustainability Guide)",
      excerpt: "Eco-friendly printing saves money and protects the environment. Learn how to print sustainably in 2026.",
      date: "February 11, 2026",
      slug: "eco-friendly-printing-guide-2026",
      category: "Sustainability",
      imageColor: "bg-teal-100",
      image: ecofriendly
    },
    
    
   
    
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="flex-grow">
        {/* Header Section */}
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">PrintsCarts Blog</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Your source for printing tips, reviews, and industry insights.
            </p>
          </div>
        </div>

        {/* Blog Directory */}
        <div className="container mx-auto px-4 py-12">
          {/* Using grid-cols-1 until lg to ensure single column on mobile/tablet */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Link to={`/blogs/${blog.slug}`} className="block group">
                  <div className={`h-64 ${blog.imageColor} flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity overflow-hidden`}>
                      <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" 
                      />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-semibold uppercase tracking-wide mr-3">
                      {blog.category}
                    </span>
                    <span>{blog.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <Link 
                    to={`/blogs/${blog.slug}`}
                    className="inline-block text-blue-600 font-bold hover:underline"
                  >
                    Read Article &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blogs;
