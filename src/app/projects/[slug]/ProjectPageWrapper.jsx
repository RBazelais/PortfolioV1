"use client";

import PageTransition from "@/components/PageTransition";

export default function ProjectPageWrapper({ children }) {
    return (
        <PageTransition>
            {children}
        </PageTransition>
    );
}