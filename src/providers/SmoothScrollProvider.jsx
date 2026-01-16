"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScrollContext = createContext({ scrollY: 0 });

export function useSmoothScroll() {
	return useContext(SmoothScrollContext);
}

export default function SmoothScrollProvider({ children }) {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		// Respect reduced motion preferences
		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)"
		).matches;

		if (prefersReducedMotion) {
			// Fallback to native scroll tracking
			const handleScroll = () => setScrollY(window.scrollY);
			window.addEventListener("scroll", handleScroll, { passive: true });
			return () => window.removeEventListener("scroll", handleScroll);
		}

		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true,
			smoothTouch: false,
		});

		// Update scroll position from Lenis
		lenis.on("scroll", ({ scroll }) => {
			setScrollY(scroll);
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
					lenis.scrollTo(target, { offset: -96 });
				}
			}
		};

		document.addEventListener("click", handleAnchorClick);

		return () => {
			lenis.destroy();
			document.removeEventListener("click", handleAnchorClick);
		};
	}, []);

	return (
		<SmoothScrollContext.Provider value={{ scrollY }}>
			{children}
		</SmoothScrollContext.Provider>
	);
}