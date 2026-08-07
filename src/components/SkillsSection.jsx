import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Mobile",
        skills: ["React Native", "Expo", "FCM", "Firebase", "Socket.io", "React Navigation", "App Store", "Play Store"],
    },
    {
        title: "Frontend",
        skills: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "Redux", "Tailwind CSS", "SCSS", "GSAP", "HTML5"],
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL", "Firebase Realtime", "Firestore"],
    },
    {
        title: "Tools",
        skills: ["Git", "GitHub", "Postman", "Jest", "React Testing Library", "CI/CD", "Agile/Scrum", "Figma", "WordPress"],
    },
];

const SkillsSection = () => {
    return (
        <section id="skills" className="section-padding relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="font-mono text-primary text-sm mb-2">// skills</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">
                        Tech <span className="text-gradient">Arsenal</span>
                    </h2>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((cat, ci) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: ci * 0.1 }}
                            className="glass-card-hover p-6"
                        >
                            <h3 className="text-sm font-mono text-primary mb-4 tracking-wide uppercase">
                                {cat.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-xs px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
