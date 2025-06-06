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
        <div className="absolute w-[800px] h-[800px] opacity-30  blur-3xl">
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
              <div className="text-sm uppercase tracking-widest font-medium bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-1.5 rounded-full text-white">
                Web Developer & UI/UX Designer
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-bold tracking-tight mb-8"
            >
              <span className="block text-gray-900">Hi, I'm </span>
              <span className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Jonathan Lara
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl"
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
                className="px-8 py-4 rounded-full border-2 border-gray-300 text-gray-700 text-lg font-medium transition-all hover:border-indigo-500 hover:text-indigo-500"
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
                className="w-8 h-12 rounded-full border-2 border-gray-400 justify-center pt-2"
              >
                <motion.div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
              </motion.div>
              <div className="mt-2 text-x text-center text-gray-400 font-medium">
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
              <h2 className="text-lg text-indigo-500 font-semibold uppercase tracking-wide">
                Featured Projects
              </h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Recent Work
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl">
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
                    className="w-full h-full bg-gray-100 overflow-hidden"
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
                
                <h4 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-indigo-500 transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-gray-600 mb-6">
                  {project.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 5).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
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
              className="inline-flex items-center text-indigo-500 font-medium hover:text-indigo-600 transition-colors"
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
      <section id="skills" ref={skillsRef} className="py-32 relative bg-gray-50">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
        
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
              <h2 className="text-lg text-indigo-500 font-semibold uppercase tracking-wide">
                Skills & Expertise
              </h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              My Toolbox
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl">
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
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              
              <h4 className="text-2xl font-bold mb-4 text-gray-900">
                Development
              </h4>
              
              <p className="text-gray-600 mb-6">
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
                    <span className="text-gray-700">{skill}</span>
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
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h4 className="text-2xl font-bold mb-4 text-gray-900">
                Design
              </h4>
              
              <p className="text-gray-600 mb-6">
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
                    <span className="text-gray-700">{skill}</span>
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
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              
              <h4 className="text-2xl font-bold mb-4 text-gray-900 ">
                Strategy
              </h4>
              
              <p className="text-gray-600 mb-6">
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
                    <span className="text-gray-700">{skill}</span>
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
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Professional Journey
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-indigo-100"></div>
              
              {/* Timeline items */}
              {[
                {
                  year: "2024 - Present",
                  title: "Freelance Web Developer",
                  company: "Self-employed",
                  description: "Designing and developing custom responsive websites and web applications for diverse clients using React, TypeScript and modern UI frameworks. Managing projects from concept to deployment while providing ongoing technical support and maintenance."
                },
                {
                  year: "2024",
                  title: "Google UX/UI Design",
                  company: "Certificate",
                  description: "Completed comprehensive UX/UI training focused on user-centered design principles and prototyping. Developed skills in translating design mockups into functional interfaces while maintaining accessibility and usability standards."
                },
                {
                  year: "2023",
                  title: "University of Texas at Dallas",
                  company: "Web Development Bootcamp",
                  description: "Mastered full-stack web development fundamentals through intensive project-based learning. Led cross-functional teams in building responsive web applications while developing strong collaboration and problem-solving skills."
                },
                {
                  year: "2020-2022",
                  title: "Oklahoma State University",
                  company: "Business Administration",
                  description: "Pursued a degree in business administration"
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
                    <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-500 bg-indigo-50 rounded-full mb-2">
                        {item.year}
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h4>
                      <h5 className="text-indigo-500 font-medium mb-3">{item.company}</h5>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border-4 border-indigo-50 bg-indigo-500 z-10"></div>
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
              <h2 className="text-lg text-indigo-500 font-semibold uppercase tracking-wide">
                Testimonials
              </h2>
              <div className="w-12 h-1 bg-indigo-500 ml-4"></div>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Client Feedback
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative"
              >
                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                  <svg className="w-16 h-16 text-indigo-100 " fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
                  </svg>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-700 italic relative z-10">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
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
                  className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-600">{stat.label}</p>
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