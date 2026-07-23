import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight, Smartphone } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const projects = [
    {
        title: "MySathi - Social Platform",
        description:
            "iOS & Android app with Firebase integration and real-time features. Complete social platform with user engagement and community features.",
        stack: ["React Native", "Firebase", "Socket.io", "FCM"],
        live: "https://www.mysathi.in/",
        appStore: "https://apps.apple.com/in/app/mysathi/id6754602462",
        playStore: "https://play.google.com/store/apps/details?id=com.mysathi.app",
        // github: "#", // Commercial project - no public repository
        featured: true,
        type: "mobile",
        images: [
            "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=340&fit=crop",
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=340&fit=crop",
            "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=600&h=340&fit=crop",
        ],
    },
    {
        title: "M2M Ferries - Mobile App",
        description:
            "Android & iOS ferry booking app with 100K+ downloads and 3.5★ rating. Real-time ferry tracking, booking management, and push notifications.",
        stack: ["React Native", "Socket.io", "FCM", "REST API"],
        live: "https://www.m2mferries.com/",
        appStore: "https://apps.apple.com/in/app/m2m-ferries/id1588428935",
        playStore: "https://play.google.com/store/apps/details?id=m2m.eu",
        // github: "#", // Commercial project - no public repository
        featured: true,
        type: "mobile",
        stats: "100K+ Downloads • 3.5★ Rating",
        images: [
            "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=340&fit=crop",
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=340&fit=crop",
            "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=340&fit=crop",
        ],
    },
    {
        title: "Mayra Digital - WordPress Theme",
        description:
            "Custom WordPress theme with portfolio showcase and client management system. Built with custom ACF fields, responsive design, and optimized performance.",
        stack: ["WordPress", "PHP", "Custom Theme", "ACF", "MySQL"],
        live: "https://www.mayradigital.com/",
        // github: "#", // Commercial project - no public repository
        featured: true,
        type: "web",
        images: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=340&fit=crop",
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=340&fit=crop",
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=340&fit=crop",
        ],
    },
    {
        title: "Etnow GBS - WooCommerce Site",
        description:
            "Custom WordPress theme with WooCommerce integration achieving 95 website speed score. Built with custom post types, optimized images, and clean code architecture.",
        stack: ["WordPress", "WooCommerce", "PHP", "Custom Theme", "MySQL"],
        live: "https://etnowgbs.com/",
        // github: "#", // Commercial project - no public repository
        featured: true,
        type: "web",
        stats: "95 Speed Score",
        images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop",
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=340&fit=crop",
            "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=600&h=340&fit=crop",
        ],
    },
    {
        title: "EET Hydrogen Power",
        description:
            "Hydrogen power management system with advanced monitoring and reporting capabilities. WordPress platform for clean energy solutions.",
        stack: ["WordPress", "PHP", "MySQL", "Custom Theme"],
        live: "https://eethydrogenpower.com/",
        // github: "#", // Commercial project - no public repository
        featured: false,
        type: "web",
        images: [
            "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=340&fit=crop",
            "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=340&fit=crop",
            "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=340&fit=crop",
        ],
    },
    {
        title: "EET Fuels - Multi-Site Platform",
        description:
            "Multi-site WordPress platform with 90+ website speed score. Custom CMS with role-based access control and real-time updates.",
        stack: ["WordPress", "PHP", "MySQL", "Multi-Site"],
        live: "https://www.eetfuels.com",
        // github: "#", // Commercial project - no public repository
        featured: false,
        type: "web",
        stats: "90+ Speed Score",
        images: [
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=340&fit=crop",
            "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&h=340&fit=crop",
            "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=340&fit=crop",
        ],
    },
    {
        title: "EET Biofuels - WordPress Platform",
        description:
            "Multi-site WordPress platform with 90+ website speed score. Enterprise-level biofuels management with analytics dashboard.",
        stack: ["WordPress", "PHP", "MySQL", "Multi-Site"],
        live: "https://eetbiofuels.com",
        // github: "#", // Commercial project - no public repository
        featured: false,
        type: "web",
        stats: "90+ Speed Score",
        images: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=340&fit=crop",
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=340&fit=crop",
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=340&fit=crop",
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

                {/* Stats badge (if exists) */}
                {project.stats && (
                    <div className="mb-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-primary/80 bg-primary/10 px-2 py-0.5 rounded-md">
                            {project.stats}
                        </span>
                    </div>
                )}

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
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-hover
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Live demo"
                    >
                        <ExternalLink size={16} />
                    </a>

                    {/* App Store Links for Mobile Apps */}
                    {project.type === "mobile" && (
                        <>
                            {project.appStore && (
                                <a
                                    href={project.appStore}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-cursor-hover
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    aria-label="App Store"
                                    title="Download on App Store"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                                    </svg>
                                </a>
                            )}
                            {project.playStore && (
                                <a
                                    href={project.playStore}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-cursor-hover
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    aria-label="Play Store"
                                    title="Get it on Play Store"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                    </svg>
                                </a>
                            )}
                        </>
                    )}

                    {/* GitHub icon - only show if github property exists (for open-source projects) */}
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-cursor-hover
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="Source code"
                        >
                            <Github size={16} />
                        </a>
                    )}
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
