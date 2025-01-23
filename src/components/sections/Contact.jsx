import { useState } from 'react';
import emailjs from '@emailjs/browser';

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

        // Here you would typically send the form data to your backend
        // For now, we'll just simulate a submission
        try {
            // Simulate API call
            await emailjs.send(
                'service_99z4v02',
                'template_lfiboju',
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: 'Jordan',
                },
                '8qy6mk3j4xQ_9pH5o'
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
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Get In Touch
                </h2>

                {/* Contact information */}
                <div className="text-center mb-12">
                    <p className="text-gray-600 mb-4">
                        I'm currently looking for new opportunities. Whether you have a question, want to collaborate, or just want to say hi, 
                        I'll try my best to get back to you!
                    </p>
                    <a
                        href="mailto:jordan.boulton1@outlook.com"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                        jordan.boulton1@outlook.com
                    </a>
                </div>

                {/* Contact form */}
                <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input 
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Your Name"
                            />
                        </div>

                        {/* Email field */}
                        <div>
                            <label 
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Email
                            </label>
                            <input 
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        {/* Message field */}
                        <div>
                            <label 
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Your message here..."
                            />
                        </div>

                        {/* Error message */}
                        {error && (
                            <p className="text-red-600 text-center">
                                {error}
                            </p>
                        )}

                        {/* Submit button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>

                        {/* Success message */}
                        {submitSuccess && (
                            <p className="text-green-600 text-center">
                                Thanks for reaching out! I'll get back to you as soon as possible.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;