import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../data/projects";

const Projects = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-10 left-1/4 w-40 h-40 rounded-full bg-white/10 blur-2xl"></div>
          <div className="grid grid-cols-6 gap-1 absolute inset-0 opacity-10">
            {Array(24)
              .fill()
              .map((_, i) => (
                <div key={i} className="h-6 w-6 rounded-sm bg-white"></div>
              ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-between"
          >
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-3 inline-block border-b-2 border-indigo-300 pb-1">
                Featured Projects
              </h1>
              <p className="text-lg text-indigo-100 mt-3">
                Explore my portfolio of web applications, showcasing creative
                solutions and technical expertise.
              </p>
            </div>

            <div className="mt-6 md:mt-0">
              <a
                href="#projects-grid"
                className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg border border-white/20 transition-colors"
              >
                <span>View All</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group h-full flex flex-col"
              >
                <div
                  className={`relative overflow-hidden h-56 ${
                    project.bgColor || "bg-indigo-600"
                  }`}
                >
                  {project.images && project.images.length > 0 ? (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300"
                  >
                    View Case Study
                    <svg
                      className="ml-1 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Work/Simple Projects Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Other Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Small Project Cards - These would be simpler projects without full case studies */}
              {[1, 2, 3, 4].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6"
                >
                  <h3 className="text-xl font-bold mb-2">
                    Small Project {item}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Brief description of a smaller project or contribution.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full">
                      Tech 1
                    </span>
                    <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full">
                      Tech 2
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 dark:bg-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interested in Working Together?
            </h2>
            <p className="text-xl mb-10 text-indigo-100">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
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
  );
};

export default Projects;
