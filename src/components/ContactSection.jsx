import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Globe } from "lucide-react";

const ContactSection = () => {
    return (
        <section id="contact" className="section-padding relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="max-w-6xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="font-mono text-primary text-sm mb-2">// contact</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Let's <span className="text-gradient">Connect</span>
                    </h2>
                    <p className="text-muted-foreground max-w-md mx-auto mb-12">
                        I'm always open to new opportunities, collaborations, or just a friendly chat about tech. Drop me a message!
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="grid sm:grid-cols-3 gap-4 mb-12"
                >
                    {[
                        { icon: Mail, label: "Email", value: "more.akash0797@gmail.com", href: "mailto:more.akash0797@gmail.com" },
                        { icon: Phone, label: "Phone", value: "+91 8668498317", href: "tel:+918668498317" },
                        { icon: MapPin, label: "Location", value: "Pune, India", href: "#" },
                    ].map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="glass-card-hover p-5 flex flex-col items-center gap-2"
                        >
                            <item.icon size={20} className="text-primary" />
                            <p className="text-xs text-muted-foreground">{item.label}</p>
                            <p className="text-sm font-medium text-foreground">{item.value}</p>
                        </a>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex justify-center gap-4 mb-8"
                >
                    {[
                        { icon: Github, href: "https://github.com/akashm1494", label: "GitHub" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/code-with-akash/", label: "LinkedIn" },
                        { icon: Globe, href: "https://akashm1494.github.io/", label: "Portfolio" },
                    ].map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={item.label}
                            className="w-12 h-12 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                        >
                            <item.icon size={20} />
                        </a>
                    ))}
                </motion.div>

                <a
                    href="mailto:more.akash0797@gmail.com"
                    className="inline-flex px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,210,190,0.25)]"
                >
                    Say Hello 👋
                </a>
            </div>

            {/* Footer */}
            <div className="mt-16 pt-8 border-t border-border text-center">
                <p className="text-xs text-muted-foreground font-mono">
                    Designed & Built by Akash More © {new Date().getFullYear()}
                </p>
            </div>
        </section>
    );
};

export default ContactSection;
