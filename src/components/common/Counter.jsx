import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useSpring, useTransform } from 'framer-motion';

const Counter = ({ value, duration = 2, suffix = "" }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const spring = useSpring(0, {
        duration: duration * 1000,
        bounce: 0,
    });

    const display = useTransform(spring, (current) =>
        Math.floor(current).toLocaleString() + suffix
    );

    useEffect(() => {
        if (inView) {
            spring.set(value);
        }
    }, [inView, value, spring]);

    return (
        <span ref={ref}>
            <motion.span>{display}</motion.span>
        </span>
    );
};

export default Counter;
