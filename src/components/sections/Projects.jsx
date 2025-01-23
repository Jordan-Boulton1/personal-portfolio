import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
    // Project data
    const projects = [
        {
            title: "JB Fit - Online Personal Training",
            description: "A full-stack e-commerce platform for personal fitness coaching. Features include user authentication, personalized training plans, progress tracking with weight logs and progress images, secure checkout with Stripe, and an integrated newsletter system.",
            technologies: [
                "Python",
                "Django",
                "JavaScript",
                "Bootstrap",
                "PostgreSQL",
                "AWS S3",
                "Stripe"
            ],
            imageUrl: "/images/jb-fit-mockup.png",
            liveUrl: "https://ci-jb-fit-73ac55dce174.herokuapp.com/",
            githubUrl: "https://github.com/Jordan-Boulton1/jb-fit"
        },
        {
            title: "Woof Wash Grooming",
            description: "A comprehensive dog grooming service platform built with Django. Features include user authentication, appointment booking system, pet profile management, service catalog, and an admin dashboard for managing appointments and services.",
            technologies: [
                "Python",
                "Django",
                "JavaScript",
                "Bootstrap",
                "PostgreSQL",
                "Cloudinary",
                "WhiteNoise"
            ],
            imageUrl: "/images/woof-wash-mockup.png",
            liveUrl: "https://woof-wash-grooming-b4f3c23e0e4c.herokuapp.com/",
            githubUrl: "https://github.com/Jordan-Boulton1/woof-wash-grooming"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">
                    My Projects
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={index}
                            {...project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;