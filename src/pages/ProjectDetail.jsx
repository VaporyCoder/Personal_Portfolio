import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import projects from "../data/projects";

const Pill = ({ children }) => (
  <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
    {children}
  </span>
);

const Section = ({ eyebrow, title, children, className = "" }) => (
  <section className={`py-24 relative ${className}`}>
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
            {eyebrow}
          </h2>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          {title}
        </h3>
      </motion.div>
      {children}
    </div>
  </section>
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = (projects || []).find((p) => p.slug === slug);
  const [activeImage, setActiveImage] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <h2 className="text-2xl text-gray-900 dark:text-white">
          Project not found
        </h2>
      </div>
    );
  }

  const {
    title,
    shortDescription,
    overview,
    images = [],
    bgColor,
    liveUrl,
    githubUrl,
    figmaUrl,
    role = "UX/UI Designer",
    team = "Solo project",
    timeline = "4–6 weeks",
    tools = [],
    problem,
    goals = [],
    research = [],
    process = [],
    design = [],
    outcomes = [],
    nextSteps = [],
    features = [],
    stats = [],
  } = project;

  const processItems = process.map((step) =>
    typeof step === "string" ? { phase: "Step", description: step } : step
  );

  const decisions =
    design.length > 0
      ? design.map((d) =>
          typeof d === "string" ? { title: "Decision", description: d } : d
        )
      : features.map((f) =>
          typeof f === "string" ? { title: "Decision", description: f } : f
        );

  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-gray-900 transition-colors duration-500">
      {/* Noise texture overlay */}
      <div className="fixed inset-0 pointer-events-none z-10 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-32">
        <div className="absolute w-[800px] h-[800px] opacity-30 dark:opacity-40 blur-3xl">
          <motion.div
            animate={{ rotateZ: 360, rotateY: 360, rotateX: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className={`w-full h-full rounded-full ${
              bgColor || "bg-gradient-to-br from-indigo-500 to-purple-600"
            }`}
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
                {title}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              {shortDescription || overview}
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg font-medium hover:-translate-y-1 hover:shadow-lg transition-transform"
                >
                  View Live
                </a>
              )}
              {figmaUrl && (
                <a
                  href={figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-lg font-medium hover:border-indigo-500 hover:text-indigo-500 dark:hover:border-indigo-400 dark:hover:text-indigo-400 transition-all"
                >
                  View Figma
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-lg font-medium hover:border-indigo-500 hover:text-indigo-500 dark:hover:border-indigo-400 dark:hover:text-indigo-400 transition-all"
                >
                  View Code
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <Section eyebrow="Project Overview" title={`About ${title}`}>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
          {overview}
        </p>

        {/* Meta: Role, Timeline, Team, Tools */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Role
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{role}</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Timeline
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{timeline}</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Team
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{team}</p>
          </div>
        </div>

        {tools.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {tools.slice(0, 8).map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
        )}

        {/* Image Gallery */}
        {images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative mt-12"
          >
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6">
              <motion.img
                key={activeImage}
                src={images[activeImage]}
                alt={`${title} screenshot ${activeImage + 1}`}
                className="w-full h-full object-contain bg-white dark:bg-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            <div className="flex gap-4 justify-center">
              {images.map((img, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-24 h-16 rounded-lg overflow-hidden ${
                    activeImage === index ? "ring-2 ring-indigo-500" : ""
                  }`}
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
      </Section>

      {/* Problem & Goals */}
      {(problem || goals.length > 0) && (
        <Section
          eyebrow="Framing"
          title="Problem & Goals"
          className="bg-gray-50 dark:bg-gray-800/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
              <h4 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Problem
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {problem || "What user or business problem were we solving?"}
              </p>
            </div>
            {goals.length > 0 && (
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
                <h4 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Goals
                </h4>
                <ul className="space-y-3">
                  {goals.map((g, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-indigo-500 mr-3 mt-2" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {g}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Section>
      )}

      {/* Research */}
      {research.length > 0 && (
        <Section eyebrow="Discovery" title="Research">
          <ul className="space-y-4">
            {research.map((r, i) => (
              <li
                key={i}
                className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-md border border-gray-100 dark:border-gray-800"
              >
                <p className="text-gray-700 dark:text-gray-300">{r}</p>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* Personas */}
      {project.personas?.length > 0 && (
        <Section
          eyebrow="Users"
          title="Personas"
          className="bg-gray-50 dark:bg-gray-800/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.personas.map((persona, i) => {
              const accents = [
                "from-indigo-500 to-purple-600",
                "from-pink-500 to-rose-600",
                "from-emerald-500 to-teal-600",
                "from-amber-500 to-orange-600",
              ];
              const accent = persona.accent || accents[i % accents.length];

              return (
                <div
                  key={i}
                  className="relative rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm overflow-hidden"
                >
                  {/* Accent header strip */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${accent}`} />

                  <div className="p-8">
                    {/* Persona name + optional tagline */}
                    <div className="mb-4">
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {persona.name}
                      </h4>
                      {persona.tagline && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {persona.tagline}
                        </p>
                      )}
                    </div>

                    {/* Summary */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {persona.summary}
                    </p>

                    {/* Needs as chips */}
                    {persona.needs?.length > 0 && (
                      <div className="mb-6">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Needs
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {persona.needs.map((n, j) => (
                            <span
                              key={j}
                              className="px-2.5 py-1 text-xs rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                            >
                              {n}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Pain points */}
                    {persona.painPoints?.length > 0 && (
                      <div className="mb-6">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Pain Points
                        </h5>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                          {persona.painPoints.map((p, j) => (
                            <li key={j}>{p}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Success */}
                    {persona.success?.length > 0 && (
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Success Looks Like
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {persona.success.map((s, j) => (
                            <span
                              key={j}
                              className="px-2.5 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Section>
      )}

      {/* Process */}
      {processItems.length > 0 && (
        <Section
          eyebrow="Approach"
          title="Process"
          className="bg-gray-50 dark:bg-gray-800/20"
        >
          <ul className="space-y-4">
            {processItems.map((step, i) => (
              <li
                key={i}
                className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-md border border-gray-100 dark:border-gray-800"
              >
                <h5 className="font-bold text-gray-900 dark:text-white mb-2">
                  {step.phase || `Step ${i + 1}`}
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* Key Design Decisions */}
      {decisions.length > 0 && (
        <Section eyebrow="Design" title="Key Design Decisions">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {decisions.map((d, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800"
              >
                <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {d.title || "Decision"}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {d.description || (typeof d === "string" ? d : "")}
                </p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Outcomes & Metrics */}
      {(outcomes.length > 0 || stats.length > 0) && (
        <Section eyebrow="Impact" title="Outcomes">
          {outcomes.length > 0 && (
            <ul className="space-y-4 mb-12">
              {outcomes.map((o, i) => (
                <li key={i} className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 mr-3 mt-2" />
                  <span className="text-gray-600 dark:text-gray-300">{o}</span>
                </li>
              ))}
            </ul>
          )}
          {stats.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                    {s.value}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{s.label}</p>
                </div>
              ))}
            </div>
          )}
        </Section>
      )}

      {/* Next Steps */}
      {nextSteps.length > 0 && (
        <Section
          eyebrow="Future Plans"
          title={`What's Next for ${title}`}
          className="bg-gray-50 dark:bg-gray-800/20"
        >
          <ul className="space-y-4">
            {nextSteps.map((n, i) => (
              <li key={i} className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-indigo-500 mr-3 mt-2" />
                <span className="text-gray-600 dark:text-gray-300">{n}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </div>
  );
};

export default ProjectDetail;
