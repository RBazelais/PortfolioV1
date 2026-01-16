"use client";

import { motion, useReducedMotion } from "framer-motion";

// Shared animation config
const defaultEasing = [0.25, 0.1, 0.25, 1];

// Fade in a single element when it enters viewport
export function FadeIn({ 
    children, 
    delay = 0, 
    duration = 0.5,
    y = 20,
    className = "",
    once = true 
}) {
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, amount: 0.3 }}
            transition={{
                duration,
                delay,
                ease: defaultEasing,
            }}
        >
            {children}
        </motion.div>
    );
}

// Fade in a section (like About, Experience, Projects)
export function FadeInSection({ children, className = "", id, ...props }) {
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) {
        return <section id={id} className={className} {...props}>{children}</section>;
    }

    return (
        <motion.section
            id={id}
            className={className}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.6,
                ease: defaultEasing,
            }}
            {...props}
        >
            {children}
        </motion.section>
    );
}

// Container for staggered list items (supports custom element via `as` prop)
export function StaggerContainer({ 
    children, 
    className = "", 
    staggerDelay = 0.1, 
    as = "div",
    ...props 
}) {
    const prefersReducedMotion = useReducedMotion();
    const Component = motion[as] || motion.div;

    if (prefersReducedMotion) {
        const StaticComponent = as;
        return <StaticComponent className={className} {...props}>{children}</StaticComponent>;
    }

    return (
        <Component
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            {...props}
        >
            {children}
        </Component>
    );
}

// Individual stagger item (use inside StaggerContainer)
export function StaggerItem({ children, className = "", as = "div", ...props }) {
    const prefersReducedMotion = useReducedMotion();
    const Component = motion[as] || motion.div;

    if (prefersReducedMotion) {
        const StaticComponent = as;
        return <StaticComponent className={className} {...props}>{children}</StaticComponent>;
    }

    return (
        <Component
            className={className}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5,
                        ease: defaultEasing,
                    },
                },
            }}
            {...props}
        >
            {children}
        </Component>
    );
}

// Variants for direct use with motion components (for tab switching)
export const staggerContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const staggerItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: defaultEasing,
        },
    },
};