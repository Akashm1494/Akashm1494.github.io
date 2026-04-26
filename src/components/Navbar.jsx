import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [savedScrollY, setSavedScrollY] = useState(0);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const onScroll = () => {
            const currentScroll = window.scrollY;
            setSavedScrollY(currentScroll);
            setScrolled(currentScroll > 50);
        };

        window.addEventListener("scroll", onScroll);
        onScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        // Prevent body scroll when mobile menu is open
        if (mobileOpen) {
            document.body.style.position = 'fixed';
            document.body.style.top = `-${savedScrollY}px`;
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';
            // Keep scrolled state based on saved position
            setScrolled(savedScrollY > 50);
        } else {
            // Restore scroll position
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
            if (scrollY) {
                const scrollPos = parseInt(scrollY || '0') * -1;
                window.scrollTo(0, scrollPos);
                setScrolled(scrollPos > 50);
            }
        }
    }, [mobileOpen, savedScrollY]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-background/80 backdrop-blur-xl border-b border-border"
                : "bg-transparent border-b border-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16 bg-transparent">
                <a href="#" className="text-lg sm:text-xl font-bold text-gradient font-mono bg-transparent">
                    {"<AM />"}
                </a>

                {/* Desktop */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={toggleTheme}
                            className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                            aria-label="Toggle theme"
                        >
                            {mounted && (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
                        </button>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="text-sm font-semibold px-5 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                        >
                            Get In Touch
                        </a>
                    </li>
                </ul>

                {/* Mobile toggle */}
                <div className="md:hidden flex items-center gap-2">
                    <button
                        onClick={toggleTheme}
                        className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-foreground"
                        aria-label="Toggle theme"
                    >
                        {mounted && (theme === "dark" ? <Sun size={16} /> : <Moon size={16} />)}
                    </button>
                    <button
                        className="text-foreground"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu - Full Screen with Scroll */}
            <AnimatePresence mode="wait">
                {mobileOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden fixed inset-0 top-14 sm:top-16 bg-background z-40"
                    >
                        <div className="h-full overflow-y-auto">
                            <ul className="flex flex-col gap-6 p-8 min-h-full">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="text-xl font-medium text-foreground hover:text-primary transition-colors block"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                                <li className="mt-4">
                                    <a
                                        href="#contact"
                                        onClick={() => setMobileOpen(false)}
                                        className="block text-center text-base font-semibold px-6 py-3 rounded-lg bg-primary text-primary-foreground"
                                    >
                                        Get In Touch
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
