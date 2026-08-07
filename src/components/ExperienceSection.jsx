import { motion } from "framer-motion";

const experiences = [
    {
        role: "Full Stack Developer (React Native + Backend)",
        company: "MySathi Pvt Ltd",
        period: "Jun 2025 – July 2026",
        points: [
            "Led the development of the MySathi React Native application from scratch by building reusable UI components, application architecture, and core mobile features",
            "Implemented real-time communication using Socket.io, Firebase services, FCM push notifications, app permissions, and managed Play Store & App Store releases",
            "Developed responsive React.js dashboards with dynamic forms, reusable components, and performance optimizations using lazy loading and component memoization",
            "Integrated Firebase services and REST APIs while implementing authentication, permissions, and application service modules for mobile and web applications",
        ],
    },
    {
        role: "Full Stack Developer",
        company: "Mayra Digital Technologies",
        period: "Aug 2023 – Jun 2025",
        points: [
            "Developed React.js applications along with WordPress and Laravel-based web projects, delivering 10+ client solutions using modern frontend technologies in Agile environments",
            "Developed React Native features for M2M Ferries (100K+ downloads, 3.5★ rating), implementing booking workflows, Juspay payment integration, API integration, and production-ready mobile features",
            "Converted Figma and Adobe XD designs into responsive React.js and React Native applications by building reusable UI components and maintaining pixel-perfect implementations",
            "Developed responsive business websites for the EET platform by converting Figma designs into HTML, SCSS, JavaScript, and jQuery, with WordPress integration for content management",
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
