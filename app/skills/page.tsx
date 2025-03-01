'use client';

import { motion } from 'framer-motion';
import { FaBrain, FaServer, FaReact, FaDocker, FaPython, FaDatabase, FaGithub, FaCloud } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFastapi, SiLangchain } from 'react-icons/si';
import PageTransition from '../components/PageTransition';

export default function Skills() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      description: "Expertise in building AI-powered applications and language models",
      icon: FaBrain,
      color: "from-purple-400 to-pink-500",
      skills: [
        {
          name: "LangChain",
          icon: SiLangchain,
          level: 90,
          description: "Building AI applications with LLMs, chains, and agents"
        },
        {
          name: "Python for AI",
          icon: FaPython,
          level: 85,
          description: "Advanced Python programming for AI/ML applications"
        }
      ]
    },
    {
      title: "Backend Development",
      description: "Strong foundation in building scalable backend services",
      icon: FaServer,
      color: "from-green-400 to-emerald-500",
      skills: [
        {
          name: "FastAPI",
          icon: SiFastapi,
          level: 88,
          description: "High-performance API development with Python"
        },
        {
          name: "PostgreSQL",
          icon: FaDatabase,
          level: 85,
          description: "Database design and optimization"
        }
      ]
    },
    {
      title: "Frontend Development",
      description: "Modern web development with latest technologies",
      icon: FaReact,
      color: "from-cyan-400 to-blue-500",
      skills: [
        {
          name: "Next.js",
          icon: SiNextdotjs,
          level: 92,
          description: "Server-side rendering and static site generation"
        },
        {
          name: "TypeScript",
          icon: SiTypescript,
          level: 88,
          description: "Type-safe JavaScript development"
        },
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
          level: 90,
          description: "Utility-first CSS framework"
        }
      ]
    },
    {
      title: "DevOps & Cloud",
      description: "Experience with modern deployment and containerization",
      icon: FaCloud,
      color: "from-orange-400 to-red-500",
      skills: [
        {
          name: "Docker",
          icon: FaDocker,
          level: 85,
          description: "Containerization and microservices architecture"
        },
        {
          name: "Git & GitHub",
          icon: FaGithub,
          level: 90,
          description: "Version control and collaboration"
        }
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="min-h-screen py-20">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-8 text-center">
              Technical Skills
            </h1>
            
            <p className="text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
              Specialized in AI integration, full-stack development, and cloud deployment with a focus on building scalable applications.
            </p>

            <div className="grid lg:grid-cols-2 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="relative group"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500`} />
                  <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}
                      >
                        <category.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h2 className="text-2xl font-semibold text-slate-200">
                          {category.title}
                        </h2>
                        <p className="text-slate-400 text-sm">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                          className="group/skill"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <skill.icon className="w-5 h-5 text-slate-400 group-hover/skill:text-cyan-400 transition-colors" />
                            <h3 className="text-slate-200 font-medium group-hover/skill:text-cyan-400 transition-colors">
                              {skill.name}
                            </h3>
                          </div>
                          <div className="relative h-2 bg-slate-700/50 rounded-full overflow-hidden">
                            <motion.div
                              className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.color}`}
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                            />
                          </div>
                          <p className="text-sm text-slate-400 mt-2 group-hover/skill:text-slate-300 transition-colors">
                            {skill.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
}