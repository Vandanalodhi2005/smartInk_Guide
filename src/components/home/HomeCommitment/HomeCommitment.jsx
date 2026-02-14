import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./HomeCommitment.css";

const stats = [
  { value: 100, suffix: "%", label: "Transparency" },
  { value: 24, suffix: "/7", label: "Secure Shopping" },
  { value: 5000, suffix: "+", label: "Happy Customers" },
];

const HomeCommitment = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="commitment-section">
      {/* Animated Background Blobs */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <div className="commitment-container">
        {/* LEFT CONTENT */}
        <motion.div
          className="commitment-content"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Our Commitment to Excellence
          </h2>

          <p>
            At <strong>Prints Carts</strong>, we believe in transparent communication,
            verified product listings, and customer-first service. Our platform
            is built on trust, performance, and long-term reliability.
          </p>

          <p>
            We continuously enhance our technology and service to make
            browsing, comparing, and purchasing printing essentials seamless.
          </p>

          <button className="premium-btn">
            Learn More
          </button>
        </motion.div>

        {/* RIGHT STATS */}
        <div ref={ref} className="commitment-stats">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              className="stat-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <span className="stat-value">
                {inView && (
                  <CountUp
                    end={item.value}
                    duration={2}
                  />
                )}
                {item.suffix}
              </span>
              <span className="stat-label">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Noise Overlay */}
      <div className="noise-overlay"></div>
    </section>
  );
};

export default HomeCommitment;
