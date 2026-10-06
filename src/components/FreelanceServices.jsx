import { motion } from "framer-motion";
import { Globe, Code2, LayoutDashboard, Smartphone, ShoppingCart, Server } from "lucide-react";

const services = [
    {
        icon: Globe,
        title: "Business Websites",
        description: "Professional responsive websites for businesses, startups and individuals with modern design and optimal performance.",
    },
    {
        icon: Code2,
        title: "Web Applications",
        description: "Custom web applications with React.js, Node.js, REST APIs and database integration for your business needs.",
    },
    {
        icon: LayoutDashboard,
        title: "CRM & Admin Dashboards",
        description: "Custom dashboards for managing customers, products, inventory, reports and business operations efficiently.",
    },
    {
        icon: Smartphone,
        title: "Mobile Applications",
        description: "Native Android and iOS applications using React Native with seamless performance and user experience.",
    },
    {
        icon: ShoppingCart,
        title: "E-commerce Solutions",
        description: "Complete e-commerce platforms with product management, order processing, payment integration and inventory tracking.",
    },
    {
        icon: Server,
        title: "Backend & API Development",
        description: "Scalable REST APIs, database design, authentication systems and backend infrastructure development.",
    },
];

const FreelanceServices = () => {
    return (
        <section id="services" className="section-padding relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="font-mono text-primary text-sm mb-2">// services</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Freelance <span className="text-gradient">Services</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mb-12">
                        Available for freelance projects and custom development work. I help businesses and individuals build modern web and mobile applications.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="glass-card-hover p-6 flex flex-col"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                                <service.icon size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-foreground mb-2">
                                {service.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <a
                        href="#contact"
                        className="inline-flex px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(175_80%_50%/0.25)]"
                    >
                        Start a Project
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default FreelanceServices;
