"use client"
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaArrowRight, FaRobot, FaBrain, FaCode, FaMicrochip } from 'react-icons/fa';
import Navbar from '../components/Navbar';

interface Project {
  title: string;
  shortDesc: string;
  tech: string[];
  thumbnail: string;
  demoLink: string;
  githubLink: string;
  embedLink?: string;
  embedHeight?: number;
}

export const projects: Project[] = [
  {
    title: "AI Fitness Coach",
    shortDesc: "Full-stack AI fitness platform with personalized workout plans and progress tracking",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Langchain", "Prompt Engineering"],
    thumbnail: "/thumbnails/OIP.jfif",
    demoLink: "https://www.linkedin.com/posts/typescriptahsan_ai-fitness-innovation-activity-7297701499726389248-HZGb",
    githubLink: "https://github.com/Ahsan462aggk/fitness-ai-coach",
    embedLink: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7297701443564662784",
    embedHeight: 999
  },
  {
    title: "Healthcare Knowledge Assistant",
    shortDesc: "Get reliable medical info backed by PubMed research",
    tech: ["PubMed API", "Langgraph", "FastAPI", "Next.js"],
    thumbnail: "/thumbnails/healthcare.jpg",
    demoLink: "https://www.linkedin.com/posts/typescriptahsan_ai-healthcaretech-langgraph-activity-7301192107921154049-5iAf",
    githubLink: "https://github.com/Ahsan462aggk/healthcare-assistant",
    embedLink: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7301191992825323520",
    embedHeight: 800
  },
  {
    title: "AI Expense Tracker Agent",
    shortDesc: "Natural language expense management with AI assistant - add, track, and manage expenses through conversation",
    tech: ["LangGraph", "FastAPI", "React.js"],
    thumbnail: "/thumbnails/expense-tracker.jpg",
    demoLink: "https://www.linkedin.com/posts/typescriptahsan_expensetracker-ai-fintech-activity-7274863743543521281-Niw3",
    githubLink: "https://github.com/Ahsan462aggk/Expense_Tracker_agent",
    embedLink: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7274863681606189059",
    embedHeight: 789
  },
  {
    title: "AI Job Interview Coach",
    shortDesc: "Practice interviews with AI-powered feedback and improvement tips",
    tech: ["LangChain", "FastAPI", "PostgreSQL", "Next.js"],
    thumbnail: "/thumbnails/21e003a6-f6ce-4f9a-b6ad-d09c452bbfff.avif",
    demoLink: "https://www.linkedin.com/posts/typescriptahsan_ai-interviewer-application-activity-7297702386733010944-LQVT",
    githubLink: "https://github.com/Ahsan462aggk/AI_powered_Interviewer_Applicatiion",
    embedLink: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7256680468236886016",
    embedHeight: 684
  },
];

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="min-h-screen py-20">
          <div className="space-y-16">
            {/* Hero Section */}
            <div className="text-center space-y-6">
              <div className="inline-block">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient">
                  AI & Full-Stack Projects
                </h1>
                <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full mt-2" />
              </div>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
                Explore my innovative projects combining cutting-edge AI technologies with robust full-stack development
              </p>
            </div>

            {/* AI Categories */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-cyan-400/50 transition-all group">
                <FaRobot className="w-8 h-8 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-medium text-slate-300">AI Agents</h3>
                <p className="text-xs text-slate-400 mt-1">Intelligent autonomous systems</p>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-cyan-400/50 transition-all group">
                <FaBrain className="w-8 h-8 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-medium text-slate-300">Generative AI</h3>
                <p className="text-xs text-slate-400 mt-1">Creative AI solutions</p>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-cyan-400/50 transition-all group">
                <FaCode className="w-8 h-8 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-medium text-slate-300">Full Stack</h3>
                <p className="text-xs text-slate-400 mt-1">End-to-end applications</p>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-cyan-400/50 transition-all group">
                <FaMicrochip className="w-8 h-8 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-medium text-slate-300">Innovation</h3>
                <p className="text-xs text-slate-400 mt-1">Cutting-edge solutions</p>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Link 
                  key={project.title}
                  href={`/projects/${encodeURIComponent(project.title.toLowerCase().replace(/\s+/g, '-'))}`}
                  className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1"
                >
                  {/* Project Thumbnail */}
                  <div className="relative aspect-video bg-slate-900/50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-[2px] z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-700">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <h2 className="text-xl font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h2>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(project.githubLink, '_blank', 'noopener,noreferrer');
                        }}
                        className="text-slate-400 hover:text-cyan-400 transition-colors hover:scale-110"
                      >
                        <FaGithub className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <p className="text-slate-300 line-clamp-2 leading-relaxed">
                      {project.shortDesc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-cyan-300 hover:bg-slate-700/70 transition-colors hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors pt-2">
                      <span className="font-medium">View Details</span>
                      <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}