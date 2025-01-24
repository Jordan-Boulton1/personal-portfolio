import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaCogs } from "react-icons/fa";
import { DiPython, DiDjango, DiJavascript1, DiBootstrap, DiPostgresql } from 'react-icons/di';
import { SiStripe, SiAmazon, SiCloudinary } from 'react-icons/si';

const Projects = () => {
    // Project data
    const projects = [
        {
            title: "JB Fit - Online Personal Training",
            description: "A full-stack e-commerce platform for personal fitness coaching. Features include user authentication, personalized training plans, progress tracking with weight logs and progress images, secure checkout with Stripe, and an integrated newsletter system.",
            technologies: [
                { name: "Python", icon: DiPython },
                { name: "Django", icon: DiDjango },
                { name: "JavaScript", icon: DiJavascript1 },
                { name: "Bootstrap", icon: DiBootstrap },
                { name: "PostgreSQL", icon: DiPostgresql },
                { name: "AWS S3", icon: SiAmazon },
                { name: "Stripe", icon: SiStripe }
            ],
            imageUrl: "/images/jb-fit-mockup.png",
            liveUrl: "https://ci-jb-fit-73ac55dce174.herokuapp.com/",
            githubUrl: "https://github.com/Jordan-Boulton1/jb-fit"
        },
        {
            title: "Woof Wash Grooming",
            description: "A comprehensive dog grooming service platform built with Django. Features include user authentication, appointment booking system, pet profile management, service catalog, and an admin dashboard for managing appointments and services.",
            technologies: [
                { name: "Python", icon: DiPython },
                { name: "Django", icon: DiDjango },
                { name: "JavaScript", icon: DiJavascript1 },
                { name: "Bootstrap", icon: DiBootstrap },
                { name: "PostgreSQL", icon: DiPostgresql },
                { name: "Cloudinary", icon: SiCloudinary },
                { name: "WhiteNoise", icon: FaCogs }
            ],
            imageUrl: "/images/woof-wash-mockup.png",
            liveUrl: "https://woof-wash-grooming-b7fa1160192f.herokuapp.com/",
            githubUrl: "https://github.com/Jordan-Boulton1/woof-wash-grooming"
        }
    ];

    return (
        <section className="relative py-20 bg-gradient-to-br from-blue-950 via-black to-blue-950">
            {/* Background glow effect */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-0 w-96 h96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
                    <p className="text-blue-200/80 max-w-2xl mx-auto">
                        A showcase of my recent web development projects, demonstrating my skills
                        in both front-end and back-end development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group relative bg-blue-950/30 rounded-2xl overflow-hidden
                            border border-blue-950/50 hover:border-blue-700/50 transition-all duration-300"
                        >
                            {/* Project image */}
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            </div>

                            {/* Project content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                                <p className="text-blue-100/80 mb-4">{project.description}</p>

                                {/* Project technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, techIndex) => {
                                        const Icon = tech.icon;
                                        return (
                                            <span
                                                key={techIndex}
                                                className="flex items-center gap-1.5 px-3 py-1 text-sm bg-blue-900/30 text-blue-300 rounded-full hover:bg-blue-900/40 transition-colors duration-300"
                                            >
                                                <Icon className="w-4 h-4" />
                                                <span>{tech.name}</span>
                                            </span>
                                        );
                                    })}
                                </div>

                                {/* Project links */}
                                <div className="flex gap-4">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                                    >
                                        <FaExternalLinkAlt className="w-4 h-4" />
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-blue-900/40 hover:bg-blue-900/60 text-blue-200 rounded-lg transition-colors duration-300"
                                    >
                                        <FaGithub className="w-4 h-4" />
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;