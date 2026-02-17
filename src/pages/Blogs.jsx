import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { blogs } from '../data/blogs';
import './Blogs.css';

const Blogs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="blogs-redesign">
      <div className="blogs-main-container">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="blogs-hero-header"
        >
          <h1>SmartInk Chronicles</h1>
          <p>
            Insights, guides, and professional advice to master your printing ecosystem.
          </p>
        </motion.header>

        {/* Blog Directory */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="blogs-grid-premium"
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              variants={itemVariants}
              className="blog-card-premium"
            >
              <div className="blog-img-wrapper">
                <span className="blog-category-badge">{blog.category}</span>
                <img src={blog.image} alt={blog.title} />
              </div>

              <div className="blog-info-content">
                <div className="blog-meta-top">
                  <Calendar size={14} />
                  <span>{blog.date}</span>
                  <span className="meta-dot"></span>
                  <span>{blog.readTime || "5 min read"}</span>
                </div>

                <h2>{blog.title}</h2>
                <p className="blog-excerpt-premium">{blog.excerpt}</p>

                <Link to={`/blogs/${blog.slug}`} className="blog-btn-premium">
                  Explore Full Guide
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;
