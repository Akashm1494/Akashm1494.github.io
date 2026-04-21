import { motion } from "framer-motion";
import { Code2, Smartphone, Rocket } from "lucide-react";

const highlights = [
    { icon: Code2, value: "3+", label: "Years Experience" },
    { icon: Smartphone, value: "10+", label: "Projects Delivered" },
    { icon: Rocket, value: "2", label: "Apps on App Stores" },
];

const AboutSection = () => {
    return (
        <section id="about" className="section-padding">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="font-mono text-primary text-sm mb-2">// about me</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">
                        Building Digital{" "}
                        <span className="text-gradient">Experiences</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-5 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:col-span-3 space-y-5 text-muted-foreground leading-relaxed"
                    >
                        <p>
                            I'm a <span className="text-foreground font-medium">Frontend-focused Full Stack Developer</span> with 3+ years of experience building high-performance React.js applications and cross-platform React Native mobile apps. Published production apps to <span className="text-foreground font-medium">Google Play Store and Apple App Store</span> end-to-end.
                        </p>
                        <p>
                            Currently at <span className="text-primary font-medium">MySathi Tech Pvt. Ltd.</span>, I build scalable products from the ground up — from intuitive UIs to robust backend integrations. Previously at Mayra Digital Technologies, I delivered <span className="text-foreground font-medium">15+ Agile client projects on time</span> without missing a single deadline.
                        </p>
                        <p>
                            I thrive at the intersection of clean code and great design, and I'm driven by turning complex problems into elegant, user-first solutions.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="md:col-span-2 grid gap-4"
                    >
                        {highlights.map((item, i) => (
                            <div key={i} className="glass-card p-5 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <item.icon size={22} />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-foreground">{item.value}</p>
                                    <p className="text-sm text-muted-foreground">{item.label}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
