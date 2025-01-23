const ProjectCard = ({ title, description, technologies, imageUrl, liveUrl, githubUrl }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Project Image */}
            <div className="aspect-video w-full overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            
            {/* Project Info */}
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                    {title}
                </h3>
                <p className="text-gray-600 mb-4">
                    {description}
                </p>
                
                {/* Technologies Used */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech, index) => (
                        <span 
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                
                {/* Project Links */}
                <div className="flex gap-4">
                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700"
                    >
                        Live Demo →
                    </a>
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-700"
                    >
                        GitHub →
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;