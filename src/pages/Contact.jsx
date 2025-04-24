import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

const Contact = () => {
  // State management
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorHovering, setCursorHovering] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  // Form reference for EmailJS
  const formRef = useRef();
  
  // References
  const contactRef = useRef(null);
  const containerRef = useRef(null);
  
  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Handle cursor movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Handle form changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(false);
    
    // Replace these values with your actual EmailJS credentials
    const serviceId = 'service_9s05cxn';
    const notificationTemplateId = 'template_awjy60m';
    const autoReplyTemplateId = 'template_cwx2sdh';
    const publicKey = 'yqrVpH14R0yRsZDJR';
    
    // First send the notification to yourself
  emailjs.sendForm(serviceId, notificationTemplateId, formRef.current, publicKey)
  .then(() => {
    // Then send the auto-reply to the user
    return emailjs.sendForm(serviceId, autoReplyTemplateId, formRef.current, publicKey);
  })
  .then((result) => {
    console.log('Emails sent successfully:', result.text);
    setFormSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setFormSubmitted(false);
    }, 3000);
  })
  .catch((error) => {
    console.error('Failed to send email:', error.text);
    setFormError(true);
    setIsSubmitting(false);
  });
};

  return (
    <div 
      ref={containerRef}
      className={`relative min-h-screen w-full ${
        isDarkMode ? "dark bg-gray-900" : "bg-white"
      } transition-colors duration-500`}
    >
      
      {/* Noise texture overlay */}
      <div className="fixed inset-0 pointer-events-none z-10 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>

      {/* Contact Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute w-[600px] h-[600px] opacity-20 blur-3xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ 
              rotateZ: 360,
              rotateY: 360,
            }}
            transition={{ 
              duration: 60, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="w-full h-full rounded-full"
            style={{
              background: "conic-gradient(from 0deg, rgb(79, 70, 229), rgb(219, 39, 119), rgb(245, 208, 254), rgb(79, 70, 229))"
            }}
          />
        </div>
        
        <div className="container mx-auto px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center mb-6">
              <div className="w-12 h-1 bg-indigo-500 mr-4"></div>
              <h2 className="text-lg text-indigo-500 font-semibold uppercase tracking-wide">
                Contact
              </h2>
              <div className="w-12 h-1 bg-indigo-500 ml-4"></div>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-bold tracking-tight mb-8"
            >
              <span className="text-gray-900">Let's </span>
              <span className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Connect
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="text-xl text-gray-600 mb-12"
            >
              Have a project in mind or just want to say hello? I'd love to hear from you.
              Let's start a conversation about how we can work together.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section id="contact" ref={contactRef} className="py-16 relative">
        <div className="container mx-auto px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-1">
                        Email
                      </h4>
                      <a 
                        href="mailto:jlara2019@gmail.com" 
                        className="text-gray-600 hover:text-indigo-500 transition-colors"
                      >
                        jlara2019@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-1">
                        Location
                      </h4>
                      <p className="text-gray-600">
                        Dallas, TX
                        <span className="block text-sm text-gray-500 mt-1">
                          Available for remote work worldwide
                        </span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-1">
                        Availability
                      </h4>
                      <p className="text-gray-600">
                        Currently open for new projects
                        <span className="block text-sm text-gray-500 mt-1">
                          Initial response within 24-48 hours
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Connect with me
                </h3>
                <div className="flex space-x-5">
                  {[
                    { name: "GitHub", icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" },
                    { name: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                    { name: "Twitter", icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
                    { name: "Dribbble", icon: "M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0.2 62 2.58 11.81 6.633 14.95zm16.4-16.6z" }
                  ].map((platform) => (
                    <a
                      key={platform.name}
                      href={`#${platform.name.toLowerCase()}`}
                      className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center group transition-all"
                      onMouseEnter={() => setCursorHovering(true)}
                      onMouseLeave={() => setCursorHovering(false)}
                    >
                      <span className="sr-only">{platform.name}</span>
                      <svg
                        className="h-5 w-5 text-indigo-600 group-hover:text-indigo-800 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d={platform.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h3>
                
                <div className="space-y-6">
                  {[
                    {
                      question: "What is your typical project process?",
                      answer: "I follow a structured approach: discovery, planning, design, development, testing, and launch. Each phase includes client collaboration and feedback."
                    },
                    {
                      question: "What are your rates?",
                      answer: "My rates vary based on project scope and complexity. I offer hourly rates and project-based pricing. Contact me for a personalized quote."
                    },
                    {
                      question: "How long does a typical project take?",
                      answer: "Project timelines depend on scope and requirements. A simple website might take 2-4 weeks, while complex applications can take 2-3 months or more."
                    }
                  ].map((faq, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 "
                    >
                      <h4 className="text-lg font-medium text-gray-900 mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-gray-600">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sticky top-32">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send a Message
                </h3>
                
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-gray-600 mb-0">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : formError ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-red-50 border border-red-200 rounded-xl p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Something went wrong!
                    </h4>
                    <p className="text-gray-600 mb-4">
                      There was an error sending your message. Please try again.
                    </p>
                    <button
                      onClick={() => setFormError(false)}
                      className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
                    >
                      Try Again
                    </button>
                  </motion.div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 placeholder-gray-500"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 placeholder-gray-500"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 placeholder-gray-500"
                        placeholder="Project Inquiry"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 placeholder-gray-500"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>
                    
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className={`w-full px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all relative ${
                        isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                      }`}
                      onMouseEnter={() => setCursorHovering(true)}
                      onMouseLeave={() => setCursorHovering(false)}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="opacity-0">Send Message</span>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          </div>
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </motion.button>
                    
                    <p className="text-sm text-gray-500 text-center mt-4">
                      I'll respond to your message within 24-48 hours.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-10"></div>
        <div className="container mx-auto px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Whether you need a complete digital solution or have a specific challenge in mind,
              I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg font-medium transition-transform hover:-translate-y-1 hover:shadow-lg"
                onMouseEnter={() => setCursorHovering(true)}
                onMouseLeave={() => setCursorHovering(false)}
              >
                Get In Touch
              </a>
              <Link
                to="/projects"
                className="px-8 py-4 rounded-full border-2 border-gray-300 text-gray-700 text-lg font-medium transition-all hover:border-indigo-500 hover:text-indigo-500"
                onMouseEnter={() => setCursorHovering(true)}
                onMouseLeave={() => setCursorHovering(false)}
              >
                View My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scroll progress indicator */}
      <motion.div 
        className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
};

export default Contact;