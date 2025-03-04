"use client"

import Image from 'next/image';
import { FaGithub, FaArrowRight, FaRobot, FaBrain, FaCode, FaMicrochip, FaArrowLeft } from 'react-icons/fa';
import { projects } from '../data/projects';
import { useState } from 'react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  if (selectedProject) {
    return (
      <div className="min-h-screen bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Back Button */}
          <button
            onClick={() => setSelectedProject(null)}
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
          >
            <FaArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </button>

          {/* Project Header */}
          <div className="space-y-8">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-[2px] z-10" />
              <Image
                src={selectedProject.thumbnail}
                alt={selectedProject.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-cyan-400">{selectedProject.title}</h1>
              <p className="text-slate-300 text-lg leading-relaxed">{selectedProject.shortDesc}</p>

              {/* Action Button */}
              <div className="flex gap-4">
                <button
                  onClick={() => window.open(selectedProject.githubLink, '_blank', 'noopener,noreferrer')}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>View Code</span>
                </button>
              </div>

              {/* Technology Stack */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-cyan-400">Technology Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-slate-800 rounded-lg text-cyan-300 hover:bg-slate-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* LinkedIn Embed */}
              {selectedProject.embedLink && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-cyan-400">Project Demo</h2>
                  <div className="relative w-full rounded-lg overflow-hidden bg-slate-800">
                    <iframe
                      src={selectedProject.embedLink}
                      height={selectedProject.embedHeight || 600}
                      className="w-full"
                      allowFullScreen
                      title={`${selectedProject.title} Demo`}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
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
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedProject(project)}
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}