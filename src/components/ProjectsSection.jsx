import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const placeholderImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=340&fit=crop",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=340&fit=crop",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=340&fit=crop",
];

const projects = [
    {
        title: "Responsive CMS Web Application",
        description:
            "Full-featured CMS with role-based access control and real-time updates — reduced manual content operations by 50%.",
        stack: ["React.js", "Node.js", "Express.js", "MySQL"],
        live: "https://www.eetfuels.com",
        github: "#",
        featured: true,
        images: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=340&fit=crop",
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=340&fit=crop",
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=340&fit=crop",
        ],
    },
    {
        title: "EET Biofuels Platform",
        description:
            "Enterprise-level biofuels management platform with real-time data processing and analytics dashboard.",
        stack: ["React.js", "Node.js", "MySQL"],
        live: "https://eetbiofuels.com",
        github: "#",
        featured: true,
        images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop",
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=340&fit=crop",
            "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=600&h=340&fit=crop",
        ],
    },
    {
        title: "EET Hydrogen Power",
        description:
            "Hydrogen power management system with advanced monitoring and reporting capabilities.",
        stack: ["React.js", "Node.js", "MySQL"],
        live: "https://eethydrogenpower.com",
        github: "#",
        featured: true,
        images: [
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=340&fit=crop",
            "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&h=340&fit=crop",
            "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=340&fit=crop",
        ],
    },
    {
        title: "M2M Ferries Website",
        description:
            "Pixel-perfect GSAP-animated website built from Figma mockups with strong Core Web Vitals and fast load times.",
        stack: ["HTML5", "SCSS", "GSAP", "JavaScript", "PHP"],
        live: "https://www.m2mferries.com/",
        github: "#",
        images: [
            "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=340&fit=crop",
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=340&fit=crop",
            "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=340&fit=crop",
        ],
    },
];

const ProjectCard = ({ project, index }) => {
    const [currentImg, setCurrentImg] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!isHovered) return;
        const timer = setInterval(() => {
            setCurrentImg((prev) => (prev + 1) % project.images.length);
        }, 1000);
        return () => clearInterval(timer);
    }, [isHovered, project.images.length]);

    const handleMouseLeave = useCallback(() => {
        setIsHovered(false);
        setCurrentImg(0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            className="glass-card group flex flex-col h-full transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_hsl(175_80%_50%/0.1)] overflow-hidden"
        >
            {/* Image carousel */}
            <div className="relative h-44 overflow-hidden">
                {project.images.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt={`${project.title} preview ${i + 1}`}
                        loading="lazy"
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${i === currentImg ? "opacity-100 scale-100" : "opacity-0 scale-105"
                            } group-hover:scale-110`}
                    />
                ))}
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />

                {/* Image dots */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {project.images.map((_, i) => (
                        <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentImg ? "bg-primary w-4" : "bg-foreground/30"
                                }`}
                        />
                    ))}
                </div>

                {project.featured && (
                    <span className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-widest text-primary bg-card/80 backdrop-blur-sm px-2 py-0.5 rounded-md z-10">
                        ★ Featured
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.map((tech) => (
                        <span
                            key={tech}
                            className="text-[11px] px-2 py-1 rounded-md bg-primary/10 text-primary font-mono"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex gap-3">
                    <a
                        href={project.live}
                        data-cursor-hover
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Live demo"
                    >
                        <ExternalLink size={16} />
                    </a>
                    <a
                        href={project.github}
                        data-cursor-hover
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Source code"
                    >
                        <Github size={16} />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const ProjectsSection = () => {
    return (
        <section id="projects" className="section-padding relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <p className="font-mono text-primary text-sm mb-2">// projects</p>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Featured <span className="text-gradient">Work</span>
                    </h2>
                </motion.div>

                {/* Swiper Carousel */}
                <div className="relative project-swiper">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        speed={600}
                        navigation={{
                            nextEl: ".swiper-btn-next",
                            prevEl: ".swiper-btn-prev",
                        }}
                        pagination={{
                            clickable: true,
                            el: ".swiper-custom-pagination",
                            dynamicBullets: true,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-4"
                    >
                        {projects.map((project, i) => (
                            <SwiperSlide key={project.title} className="h-auto">
                                <ProjectCard project={project} index={i} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom nav */}
                    <button
                        className="swiper-btn-prev absolute left-2 md:-left-5 top-[42%] -translate-y-1/2 z-20 w-10 h-10 rounded-full glass-card backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-[0_0_20px_hsl(175_80%_50%/0.15)] hover:scale-110 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Previous"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        className="swiper-btn-next absolute right-2 md:-right-5 top-[42%] -translate-y-1/2 z-20 w-10 h-10 rounded-full glass-card backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-[0_0_20px_hsl(175_80%_50%/0.15)] hover:scale-110 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Next"
                    >
                        <ChevronRight size={18} />
                    </button>

                    {/* Custom pagination - REMOVED */}
                    {/* <div className="swiper-custom-pagination flex justify-center gap-2 mt-4" /> */}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
