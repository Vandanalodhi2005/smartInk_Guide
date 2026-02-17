import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import { ArrowLeft, Calendar, Clock, Share2, Tag, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './BlogDetails.css';

const BlogDetails = () => {
    const { slug } = useParams();
    const blog = blogs.find(b => b.slug === slug);

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!blog) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Article Not Found</h2>
                <Link to="/blogs" className="text-blue-600 hover:underline">Return to Blog</Link>
            </div>
        );
    }

    // Get related articles (exclude current, take 3)
    const relatedBlogs = blogs.filter(b => b.id !== blog.id).slice(0, 3);

    return (
        <div className="blog-details-container">
            <article className="blog-article-wrapper">
                {/* Breadcrumb */}
                <div className="blog-breadcrumb">
                    <Link to="/blogs" className="blog-back-link">
                        <ArrowLeft size={16} />
                        Back to SmartInk Chronicles
                    </Link>
                </div>

                {/* Header */}
                <header className="blog-header">
                    <span className="blog-category-tag">{blog.category}</span>
                    <h1 className="blog-title">{blog.title}</h1>

                    <div className="blog-meta">
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{blog.date}</span>
                        </div>
                        <span className="meta-separator"></span>
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>{blog.readTime || "5 min read"}</span>
                        </div>
                    </div>
                </header>

                {/* Hero Image */}
                <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    src={blog.image}
                    alt={blog.title}
                    className="blog-hero-image"
                />

                {/* Main Content */}
                <div className="blog-content">
                    {blog.content}
                </div>

                {/* Share / Tags */}
                <div className="border-t border-slate-200 pt-8 pb-12 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold">
                        <Tag size={16} />
                        <span>Filed under: {blog.category}</span>
                    </div>
                </div>

            </article>

            {/* Related Articles */}
            <div className="related-articles-section">
                <div className="max-w-[1200px] mx-auto px-6">
                    <h3 className="related-title">Continue Reading</h3>
                    <div className="related-grid">
                        {relatedBlogs.map((item) => (
                            <Link to={`/blogs/${item.slug}`} key={item.id} className="related-card">
                                <img src={item.image} alt={item.title} className="related-img" />
                                <div className="related-content">
                                    <span className="related-cat">{item.category}</span>
                                    <h3>{item.title}</h3>
                                    <div className="related-readmore mt-auto flex items-center gap-2">
                                        Read Article <ChevronRight size={16} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
