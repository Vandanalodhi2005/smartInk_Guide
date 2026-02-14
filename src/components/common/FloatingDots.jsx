import React from 'react';
import { motion } from 'framer-motion';

const FloatingDots = () => {
    const dots = Array.from({ length: 20 });

    return (
        <div className="floating-svg-pattern">
            <svg width="100%" height="100%">
                {dots.map((_, i) => (
                    <motion.circle
                        key={i}
                        r={Math.random() * 3 + 1}
                        fill="currentColor"
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            opacity: Math.random() * 0.5,
                        }}
                        animate={{
                            y: ["-10%", "110%"],
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 10,
                        }}
                    />
                ))}
            </svg>
        </div>
    );
};

export default FloatingDots;
