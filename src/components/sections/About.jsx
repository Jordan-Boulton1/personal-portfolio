import { motion } from 'framer-motion';
import { FaMedal } from 'react-icons/fa';

const About = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-950 via-black to-blue-950">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white/90">
              About Me
            </h2>
            <div className="space-y-4">
              <p className="text-white/80 text-md leading-relaxed">
                I'm Jordan, a passionate Junior Full Stack Developer.
                I love building things for the web and solving interesting problems.
              </p>
              <p className="text-white/80 text-md leading-relaxed">
                My journey into web development started In 2022, I was at a crossroads, with no background in technology and a burning curiosity about software development.
                What started as a casual exploration quickly became a passionate pursuit. By early 2023, I committed to self-learning, 
                diving headfirst into the world of coding.
              </p>
              <p className="text-white/80 text-md leading-relaxed">
                September 2023 marked a pivotal moment when I was accepted into Code Institute's rigorous online program.
                Over the next months, I immersed myself in a comprehensive curriculum, mastering languages and frameworks like HTML, CSS, JavaScript, Python, and Django.
                Each project was a challenge that pushed my boundaries and expanded my skills.
              </p>
              <p className="text-white/80 text-md leading-relaxed">
                The journey wasn't just about learning technologies—it was about transforming my problem-solving approach and developing a growth mindset.
                Through dedication and consistent effort, I not only completed the program but excelled, graduating with a distinction.
              </p>
              <p className="text-white/80 text-md leading-relaxed">
                My story is proof that with passion, commitment, and the right resources, anyone can transition into a tech career—regardless of their starting point.
              </p>
            </div>

            {/* Certificate Section */}
            <motion.div 
              className="mt-8 p-6 bg-blue-500/10 rounded-2xl border border-blue-400/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <FaMedal className="w-8 h-8 text-blue-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white/90 mb-2">
                    Full Stack Development Certification
                  </h3>
                  <p className="text-white/80 mb-3">
                    Code Institute - 2024
                  </p>
                  <a
                    href="https://www.credential.net/d44c6f4d-8fef-4ef5-b93a-daab1dea4aab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-200 rounded-lg transition-colors duration-300 text-sm"
                  >
                    View Certificate
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Personal Details */}
            <ul className="list-disc list-inside text-white/80 space-y-2 mt-6 text-lg">
              <li>Based in Fife, Scotland</li>
              <li>Available for full-time positions</li>
              <li>Graduated from Code Institute with Distinction</li>
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-lg bg-gray-100 dark:bg-gray-700">
              {/* Add your image here */}
              <img
                src="/images/jordan-mugshot.png"
                alt="Your Name"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;