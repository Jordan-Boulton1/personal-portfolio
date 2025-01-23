const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
              {/* Container to control width and padding */}
            <div className="max-w-6xl mx-auto px-4">
                {/* Section heading */}
                <h2 className="text-3xl font-bold text-center mb-8">
                    About Me
                </h2>

                {/* Grid layout for content */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Text content */}
                    <div className="space-y-4">
                        <p className="text-gray-600">
                            Hello! I'm Jordan, a passionate Junior Full Stack Developer.
                            I love building things for the web and solving interesting problems.
                        </p>
                        <p className="text-gray-600">
                            My journey into web development started In 2022, I was at a crossroads, with no background in technology and a burning curiosity about software development.
                            What started as a casual exploration quickly became a passionate pursuit. By early 2023, I committed to self-learning, diving headfirst into the world of coding. 
                        </p>
                        <p className="text-gray-600">
                            September 2023 marked a pivotal moment when I was accepted into Code Institute's rigorous online program. Over the next months, I immersed myself in a comprehensive curriculum,
                            mastering languages and frameworks like HTML, CSS, JavaScript, Python, and Django. Each project was a challenge that pushed my boundaries and expanded my skills.
                        </p>
                        <p className="text-gray-600">
                            The journey wasn't just about learning technologies—it was about transforming my problem-solving approach and developing a growth mindset.
                            Through dedication and consistent effort, I not only completed the program but excelled, graduating with a distinction.
                        </p>
                        <p className="text-gray-600">
                            My story is proof that with passion, commitment, and the right resources, anyone can transition into a tech career—regardless of their starting point.
                        </p>

                        {/* Skills */}
                        <div className="mt-6">
                            <h3 className="font-semibold mb-3">My Skills:</h3>
                            <div className="flex flex-wrap gap-2">
                                {/* Each skill is a pill-shaped badge */}
                                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
                                    HTML5
                                </span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
                                    CSS3
                                </span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
                                    JavaScript
                                </span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
                                    Python
                                </span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
                                    Django
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Image container */}
                    <div className="relative">
                        <div className="aspect-square rounded-lg bg-gray-100">
                            <img
                                src="https://via.placeholder.com/400x400"
                                alt="Jordan Boulton"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;