import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen max-w-4xl mx-auto px-6 py-12 lg:py-24 flex flex-col items-center justify-center">
            <div className="text-center space-y-6">
                <h1 className="text-6xl font-bold text-[var(--foreground)]">404</h1>
                <p className="text-xl text-[var(--muted)]">
                    This project could not be found.
                </p>
                <Link
                    href="/#projects"
                    className="inline-flex items-center text-[var(--muted)] hover:text-[var(--primary)] transition-colors mb-12 group"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Back to projects
                </Link>
            </div>
        </div>
    );
}
