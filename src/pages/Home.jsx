import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import projects from "../data/projects";

const Home = () => {
  // State management
  const [activeProject, setActiveProject] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorHovering, setCursorHovering] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  
  // References
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
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
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate projects
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [projects.length]);


  return (
    <div 
      ref={containerRef}
      className={`relative min-h-screen w-full ${
        isDarkMode ? "rgba(17, 24, 39, 0.8)" : "bg-white"
      } transition-colors duration-500`}
    >
      
      {/* Noise texture overlay */}
      <div className="fixed inset-0 pointer-events-none z-10 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
      

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Rotating Gradient Sphere */}
        <div className="absolute w-[800px] h-[800px] opacity-30 dark:opacity-40 blur-3xl">
          <motion.div
            animate={{ 
              rotateZ: 360,
              rotateY: 360,
              rotateX: 360,
            }}
            transition={{ 
              duration: 60, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
            style={{
              background: "conic-gradient(from 0deg, rgb(79, 70, 229), rgb(219, 39, 119), rgb(245, 208, 254), rgb(79, 70, 229))"
            }}
          />
        </div>

        <div className="container mx-auto px-8 relative z-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-6 flex items-center"
            >
              <div className="text-sm uppercase tracking-widest font-medium bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-1.5 rounded-full text-white dark:text-white">
                Web Developer & UI/UX Designer
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-bold tracking-tight mb-8"
            >
              <span className="block text-gray-900 dark:text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Jonathan Lara
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl"
            >
              I craft exceptional digital experiences with modern technologies and thoughtful design. Transforming complex problems into elegant, intuitive solutions.
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/work"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg font-medium transition-transform hover:-translate-y-1 hover:shadow-lg"
                onMouseEnter={() => setCursorHovering(true)}
                onMouseLeave={() => setCursorHovering(false)}
              >
                View My Work
              </Link>
              <a
                href="#contact"
                className="px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-lg font-medium transition-all hover:border-indigo-500 hover:text-indigo-500 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
                onMouseEnter={() => setCursorHovering(true)}
                onMouseLeave={() => setCursorHovering(false)}
              >
                Get In Touch
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <AnimatePresence>
          {showScrollIndicator && (
            <motion.div
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-8 h-12 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center pt-2"
              >
                <motion.div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600" />
              </motion.div>
              <div className="mt-2 text-x text-center text-gray-400 dark:text-gray-600 font-medium">
                SCROLL
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Featured Projects */}
      <section id="projects" ref={projectsRef} className="min-h-screen py-32 relative">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-1 bg-indigo-500 mr-4"></div>
              <h2 className="text-lg text-indigo-500 dark:text-indigo-400 font-semibold uppercase tracking-wide">
                Featured Projects
              </h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Recent Work
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              Explore a selection of projects that showcase my expertise in creating intuitive, impactful digital experiences.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative group"
                onMouseEnter={() => setCursorHovering(true)}
                onMouseLeave={() => setCursorHovering(false)}
              >
                <div className="relative aspect-video mb-8 overflow-hidden rounded-xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.bgColor} opacity-20`}></div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full bg-gray-100 dark:bg-gray-800 overflow-hidden"
                  >
                    {project.images?.length > 0 ? (
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${project.bgColor} opacity-50`}></div>
                    )}
                  </motion.div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 p-6"
                  >
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-medium"
                    >
                      View Project
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
                
                <h4 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 5).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-20 text-center"
          >
            <Link
              to="/projects"
              className="inline-flex items-center text-indigo-500 dark:text-indigo-400 font-medium hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
              onMouseEnter={() => setCursorHovering(true)}
              onMouseLeave={() => setCursorHovering(false)}
            >
              <span>View All Projects</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section id="skills" ref={skillsRef} className="py-32 relative bg-gray-50 dark:bg-gray-800/20">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white dark:from-gray-900 to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-gray-900 to-transparent z-10"></div>
        
        <div className="container mx-auto px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-1 bg-indigo-500 mr-4"></div>
              <h2 className="text-lg text-indigo-500 dark:text-indigo-400 font-semibold uppercase tracking-wide">
                Skills & Expertise
              </h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              My Toolbox
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              A comprehensive set of skills that allows me to build complete digital solutions from concept to deployment.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Development */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800"
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              
              <h4 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Development
              </h4>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Building robust, scalable applications with modern frameworks and clean, maintainable code.
              </p>
              
              <div className="space-y-3">
                {[
                  "React", 
                  "TypeScript",
                  "Node.js",
                  "Next.js",
                  "GraphQL",
                  "REST APIs",
                  "PostgreSQL",
                  "Firebase"
                ].map((skill, i) => (
                  <motion.div 
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: i * 0.2,
                      }}
                      className="w-2 h-2 rounded-full bg-indigo-500 mr-3"
                    />
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Design */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800"
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h4 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Design
              </h4>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Creating intuitive user experiences and visually striking interfaces that engage and delight users.
              </p>
              
              <div className="space-y-3">
                {[
                  "UI/UX Design", 
                  "Figma",
                  "Design Systems",
                  "Wireframing",
                  "Prototyping",
                  "User Research",
                  "Accessibility",
                  "Motion Design"
                ].map((skill, i) => (
                  <motion.div 
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: i * 0.2,
                      }}
                      className="w-2 h-2 rounded-full bg-purple-500 mr-3"
                    />
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800"
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              
              <h4 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Strategy
              </h4>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Analyzing problems and crafting solutions that align with business goals and user needs.
              </p>
              
              <div className="space-y-3">
                {[
                  "Product Strategy", 
                  "Information Architecture",
                  "User Journey Mapping",
                  "Analytics & Optimization",
                  "Project Management",
                  "Agile Methodologies",
                  "Problem Solving",
                  "Stakeholder Management"
                ].map((skill, i) => (
                  <motion.div 
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: i * 0.2,
                      }}
                      className="w-2 h-2 rounded-full bg-pink-500 mr-3"
                    />
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Experience timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-32"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Professional Journey
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-indigo-100 dark:bg-indigo-900/50"></div>
              
              {/* Timeline items */}
              {[
                {
                  year: "2023 - Present",
                  title: "Senior Frontend Developer",
                  company: "TechVision Inc.",
                  description: "Leading UI/UX implementation for enterprise applications using React, TypeScript, and design systems."
                },
                {
                  year: "2021 - 2023",
                  title: "UX Engineer",
                  company: "CreativeEdge Studio",
                  description: "Bridged the gap between design and development, creating interactive prototypes and implementing UI components."
                },
                {
                  year: "2019 - 2021",
                  title: "Frontend Developer",
                  company: "DigitalCraft Labs",
                  description: "Developed responsive web applications with modern JavaScript frameworks and collaborated with design teams."
                },
                {
                  year: "2018 - 2019",
                  title: "UI/UX Designer",
                  company: "Innovative Solutions",
                  description: "Created user-centered designs for web and mobile applications, focusing on usability and visual aesthetics."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex flex-col md:flex-row items-center md:justify-between mb-16 ${
                    i % 2 === 0 ? 'md:flex-row-reverse text-left md:text-right' : ''
                  }`}
                >
                  <div className="w-full md:w-5/12">
                    <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 dark:text-indigo-300 rounded-full mb-2">
                        {item.year}
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                      <h5 className="text-indigo-500 dark:text-indigo-400 font-medium mb-3">{item.company}</h5>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border-4 border-indigo-50 dark:border-gray-800 bg-indigo-500 z-10"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20 text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-1 bg-indigo-500 mr-4"></div>
              <h2 className="text-lg text-indigo-500 dark:text-indigo-400 font-semibold uppercase tracking-wide">
                Testimonials
              </h2>
              <div className="w-12 h-1 bg-indigo-500 ml-4"></div>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Client Feedback
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              What people say about working with me
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Product Manager, TechVision",
                quote: "Jonathan delivered an exceptional user experience that perfectly aligned with our brand identity. His attention to detail and problem-solving skills are remarkable.",
                image: "/images/testimonials/sarah.webp" 
              },
              {
                name: "Michael Chen",
                role: "CTO, CreativeEdge",
                quote: "Working with Jonathan was a pleasure. He understood our vision immediately and translated it into an intuitive interface that our users love.",
                image: "/images/testimonials/michael.webp"
              },
              {
                name: "Emily Rodriguez",
                role: "Founder, Design Forward",
                quote: "Jonathan's technical skills combined with his design sensibility make him a rare find. He consistently exceeded our expectations throughout the project.",
                image: "/images/testimonials/emily.webp"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 relative"
              >
                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                  <svg className="w-16 h-16 text-indigo-100 dark:text-indigo-900/30" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
                  </svg>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-700 dark:text-gray-300 italic relative z-10">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-32 relative bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI0ZGRiIvPjxwYXRoIGQ9Ik0zNiAzNC41YzAgMS4zODEtMS4xMTkgMi41LTIuNSAyLjVTMzEgMzUuODgxIDMxIDM0LjVTMzIuMTE5IDMyIDMzLjUgMzJzMi41IDEuMTE5IDIuNSAyLjV6bS0xMSAwYzAgMS4zODEtMS4xMTkgMi41LTIuNSAyLjVTMTYgMzUuODgxIDE2IDM0LjVTMTcuMTE5IDMyIDE4LjUgMzJzMi41IDEuMTE5IDIuNSAyLjV6bTExIDExYzAgMS4zODEtMS4xMTkgMi41LTIuNSAyLjVTMzEgNDYuODgxIDMxIDQ1LjVTMzIuMTE5IDQzIDMzLjUgNDNzMi41IDEuMTE5IDIuNSAyLjV6bS0xMSAwYzAgMS4zODEtMS4xMTkgMi41LTIuNSAyLjVTMTYgNDYuODgxIDE2IDQ1LjVTMTcuMTE5IDQzIDE4LjUgNDNzMi41IDEuMTE5IDIuNSAyLjV6IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')]" />
        </div>
        
        <div className="container mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-8">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can work together to bring your vision to life.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h4 className="text-2xl font-bold mb-8">Get in Touch</h4>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email</p>
                    <a href="mailto:jlara2019@gmail.com" className="text-lg hover:text-white/80 transition-colors">
                      jlara2019@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Location</p>
                    <p className="text-lg">Dallas, TX</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Availability</p>
                    <p className="text-lg">Open for new projects</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-xl font-bold mb-6">Connect with me</h4>
                <div className="flex space-x-4">
                  {[
                    { name: "GitHub", icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" },
                    { name: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                    { name: "Twitter", icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
                    { name: "Dribbble", icon: "M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0.2 62 2.58 11.81 6.633 14.95zm16.4-16.6z" }
                  ].map((platform, i) => (
                    <a
                      key={platform.name}
                      href={`#${platform.name.toLowerCase()}`}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      onMouseEnter={() => setCursorHovering(true)}
                      onMouseLeave={() => setCursorHovering(false)}
                    >
                      <span className="sr-only">{platform.name}</span>
                      <svg
                        className="h-5 w-5"
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
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm"
            >
              <h4 className="text-2xl font-bold mb-8">Send a Message</h4>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder-white/50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder-white/50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder-white/50"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder-white/50"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-4 bg-white text-indigo-600 font-medium rounded-lg hover:bg-opacity-95 transition-colors"
                  onMouseEnter={() => setCursorHovering(true)}
                  onMouseLeave={() => setCursorHovering(false)}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
        
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-white/20"
              style={{
                top: '50%',
                left: '50%',
                width: `${(i + 1) * 15}%`,
                height: `${(i + 1) * 15}%`,
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                repeat: Infinity,
                duration: 5 + i,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "20+", label: "Projects Completed" },
              { value: "15+", label: "Happy Clients" },
              { value: "3+", label: "Design Awards" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 10,
                    delay: 0.2 + index * 0.1 
                  }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
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

export default Home;