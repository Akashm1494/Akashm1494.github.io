import { motion } from "framer-motion";

const experiences = [
    {
        role: "Frontend-Focused Full Stack Developer",
        company: "MySathi Tech Pvt. Ltd.",
        period: "Jun 2025 – Present",
        points: [
            "Published production Android & iOS apps to Google Play Store and App Store via React Native — managed full release pipeline",
            "Architected 15+ reusable cross-platform UI components, reducing feature development time by ~30% per sprint",
            "Integrated 10+ REST APIs with structured error handling; resolved 20+ performance bottlenecks improving Core Web Vitals",
            "Built React.js + Tailwind CSS internal dashboards, streamlining team workflows and eliminating manual reporting",
        ],
    },
    {
        role: "Full Stack Developer",
        company: "Mayra Digital Technologies",
        period: "Aug 2023 – Jun 2025",
        points: [
            "Developed 10+ responsive React.js web apps for 15+ clients — delivered every sprint on time without a single missed deadline",
            "Converted 8+ Figma designs into GSAP-animated production websites, cutting design-to-deployment time by ~25%",
            "Built React Native screens and integrated REST APIs, enhancing usability and mobile performance across multiple client apps",
        ],
    },
];

// Education data - commented out as requested
// const education = [
//     {
//         title: "Masai School — Full Stack Web Development",
//         period: "April 2022 – April 2023",
//         detail: "1200+ hours of intensive hands-on coding with weekly reviews, Agile sprints & real-world projects.",
//     },
//     {
//         title: "YCMOU, Pune — Bachelor of Arts (B.A.)",
//         period: "2018 – 2021",
//         detail: "",
//     },
// ];

const ExperienceSection = () => {
    return (
        <section id="experience" className="section-padding relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="font-mono text-primary text-sm mb-2">// experience</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">
                        Where I've <span className="text-gradient">Worked</span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-4 top-2 bottom-2 w-px bg-border hidden md:block" />

                    <div className="space-y-10">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                className="relative md:pl-12"
                            >
                                {/* Dot */}
                                <div className="absolute left-2.5 top-2 w-3 h-3 rounded-full bg-primary border-2 border-background hidden md:block" />

                                <div className="glass-card p-6">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-1">
                                        <div>
                                            <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                                            <p className="text-primary font-medium text-sm">{exp.company}</p>
                                        </div>
                                        <span className="text-xs font-mono text-muted-foreground shrink-0">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <ul className="space-y-2">
                                        {exp.points.map((point, pi) => (
                                            <li key={pi} className="text-sm text-muted-foreground flex gap-2">
                                                <span className="text-primary mt-1 shrink-0">▸</span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Education - Hidden as requested */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="mt-16"
                >
                    <p className="font-mono text-primary text-sm mb-6">// education</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {education.map((edu, i) => (
                            <div key={i} className="glass-card p-5">
                                <h4 className="font-semibold text-foreground text-sm mb-1">{edu.title}</h4>
                                <p className="text-xs font-mono text-muted-foreground mb-2">{edu.period}</p>
                                {edu.detail && (
                                    <p className="text-xs text-muted-foreground leading-relaxed">{edu.detail}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
};

export default ExperienceSection;
