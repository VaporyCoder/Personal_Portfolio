import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projects from "../data/projects";

// Prefer design methods from `tools`; fallback to design-y `technologies`
const DESIGN_TAGS = new Set([
  "Figma","UI/UX Design","User Research","Wireframing","Prototyping",
  "Design System","Interaction Design","Motion Design","Accessibility",
  "Information Architecture","Usability Testing","Journey Mapping"
]);

const methodChips = (p) => {
  const fromTools = Array.isArray(p.tools) ? p.tools : [];
  if (fromTools.length) return [...new Set(fromTools)].slice(0, 6);
  const fromTech = Array.isArray(p.technologies)
    ? p.technologies.filter((t) => DESIGN_TAGS.has(t))
    : [];
  return [...new Set(fromTech)].slice(0, 6);
};

const Projects = () => {
  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-gray-900 transition-colors duration-500">
      {/* Noise texture overlay */}
      <div className="fixed inset-0 pointer-events-none z-10 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>

      {/* Case Studies */}
      <section id="projects" className="py-32 relative">
        <div className="container mx-auto px-8">
          {/* Section Header */}
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
                Case Studies
              </h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              All Projects
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              A selection of product design work. Each case study covers the problem, process, and outcomes.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, index) => {
              const chips = methodChips(project);
              return (
                <Link key={project.slug || project.id} to={`/projects/${project.slug}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative group bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden"
                    whileHover={{ y: -10 }}
                  >
                    {/* Project Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className={`absolute inset-0 ${project.bgColor || "bg-gradient-to-br from-indigo-500 to-purple-600"} opacity-20`}></div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full bg-gray-100 dark:bg-gray-800"
                      >
                        {project.images?.length > 0 ? (
                          <img
                            src={project.images[0]}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className={`w-full h-full ${project.bgColor || "bg-gradient-to-br from-indigo-500 to-purple-600"} opacity-50`}></div>
                        )}
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h4>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                        {project.shortDescription || project.overview}
                      </p>

                      {/* Methods/Tools chips */}
                      {chips.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {chips.map((chip) => (
                            <span
                              key={chip}
                              className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                            >
                              {chip}
                            </span>
                          ))}
                        </div>
                      )}

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium"
                      >
                        Read case study
                        <svg
                          className="ml-2 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
