"use client";

import { motion, useReducedMotion } from "framer-motion";

const pageVariants = {
    initial: { 
        opacity: 0, 
        y: 20 
    },
    animate: { 
        opacity: 1, 
        y: 0,
        transition: { 
            duration: 0.3, 
            ease: [0.25, 0.1, 0.25, 1] 
        }
    },
    exit: { 
        opacity: 0, 
        y: -20,
        transition: { 
            duration: 0.3, 
            ease: [0.25, 0.1, 0.25, 1] 
        }
    }
};

export default function PageTransition({ children, className = "" }) {
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            className={className}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
        >
            {children}
        </motion.div>
    );
}