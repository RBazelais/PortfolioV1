"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScrollProvider({ children }) {
    useEffect(() => {
        // Respect reduced motion preferences
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
            return;
        }

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Handle anchor links
        const handleAnchorClick = (e) => {
            const href = e.target.closest("a")?.getAttribute("href");
            if (href?.startsWith("#")) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    lenis.scrollTo(target, { offset: -96 }); // Account for scroll-padding
                }
            }
        };

        document.addEventListener("click", handleAnchorClick);

        return () => {
            lenis.destroy();
            document.removeEventListener("click", handleAnchorClick);
        };
    }, []);

    return children;
}