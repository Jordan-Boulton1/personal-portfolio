import { motion } from 'framer-motion';
import { DiReact, DiJavascript1, DiPython, DiGit, DiHtml5, DiCss3 } from 'react-icons/di';
import { SiTailwindcss, SiDjango, SiPostgresql, SiMongodb, SiFlask, SiJquery, SiPytest, SiJest, SiHeroku, SiBootstrap, SiAmazon, SiSharp } from 'react-icons/si';
import { useState } from 'react';

const skills = [
    // Most proficient
    { name: 'JavaScript', icon: DiJavascript1, category: 'Frontend', level: 65 },
    { name: 'HTML5', icon: DiHtml5, category: 'Frontend', level: 70 },
    { name: 'CSS3', icon: DiCss3, category: 'Frontend', level: 65 },
    { name: 'Python', icon: DiPython, category: 'Backend', level: 70 },
    { name: 'Django', icon: SiDjango, category: 'Backend', level: 65 },
    { name: 'PostgreSQL', icon: SiPostgresql, category: 'Backend', level: 50 },
    { name: 'jQuery', icon: SiJquery, category: 'Frontend', level: 55 },
    { name: 'Bootstrap', icon: SiBootstrap, category: 'Frontend', level: 60 },
    
    // Testing tools
    { name: 'Jest', icon: SiJest, category: 'Testing', level: 45 },
    { name: 'Pytest', icon: SiPytest, category: 'Testing', level: 45 },
    
    // Deployment & Tools
    { name: 'Heroku', icon: SiHeroku, category: 'Deployment', level: 70 },
    
    // Learning/Growing
    { name: 'React', icon: DiReact, category: 'Frontend', level: 40 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Frontend', level: 45 },
    { name: 'Git', icon: DiGit, category: 'Tools', level: 45 },
    { name: 'MongoDB', icon: SiMongodb, category: 'Backend', level: 40 },
    { name: 'Flask', icon: SiFlask, category: 'Backend', level: 35 },
    { name: 'Amazon AWS', icon: SiAmazon, category: 'Cloud', level: 45 },
    { name: 'C#', icon: SiSharp, category: 'Backend', level: 30 },
];

const SkillCard = ({ skill }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
            }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative bg-blue-950/30 p-6 rounded-xl border border-blue-900/50 hover:border-blue-700/50 transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex items-center space-x-4">
                <skill.icon className="w-8 h-8 text-blue-400" />
                <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                        <motion.span
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ 
                                opacity: isHovered ? 1 : 0,
                                y: isHovered ? 0 : -10
                            }}
                            transition={{ duration: 0.2 }}
                            className="text-blue-300 font-medium"
                        >
                            {skill.level}%
                        </motion.span>
                    </div>
                    <div className="w-full bg-blue-900/20 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                            className="h-2.5 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                        />
                    </div>
                </div>
            </div>

            {/* Hover glow effect */}
            <motion.div
                className="absolute inset-0 rounded-xl bg-blue-400/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2 }}
            />
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section className="relative py-20 bg-gradient-to-br from-black via-blue-950 to-black">
            {/* Background glow effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
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
                    <h2 className="text-3xl font-bold text-white mb-4">Technical Skills</h2>
                    <p className="text-blue-200/80 max-w-2xl mx-auto">
                        A comprehensive overview of my technical expertise and proficiency levels
                        in various programming languages, frameworks, and tools.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;