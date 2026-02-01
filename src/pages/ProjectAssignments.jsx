import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';

const ProjectAssignments = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const projectList = [
    { id: 1, title: "Hotel Booking System", status: "In Progress", type: "Full Stack", tech: "Spring Boot, MySQL", date: "Feb 10, 2026" },
    { id: 2, title: "E-Commerce Auth Module", status: "Review", type: "Microservices", tech: "Java, JWT", date: "Feb 05, 2026" },
    { id: 3, title: "Railway Reservation System", status: "Completed", type: "Core Java", tech: "JDBC, Swing", date: "Jan 20, 2026" },
    { id: 4, title: "Online Quiz Platform", status: "Pending", type: "Web App", tech: "React, Node.js", date: "Mar 01, 2026" },
    { id: 5, title: "AI Resume Analyzer", status: "Completed", tech: "Java, OpenAI API", date: "Dec 15, 2025" },
  ];

  const filteredProjects = projectList.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.tech.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      {/* HERO SECTION */}
      <div className="flex flex-col items-center mb-20 text-center">
        <div className="bg-blue-600/10 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
          <Sparkles size={14} /> Development Hub
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">
          Project <span className="text-blue-600">Assignments.</span>
        </h1>

        <div className="relative w-full max-w-2xl group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-3xl blur opacity-20 group-focus-within:opacity-40 transition duration-500"></div>
          <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
            <input 
              type="text" 
              placeholder="Quick search by title or tech..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-6 pl-16 pr-8 text-lg outline-none focus:ring-2 focus:ring-blue-500/50 transition-all dark:text-white"
            />
          </div>
        </div>
      </div>

      {/* PROJECT GRID */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ProjectAssignments;