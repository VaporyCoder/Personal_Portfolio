import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl"></div>
            <div className="absolute top-1/4 right-1/3 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-white/10 blur-2xl"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h1 className="text-3xl md:text-4xl font-bold mb-3 inline-block border-b-2 border-emerald-300 pb-1">
                  About Me
                </h1>
                <p className="text-lg text-emerald-50">
                  Full Stack Developer crafting exceptional digital experiences with passion and precision
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <p className="text-sm font-medium">
                  <span className="block text-emerald-200 text-xs mb-1">CURRENTLY</span>
                  Open to new opportunities and collaborations
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Sidebar / Image */}
              <div className="md:col-span-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="sticky top-24"
                >
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-xl mb-6 overflow-hidden shadow-md">
                    {/* Replace with your actual image */}
                    <div className="w-full h-64 overflow-hidden relative">
                      <img 
                        src="../images/about/about.webp" 
                        alt="Jonathan Lara" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Connect</h3>

                    <div className="flex space-x-4">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-emerald-100 hover:text-emerald-600 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-400 transition-colors shadow-sm"
                      >
                        <span className="sr-only">GitHub</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </motion.a>

                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-emerald-100 hover:text-emerald-600 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-400 transition-colors shadow-sm"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </motion.a>

                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://discord.com/users/vaporycoder"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-emerald-100 hover:text-emerald-600 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-400 transition-colors shadow-sm"
                      >
                        <span className="sr-only">Discord</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z" />
                        </svg>
                      </motion.a>
                    </div>

                    <div className="pt-4">
                      <Link 
                        to="/contact" 
                        className="inline-flex items-center justify-center w-full px-5 py-3 font-medium text-white bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 rounded-full shadow-sm transition-colors"
                      >
                        Contact Me
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:col-span-2"
              >
                <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
                  My Journey
                </h2>

                <div className="text-gray-600 dark:text-gray-300 space-y-6">
                  <p className="leading-relaxed">
                    Hello! I'm a Full Stack Developer with a passion for
                    creating elegant, efficient, and user-friendly web
                    applications. With a strong foundation in both frontend and
                    backend technologies, I enjoy bringing ideas to life through
                    code.
                  </p>
                  
                  <p className="leading-relaxed">
                    My journey in web development began with a fascination for
                    how websites work and has evolved into a career built on
                    continuous learning and problem-solving. I specialize in
                    JavaScript-based technologies like React, Node.js, and
                    modern frameworks that allow me to build robust, scalable
                    applications.
                  </p>
                  
                  <p className="leading-relaxed">
                    When I'm not coding, you can find me exploring new
                    technologies, contributing to open-source projects, or
                    enhancing my skills through online courses and workshops. I
                    believe in writing clean, maintainable code and creating
                    applications that provide exceptional user experiences.
                  </p>
                </div>

                <h2 className="text-3xl font-bold mb-8 mt-12 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
                  Skills & Expertise
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold mb-4 text-emerald-600 dark:text-emerald-400 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                      </svg>
                      Frontend Development
                    </h3>
                    <ul className="space-y-2">
                      {["React.js / Next.js", "JavaScript / TypeScript", "HTML5 / CSS3", "Tailwind CSS / SCSS", "Responsive Web Design"].map((skill, i) => (
                        <li key={i} className="flex items-center">
                          <motion.div 
                            className="w-2 h-2 rounded-full bg-emerald-500 mr-2"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 1, repeat: Infinity, repeatDelay: i * 0.5 }}
                          ></motion.div>
                          <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold mb-4 text-emerald-600 dark:text-emerald-400 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                      </svg>
                      Backend Development
                    </h3>
                    <ul className="space-y-2">
                      {["Node.js / Express.js", "Database Design (SQL/NoSQL)", "PostgreSQL / MongoDB", "RESTful APIs", "Authentication & Security"].map((skill, i) => (
                        <li key={i} className="flex items-center">
                          <motion.div 
                            className="w-2 h-2 rounded-full bg-emerald-500 mr-2"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 1, repeat: Infinity, repeatDelay: i * 0.5 }}
                          ></motion.div>
                          <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-8 mt-12 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
                  Education & Certifications
                </h2>

                <div className="space-y-8 mb-10">
                  {[
                    {
                      title: "Bachelor of Business Administration",
                      institution: "Oklahoma State University",
                      period: "2019-2022",
                      icon: "🎓"
                    },
                    {
                      title: "Cybersecurity Certificate",
                      institution: "ISC2",
                      period: "2022",
                      icon: "🛡️"
                    },
                    {
                      title: "Full Stack Web Development",
                      institution: "FullStack Academy",
                      period: "2023",
                      icon: "💻"
                    },
                    {
                      title: "UI/UX Design & Research Certified",
                      institution: "Google",
                      period: "2023",
                      icon: "🎨"
                    }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start bg-gray-50 dark:bg-gray-900 rounded-xl p-5 shadow-sm"
                    >
                      <div className="text-2xl mr-4">{item.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                          {item.institution}
                        </p>
                        <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
                          {item.period}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 dark:from-emerald-900/20 dark:to-teal-900/20"></div>
        
        {/* Animated rings background */}
        <div className="absolute inset-0 overflow-hidden">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-emerald-500/30 dark:border-emerald-500/10"
              style={{
                top: '50%',
                left: '50%',
                width: `${i * 200}px`,
                height: `${i * 200}px`,
                marginLeft: `-${i * 100}px`,
                marginTop: `-${i * 100}px`,
              }}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.2, 0.3],
              }}
              transition={{
                repeat: Infinity,
                duration: 5 + i,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Let's Build Something Amazing Together
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I'm currently available for freelance work and open to new opportunities.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-lg rounded-full shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1 inline-flex items-center"
              >
                Start a Conversation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;