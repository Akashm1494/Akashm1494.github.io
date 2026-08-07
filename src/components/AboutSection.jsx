import { motion } from "framer-motion";
import { Code2, Smartphone, Apple, Smartphone as Android } from "lucide-react";

const highlights = [
    { icon: Code2, value: "3+", label: "Years Experience" },
    { icon: Smartphone, value: "10+", label: "Projects Delivered" },
    {
        icon: Android,
        value: "5",
        label: "Apps on App Store & Play Store",
        secondaryIcon: Apple
    },
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
                            I'm a <span className="text-foreground font-medium">Full Stack Developer</span> with 3+ years of experience building production-ready React Native mobile applications and React.js web applications. Skilled in <span className="text-foreground font-medium">React Native, React.js, Node.js, Firebase, REST APIs, Socket.io</span>, and modern frontend development.
                        </p>
                        <p>
                            Contributed to production mobile and web applications, including <span className="text-primary font-medium">M2M Ferries (100K+ downloads)</span>, with a strong focus on performance, reusable components, and user experience. Led development of the MySathi React Native application from scratch, implementing real-time communication using Socket.io, Firebase services, and FCM push notifications.
                        </p>
                        <p>
                            I thrive at the intersection of clean code and great design, delivering solutions that combine technical excellence with exceptional user experience.
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
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 relative">
                                    <item.icon size={22} />
                                    {item.secondaryIcon && (
                                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center">
                                            <item.secondaryIcon size={12} />
                                        </div>
                                    )}
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
