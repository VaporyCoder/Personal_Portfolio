import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Full Stack Developer Crafting <span className="text-indigo-600 dark:text-indigo-400">Digital Experiences</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-10 max-w-3xl mx-auto">
              I build modern, responsive web applications with a focus on user experience and performance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/projects" 
                className="btn btn-primary text-lg px-8 py-3"
              >
                View My Work
              </Link>
              <Link 
                to="/contact" 
                className="btn btn-secondary text-lg px-8 py-3"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 opacity-10 dark:opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-indigo-300 filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-300 filter blur-3xl"></div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Check out some of my recent work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AnimeNexus Project Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card group"
            >
              <div className="relative overflow-hidden h-56">
                {/* Replace with actual project image */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">AnimeNexus</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">AnimeNexus</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  A modern anime and manga tracking platform with social features and AI-enhanced content.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full">React</span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full">Node.js</span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full">PostgreSQL</span>
                </div>
                <Link 
                  to="/projects/animenexus" 
                  className="inline-flex items-center font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300"
                >
                  View Case Study
                  <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Example Project Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card group"
            >
              <div className="relative overflow-hidden h-56">
                {/* Replace with actual project image */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">Project Name</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Name</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Brief description of the project and what technologies were used.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full">Tech 1</span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full">Tech 2</span>
                </div>
                <Link 
                  to="/projects/project-name" 
                  className="inline-flex items-center font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300"
                >
                  View Case Study
                  <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Example Project Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="card group"
            >
              <div className="relative overflow-hidden h-56">
                {/* Replace with actual project image */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">Project Name</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Name</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Brief description of the project and what technologies were used.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full">Tech 1</span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full">Tech 2</span>
                </div>
                <Link 
                  to="/projects/project-name" 
                  className="inline-flex items-center font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300"
                >
                  View Case Study
                  <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/projects" 
              className="btn btn-secondary"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              I specialize in full-stack web development with a focus on modern JavaScript technologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {/* Skill Items */}
            {['React', 'Node.js', 'Express.js', 'PostgreSQL', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Git'].map((skill, index) => (
              <motion.div 
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="font-medium">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 dark:bg-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl mb-10 text-indigo-100">
              I'm currently available for freelance work and open to new opportunities.
            </p>
            <Link 
              to="/contact" 
              className="btn bg-white text-indigo-600 hover:bg-indigo-50 text-lg px-8 py-3"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home