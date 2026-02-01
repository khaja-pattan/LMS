import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';

const ProjectAssignments = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const projectList = [
    { id: 1, title: "Hotel Booking System", status: "Active", tech: "Spring Boot + React", date: "Feb 2026" },
    { id: 2, title: "Auth Microservice", status: "Review", tech: "Java + JWT", date: "Jan 2026" },
    { id: 3, title: "Railway System", status: "Done", tech: "JDBC + Swing", date: "Jan 2026" },
    { id: 4, title: "Cinema Portfolio", status: "Idea", tech: "Next.js + Tailwind", date: "Mar 2026" },
    { id: 5, title: "AI Resume Bot", status: "Done", tech: "Java + OpenAI", date: "Dec 2025" },
  ];

  const filtered = projectList.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.tech.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      {/* HEADER SECTION */}
      <motion.div 
        layout
        className="flex flex-col items-center mb-20 text-center"
      >
        <div className="bg-blue-600/10 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-blue-600/20">
          <Sparkles size={12} className="inline mr-2" /> 2026 Projects
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-10 tracking-tighter">
          My <span className="text-blue-600">Work.</span>
        </h1>

        <div className="relative w-full max-w-2xl group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[28px] blur opacity-10 group-focus-within:opacity-30 transition duration-700"></div>
          <div className="relative flex items-center">
            <Search className="absolute left-6 text-slate-400 dark:text-slate-600 group-focus-within:text-blue-600 transition-colors" size={22} />
            <input 
              type="text" 
              placeholder="Search by project or technology..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-200/20 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-[24px] py-6 pl-16 pr-8 text-xl outline-none focus:ring-2 focus:ring-blue-600/40 transition-all dark:text-white placeholder:text-slate-500"
            />
          </div>
        </div>
      </motion.div>

      {/* THE GRID: mode="popLayout" makes filtering buttery smooth */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ProjectAssignments;