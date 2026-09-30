import { motion } from "framer-motion";
import { MessageSquare, FileText, Code, TestTube, Rocket } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: MessageSquare,
        title: "Discuss",
        description: "Understand your project requirements, goals and target audience.",
    },
    {
        number: "02",
        icon: FileText,
        title: "Plan",
        description: "Define features, project scope, timeline and development approach.",
    },
    {
        number: "03",
        icon: Code,
        title: "Build",
        description: "Develop the application with regular progress updates and feedback.",
    },
    {
        number: "04",
        icon: TestTube,
        title: "Test",
        description: "Thoroughly test the application, fix issues and refine features.",
    },
    {
        number: "05",
        icon: Rocket,
        title: "Launch",
        description: "Deploy the project and provide complete handover with documentation.",
    },
];

const HowIWork = () => {
    return (
        <section id="process" className="section-padding relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <p className="font-mono text-primary text-sm mb-2">// process</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        How I <span className="text-gradient">Work</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
                        A streamlined development process from initial discussion to final deployment.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="glass-card p-6 flex flex-col items-center text-center relative"
                        >
                            <div className="font-mono text-primary/40 text-sm mb-3 font-bold">
                                {step.number}
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                                <step.icon size={22} />
                            </div>
                            <h3 className="text-base font-bold text-foreground mb-2">
                                {step.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowIWork;
