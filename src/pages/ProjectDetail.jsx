import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Import project data
import projects from '../data/projects'

const ProjectDetail = () => {
  const { projectId } = useParams()
  
  // Find the current project based on the URL parameter
  const project = projects.find(p => p.slug === projectId)
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
    
    // Update document title
    document.title = project ? `${project.title} | Portfolio` : 'Project | Portfolio'
  }, [project])
  
  // If project not found
  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-6">Project Not Found</h1>
        <p className="mb-8 text-lg">The project you're looking for doesn't exist or has been removed.</p>
        <Link to="/projects" className="btn btn-primary">
          Back to Projects
        </Link>
      </div>
    )
  }
  
  return (
    <article>
      {/* Hero Section */}
      <section className={`py-20 ${project.bgColor || 'bg-indigo-600'} text-white`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                <p className="text-xl text-white/80 mb-6">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.liveUrl && (
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn bg-white text-indigo-600 hover:bg-indigo-50"
                    >
                      View Live
                    </a>
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn bg-indigo-800 text-white hover:bg-indigo-700"
                      >
                        GitHub Repo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Project Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>{project.overview}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Image/Screenshot */}
      {project.images && project.images.length > 0 && (
        <section className="py-10 bg-slate-100 dark:bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="card overflow-hidden shadow-lg">
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Technical Implementation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Technical Implementation</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              {project.technical && project.technical.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            {/* Tech Stack Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <ul className="space-y-2">
                  {project.frontend && project.frontend.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <ul className="space-y-2">
                  {project.backend && project.backend.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.features && project.features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6"
                >
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Challenges & Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10">Challenges & Solutions</h2>
            
            <div className="space-y-12">
              {project.challenges && project.challenges.map((challenge, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-red-600 dark:text-red-400">Challenge</h3>
                    <p className="text-slate-700 dark:text-slate-300">{challenge.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-green-600 dark:text-green-400">Solution</h3>
                    <p className="text-slate-700 dark:text-slate-300">{challenge.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Results & Takeaways */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Results & Takeaways</h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {project.results && project.results.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            {/* Project Statistics */}
            {project.stats && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {project.stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <p className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{stat.value}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Next Steps */}
      {project.nextSteps && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Future Development</h2>
              
              <ul className="space-y-4">
                {project.nextSteps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
      
      {/* Navigation between projects */}
      <section className="py-12 bg-slate-100 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <Link to="/projects" className="btn btn-secondary w-full sm:w-auto">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
                </svg>
                All Projects
              </Link>
              
              <Link to="/contact" className="btn btn-primary w-full sm:w-auto">
                Discuss a Project
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}

export default ProjectDetail