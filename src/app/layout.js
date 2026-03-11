import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import ParallaxBackground from "@/components/ParallaxBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Rachél Bazelais | UI Engineer",
	description: "UI Engineer focused on building intuitive interfaces and experiences for web and games.",
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
		},
		"max-image-preview": "large",
	},
	other: {
		"google-extended": "noindex, nofollow, nosnippet, noimageindex, notranslate",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta name="robots" content="index, follow" />
				<meta name="googlebot" content="index, follow" />
				<meta name="bingbot" content="index, follow" />
				<meta name="AdsBot-Google" content="noindex, nofollow" />
			</head>
			<body className={inter.className}>
                <a
                    href="#about"
                    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--accent)] focus:text-[var(--bg-base)] focus:rounded"
                >
                    Skip to main content
                </a>
                <SmoothScrollProvider>
                    <ParallaxBackground />
                    {children}
                </SmoothScrollProvider>
            </body>
		</html>
	);
}
