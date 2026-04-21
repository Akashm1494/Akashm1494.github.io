import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Globe, FileDown, Code2, Smartphone, Monitor } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-14 sm:pt-0">
            {/* Background effects */}
            <div className="absolute inset-0 dot-pattern opacity-30" />
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/8 rounded-full blur-[120px] animate-pulse-glow" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Left — Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left order-2 lg:order-1"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-mono text-primary text-xs sm:text-sm md:text-base mb-3 sm:mb-4 tracking-wider"
                    >
                        Hello, I'm
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 sm:mb-6"
                    >
                        <span className="text-foreground">Akash</span>{" "}
                        <span className="text-gradient glow-text">More</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                        className="text-base sm:text-lg md:text-xl text-muted-foreground mb-2 sm:mb-3"
                    >
                        Frontend-Focused Full Stack Developer
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.55 }}
                        className="text-sm sm:text-base text-muted-foreground/70 max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8 px-2 sm:px-0"
                    >
                        Crafting high-performance web &amp; mobile experiences with 3+ years of
                        expertise in React, React Native &amp; modern JavaScript ecosystems.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.65 }}
                        className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mb-6 sm:mb-8 px-4 sm:px-0"
                    >
                        <a
                            href="#projects"
                            className="px-6 sm:px-8 py-2.5 sm:py-3.5 text-sm sm:text-base rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(175_80%_50%/0.25)] text-center"
                        >
                            View My Work
                        </a>
                        <a
                            href="/resume.docx"
                            download="Akash_More_Resume.docx"
                            className="px-6 sm:px-8 py-2.5 sm:py-3.5 text-sm sm:text-base rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <FileDown size={16} className="sm:w-[18px] sm:h-[18px]" />
                            Resume
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex justify-center lg:justify-start gap-3 sm:gap-4"
                    >
                        {[
                            { icon: Github, href: "https://github.com/akashm1494", label: "GitHub" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/code-with-akash/", label: "LinkedIn" },
                            { icon: Globe, href: "https://akashm1494.github.io/", label: "Portfolio" },
                        ].map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                target={item.href.startsWith("http") ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                aria-label={item.label}
                                data-cursor-hover
                                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                            >
                                <item.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                            </a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right — Illustration */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex justify-center order-1 lg:order-2"
                >
                    <div className="relative">
                        {/* Glow behind */}
                        <div className="absolute inset-0 bg-primary/15 rounded-full blur-[80px] scale-110" />

                        {/* Floating illustration container */}
                        <motion.div
                            animate={{ y: [-12, 12, -12] }}
                            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                            className="relative"
                        >
                            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl glass-card flex items-center justify-center relative overflow-hidden">
                                {/* Decorative code elements */}
                                <div className="absolute inset-0 opacity-20">
                                    <div className="absolute top-4 left-4 font-mono text-[10px] text-primary/60 leading-relaxed">
                                        {"const dev = {"}<br />
                                        {"  name: 'Akash',"}<br />
                                        {"  role: 'Full Stack',"}<br />
                                        {"  passion: '∞',"}<br />
                                        {"};"}
                                    </div>
                                    <div className="absolute bottom-4 right-4 font-mono text-[10px] text-primary/60 leading-relaxed text-right">
                                        {"<App />"}<br />
                                        {"<Code />"}<br />
                                        {"<Deploy />"}
                                    </div>
                                </div>

                                {/* Center icons */}
                                <div className="flex flex-col items-center gap-3 sm:gap-4 z-10">
                                    <div className="flex gap-4 sm:gap-6">
                                        <motion.div
                                            animate={{ rotate: [0, 10, -10, 0] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/15 border border-primary/20 flex items-center justify-center"
                                        >
                                            <Monitor className="text-primary" size={20} />
                                        </motion.div>
                                        <motion.div
                                            animate={{ rotate: [0, -10, 10, 0] }}
                                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/15 border border-primary/20 flex items-center justify-center"
                                        >
                                            <Smartphone className="text-primary" size={20} />
                                        </motion.div>
                                    </div>
                                    <motion.div
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center"
                                    >
                                        <Code2 className="text-primary" size={24} />
                                    </motion.div>
                                    <p className="font-mono text-[10px] sm:text-xs text-muted-foreground mt-2">{"< building cool stuff />"}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.a
                href="#about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float hidden sm:block"
            >
                <ArrowDown size={20} />
            </motion.a>
        </section>
    );
};

export default HeroSection;
