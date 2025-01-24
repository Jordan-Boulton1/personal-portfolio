import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Meteors from '../ui/Meteors';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-blue-950 to-blue-900 py-20 overflow-hidden">
            {/* Background decoration - moved to back with z-index */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
                <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
            </div>

            {/* Meteors - between background and content */}
            <div className="absolute inset-0 z-10">
                <Meteors number={20} />
            </div>

            {/* Content container - moved to front with z-index */}
            <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Greeting */}
                    <h2 className="text-lg md:text-xl text-blue-200 font-medium mb-4">
                        Hello, I'm
                    </h2>

                    {/* Name */}
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Jordan Boulton
                    </h1>

                    {/* Role */}
                    <h2 className="text-xl md:text-2xl text-blue-100 mb-8">
                        Junior Full Stack Developer
                    </h2>

                    {/* Description - adjusted for readability */}
                    <p className="max-w-2xl mx-auto text-blue-50/90 mb-12">
                        I build modern web applications with a focus on clean code and user experience. 
                        Passionate about creating solutions that make a difference.
                    </p>

                    {/* Social Media Icons with updated hover colors */}
                    <div className="flex justify-center gap-6 mb-12">
                        <motion.a
                            href="https://github.com/Jordan-Boulton1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-blue-950/20 hover:bg-blue-900/30 transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaGithub className="w-7 h-7 text-white/80 hover:text-blue-400 transition-colors duration-300" />
                        </motion.a>

                        <motion.a
                            href="https://www.linkedin.com/in/jordan-boulton-dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-blue-950/20 hover:bg-blue-900/30 transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaLinkedin className="w-7 h-7 text-white/80 hover:text-blue-400 transition-colors duration-300" />
                        </motion.a>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex justify-center gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-white text-blue-700 hover:bg-blue-50 rounded-lg transition-colors duration-300"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border-2 border-white text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
                        >
                            Contact Me
                        </a>
                    </div>

                    {/* Scroll indicator - significantly increased bottom spacing */}
                    <motion.div
                        className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 z-30"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center hover:border-white/75 transition-colors duration-300">
                            <div className="w-1 h-2 bg-white/50 rounded-full mt-2 group-hover:bg-white/75"></div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
