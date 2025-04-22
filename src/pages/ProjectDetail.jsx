import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import projects from "../data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [activeImage, setActiveImage] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <h2 className="text-2xl text-gray-900 dark:text-white">Project not found</h2>
      </div>
    );
  }
  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-gray-900 transition-colors duration-500">
      {/* Noise texture overlay */}
      <div className="fixed inset-0 pointer-events-none z-10 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-32">
        <div className="absolute w-[800px] h-[800px] opacity-30 dark:opacity-40 blur-3xl">
          <motion.div
            animate={{ rotateZ: 360, rotateY: 360, rotateX: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className={`w-full h-full rounded-full ${project.bgColor}`}
          />
        </div>

        <div className="container mx-auto px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                {project.title}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              {project.shortDescription}
            </p>
            <div className="flex justify-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg font-medium hover:-translate-y-1 hover:shadow-lg transition-transform"
                >
                  View Live
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-lg font-medium hover:border-indigo-500 hover:text-indigo-500 dark:hover:border-indigo-400 dark:hover:text-indigo-400 transition-all"
                >
                  View Code
                </a>
              )}
              {project.figmaUrl && (
    <a
      href={project.figmaUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 rounded-full border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-lg font-medium hover:border-indigo-500 hover:text-indigo-500 dark:hover:border-indigo-400 dark:hover:text-indigo-400 transition-all"
    >
      View Figma
    </a>
  )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-1 bg-indigo-500 mr-4"></div>
              <h2 className="text-lg text-indigo-500 dark:text-indigo-400 font-semibold uppercase tracking-wide">
                Project Overview
              </h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About {project.title}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
              {project.overview}
            </p>
          </motion.div>

          {/* Image Gallery */}
          {project.images?.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6">
                <motion.img
                  key={activeImage}
                  src={project.images[activeImage]}
                  alt={`${project.title} screenshot ${activeImage + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              <div className="flex gap-4 justify-center">
                {project.images.map((img, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-24 h-16 rounded-lg overflow-hidden ${activeImage === index ? 'ring-2 ring-indigo-500' : ''}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                       src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Technical Details Section */}
<section className="py-24 relative bg-gray-50 dark:bg-gray-800/20">
  <div className="container mx-auto px-8">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="mb-16"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-1 bg-indigo-500 mr-4"></div>
        <h2 className="text-lg text-indigo-500 dark:text-indigo-400 font-semibold uppercase tracking-wide">
          Technical Implementation
        </h2>
      </div>
      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
        How It Was Built
      </h3>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {project.frontend && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800"
          whileHover={{ y: -10 }}
        >
          <h4 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Frontend</h4>
          <ul className="space-y-3">
            {project.frontend.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: i * 0.2 }}
                  className="w-2 h-2 rounded-full bg-indigo-500 mr-3"
                />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}

      {project.backend && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800"
          whileHover={{ y: -10 }}
        >
          <h4 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Backend</h4>
          <ul className="space-y-3">
            {project.backend.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: i * 0.2 }}
                  className="w-2 h-2 rounded-full bg-indigo-500 mr-3"
                />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}

      {project.design && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800"
          whileHover={{ y: -10 }}
        >
          <h4 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Design</h4>
          <ul className="space-y-3">
            {project.design.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: i * 0.2 }}
                  className="w-2 h-2 rounded-full bg-indigo-500 mr-3"
                />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}

      {project.research && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800"
          whileHover={{ y: -10 }}
        >
          <h4 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Research</h4>
          <ul className="space-y-3">
            {project.research.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: i * 0.2 }}
                  className="w-2 h-2 rounded-full bg-indigo-500 mr-3"
                />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>

    {project.technical && (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mt-12"
      >
        <h4 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Technical Highlights</h4>
        <ul className="space-y-4">
          {project.technical.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-gray-600 dark:text-gray-300"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    )}

    {project.process && (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mt-12"
      >
        <h4 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Process</h4>
        <ul className="space-y-4">
          {project.process.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-md border border-gray-100 dark:border-gray-800"
            >
              <h5 className="font-bold text-gray-900 dark:text-white mb-2">{item.phase}</h5>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    )}
  </div>
</section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-1 bg-indigo-500 mr-4"></div>
              <h2 className="text-lg text-indigo-500 dark:text-indigo-400 font-semibold uppercase tracking-wide">
                Key Features
              </h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              What Makes It Stand Out
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800"
                whileHover={{ y: -10 }}
              >
                <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 relative bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        <div className="container mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-1 bg-white mr-4"></div>
              <h2 className="text-lg font-semibold uppercase tracking-wide">
                Challenges & Solutions
              </h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Overcoming Obstacles
            </h3>
          </motion.div>

          <div className="space-y-8">
            {project.challenges.map((challenge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm"
              >
                <h4 className="text-xl font-bold mb-3">Problem: {challenge.problem}</h4>
                <p className="text-white/80">Solution: {challenge.solution}</p>
              </motion.div>
            ))}
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

      {/* Results Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-1 bg-indigo-500 mr-4"></div>
              <h2 className="text-lg text-indigo-500 dark:text-indigo-400 font-semibold uppercase tracking-wide">
                Project Outcomes
              </h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Impact & Achievements
            </h3>
          </motion.div>

          <ul className="space-y-4 mb-12">
            {project.results.map((result, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: i * 0.2 }}
                  className="w-2 h-2 rounded-full bg-indigo-500 mr-3 mt-2"
                />
                <span className="text-gray-600 dark:text-gray-300">{result}</span>
              </motion.li>
            ))}
          </ul>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {project.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 + i * 0.1 }}
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

      {/* Next Steps Section */}
      <section className="py-24 relative bg-gray-50 dark:bg-gray-800/20">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-1 bg-indigo-500 mr-4"></div>
              <h2 className="text-lg text-indigo-500 dark:text-indigo-400 font-semibold uppercase tracking-wide">
                Future Plans
              </h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              What's Next for {project.title}
            </h3>
          </motion.div>

          <ul className="space-y-4">
            {project.nextSteps.map((step, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: i * 0.2 }}
                  className="w-2 h-2 rounded-full bg-indigo-500 mr-3 mt-2"
                />
                <span className="text-gray-600 dark:text-gray-300">{step}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative">
        <div className="container mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Build Something Extraordinary
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Interested in collaborating on a project like {project.title}? Let's connect and create something impactful together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full text-lg font-medium hover:-translate-y-1 hover:shadow-lg transition-transform"
            >
              Get in Touch
              <svg
                className="ml-2 w-5 h-5"
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
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;