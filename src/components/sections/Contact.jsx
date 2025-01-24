import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with public key
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const Contact = () => {
    // Form data state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Loading and success states
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [error, setError] = useState('');

    // handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        setSubmitSuccess(false);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: 'Jordan',
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setSubmitSuccess(true);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('An error occurred while trying to send the email', error);
            setError("Failed to send email. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="relative py-20 bg-gradient-to-br from-black via-blue-950 to-black">
            {/* Background glow effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
                    <p className="text-blue-200/80 max-w-2xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question
                        or just want to say hi, I'll get back to you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-blue-950/30 p-8 rounded-2xl border border-blue-900/50"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-blue-900/20 border border-blue-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-400/50"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-blue-900/20 border border-blue-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-400/50"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-4 py-2 bg-blue-900/20 border border-blue-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-400/50"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="text-red-400 text-sm">{error}</div>
                            )}

                            {/* Success Message */}
                            {submitSuccess && (
                                <div className="text-green-400 text-sm">Message sent successfully!</div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <span>Sending...</span>
                                ) : (
                                    <>
                                        <FaEnvelope className="w-4 h-4" />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="text-center lg:text-left">
                            <h3 className="text-xl font-semibold text-white mb-4">
                                Let's Connect
                            </h3>
                            <p className="text-blue-200/80">
                                Feel free to reach out through the form or connect with me on social media.
                                I'm always interested in hearing about new opportunities and meeting fellow developers.
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center lg:justify-start space-x-6">
                            <a
                                href="https://github.com/Jordan-Boulton1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-blue-900/30 text-blue-300 rounded-lg hover:bg-blue-900/50 transition-colors duration-300"
                            >
                                <FaGithub className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/jordan-boulton-b5888b227/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-blue-900/30 text-blue-300 rounded-lg hover:bg-blue-900/50 transition-colors duration-300"
                            >
                                <FaLinkedin className="w-6 h-6" />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Copyright text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="absolute bottom-0 right-4 sm:right-6 lg:right-8"
                >
                    <p className="text-blue-200/60 text-sm">
                        © {new Date().getFullYear()} Jordan Boulton. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;