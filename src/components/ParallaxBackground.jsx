"use client";

import { useSmoothScroll } from "@/providers/SmoothScrollProvider";

export default function ParallaxBackground() {
    const { scrollY } = useSmoothScroll();

    return (
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -2 }}>
            {/* Mid layer - geometric shapes */}
            <svg
                className="absolute opacity-10"
                style={{
                    top: "15%",
                    right: "15%",
                    transform: `translateY(${scrollY * 0.15}px) rotate(${scrollY * 0.02}deg)`,
                }}
                width="120"
                height="120"
                viewBox="0 0 120 120"
            >
                <polygon
                    points="60,15 105,95 15,95"
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="1"
                />
            </svg>

            <svg
                className="absolute opacity-10"
                style={{
                    top: "45%",
                    left: "8%",
                    transform: `translateY(${scrollY * -0.12}px) rotate(${scrollY * -0.03}deg)`,
                }}
                width="80"
                height="80"
                viewBox="0 0 80 80"
            >
                <rect
                    x="10"
                    y="10"
                    width="60"
                    height="60"
                    fill="none"
                    stroke="var(--secondary)"
                    strokeWidth="1"
                    rx="8"
                />
            </svg>

            <svg
                className="absolute opacity-8"
                style={{
                    bottom: "25%",
                    right: "25%",
                    transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)`,
                }}
                width="60"
                height="60"
                viewBox="0 0 60 60"
            >
                <polygon
                    points="15,10 45,10 50,50 10,50"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1"
                />
            </svg>

            {/* Foreground layer - sparkles (fastest) */}
            <svg
                className="absolute opacity-40"
                style={{
                    top: "20%",
                    left: "20%",
                    transform: `translateY(${scrollY * 0.25}px)`,
                }}
                width="16"
                height="16"
                viewBox="0 0 16 16"
            >
                <path d="M8 0L9 7L8 16L7 7Z" fill="var(--primary)" />
                <path d="M0 8L7 9L16 8L7 7Z" fill="var(--primary)" />
            </svg>
            <svg
                className="absolute opacity-50"
                style={{
                    top: "35%",
                    right: "30%",
                    transform: `translateY(${scrollY * -0.3}px)`,
                }}
                width="12"
                height="12"
                viewBox="0 0 12 12"
            >
                <path d="M6 0L7 5L6 12L5 5Z" fill="var(--secondary)" />
                <path d="M0 6L5 7L12 6L5 5Z" fill="var(--secondary)" />
            </svg>
            <svg
                className="absolute opacity-30"
                style={{
                    bottom: "40%",
                    left: "40%",
                    transform: `translateY(${scrollY * 0.2}px)`,
                }}
                width="16"
                height="16"
                viewBox="0 0 16 16"
            >
                <path d="M8 0L9 7L8 16L7 7Z" fill="var(--accent)" />
                <path d="M0 8L7 9L16 8L7 7Z" fill="var(--accent)" />
            </svg>
            <svg
                className="absolute opacity-60"
                style={{
                    top: "60%",
                    right: "15%",
                    transform: `translateY(${scrollY * -0.35}px)`,
                }}
                width="8"
                height="8"
                viewBox="0 0 8 8"
            >
                <path d="M4 0L5 3L4 8L3 3Z" fill="var(--primary)" />
                <path d="M0 4L3 5L8 4L3 3Z" fill="var(--primary)" />
            </svg>
            <svg
                className="absolute opacity-40"
                style={{
                    bottom: "30%",
                    left: "15%",
                    transform: `translateY(${scrollY * 0.28}px)`,
                }}
                width="12"
                height="12"
                viewBox="0 0 12 12"
            >
                <path d="M6 0L7 5L6 12L5 5Z" fill="var(--secondary)" />
                <path d="M0 6L5 7L12 6L5 5Z" fill="var(--secondary)" />
            </svg>
            <svg
                className="absolute opacity-50"
                style={{
                    top: "75%",
                    left: "60%",
                    transform: `translateY(${scrollY * -0.22}px)`,
                }}
                width="8"
                height="8"
                viewBox="0 0 8 8"
            >
                <path d="M4 0L5 3L4 8L3 3Z" fill="var(--accent)" />
                <path d="M0 4L3 5L8 4L3 3Z" fill="var(--accent)" />
            </svg>

            {/* Extra sparkles */}
            <svg
                className="absolute opacity-30"
                style={{
                    top: "25%",
                    right: "40%",
                    transform: `translateY(${scrollY * 0.18}px)`,
                }}
                width="8"
                height="8"
                viewBox="0 0 8 8"
            >
                <path d="M4 0L5 3L4 8L3 3Z" fill="white" />
                <path d="M0 4L3 5L8 4L3 3Z" fill="white" />
            </svg>
            <svg
                className="absolute opacity-25"
                style={{
                    top: "55%",
                    left: "25%",
                    transform: `translateY(${scrollY * -0.2}px)`,
                }}
                width="8"
                height="8"
                viewBox="0 0 8 8"
            >
                <path d="M4 0L5 3L4 8L3 3Z" fill="white" />
                <path d="M0 4L3 5L8 4L3 3Z" fill="white" />
            </svg>
        </div>
    );
}