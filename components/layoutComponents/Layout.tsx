import Link from "next/link";
import ThemeToggle from "@/components/others/ThemeToggle";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <header className="border-b">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold">
                        Smart
                        <span className="bg-linear-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                            Tools
                        </span>
                    </Link>
                    <div className="flex items-center gap-4">
                    <Link href="/aiTools" aria-label="Browse AI tools collection" className="hover:bg-slate-100 dark:hover:bg-slate-900 p-2 rounded-md">
                       AI COLLECTION
                    </Link>
                    <ThemeToggle />
                    </div>
                </div>
            </header>

            <main className="min-h-screen bg-background text-foreground">{children}</main>

            <footer className="border-t mt-16">
                <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-500">
                    ©2026 Smart Tools Directory
                </div>
            </footer>
        </>
    );
}
