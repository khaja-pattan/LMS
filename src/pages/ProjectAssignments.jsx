import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, Layers } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';

const ProjectAssignments = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const projectList = [
    // JAVA PROJECTS
    { id: 1, title: "Hotel Booking System", status: "Active", tech: "Java, Spring Boot, React", date: "Feb 2026", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600" },
    { id: 2, title: "Auth Microservice", status: "Review", tech: "Java, JWT, Security", date: "Jan 2026", image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600" },
    { id: 3, title: "Railway System", status: "Done", tech: "Java, JDBC, MySQL", date: "Jan 2026", image: "https://images.unsplash.com/photo-1474487097639-12ba29a74733?q=80&w=600" },
    { id: 4, title: "E-Commerce Backend", status: "Active", tech: "Java, Spring, Hibernate", date: "Feb 2026", image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=600" },
    
    // C++ / DSA PROJECTS
    { id: 5, title: "DSA Algorithms Hub", status: "Active", tech: "C++, Data Structures", date: "Feb 2026", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=600" },
    { id: 6, title: "Graphics Engine", status: "Idea", tech: "C++, OpenGL", date: "Mar 2026", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600" },
    
    // CINEMA / REACT
    { id: 7, title: "Cinema Portfolio", status: "Idea", tech: "Next.js, Cinema Arts", date: "Mar 2026", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600" },
    { id: 8, title: "Video Editing Tool", status: "Idea", tech: "React, Video.js", date: "Apr 2026", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=600" },
    
    // AI / MODERN TECH
    { id: 9, title: "AI Resume Bot", status: "Done", tech: "Java, OpenAI API", date: "Dec 2025", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600" },
    { id: 10, title: "Smart Home IoT", status: "Review", tech: "Java, MQTT, Sensors", date: "Feb 2026", image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600" },
    
    // ADDITIONAL 5
    { id: 11, title: "Cloud Messaging", status: "Active", tech: "Java, AWS, Microservices", date: "Feb 2026", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600" },
    { id: 12, title: "Library Manager", status: "Done", tech: "Java, Swing UI", date: "Nov 2025", image: "https://images.unsplash.com/photo-1507738911718-d05057b54a7c?q=80&w=600" },
    { id: 13, title: "Crypto Tracker", status: "Idea", tech: "Next.js, Tailwind", date: "May 2026", image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=600" },
    { id: 14, title: "Hospital Management", status: "Review", tech: "Java, SQL Database", date: "Jan 2026", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600" },
    { id: 15, title: "Inventory System", status: "Done", tech: "Java, Hibernate", date: "Dec 2025", image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=600" },
  ];

  const filtered = projectList.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.tech.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      {/* --- HEADER --- */}
      <motion.div layout className="flex flex-col items-center mb-20 text-center">
        <div className="bg-blue-600/10 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-blue-600/20">
          <Sparkles size={12} className="inline mr-2" /> My Portfolio 2026
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-10 tracking-tighter">
          Search <span className="text-blue-600">Work.</span>
        </h1>

        <div className="relative w-full max-w-2xl group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[28px] blur opacity-10 group-focus-within:opacity-30 transition duration-700"></div>
          <div className="relative flex items-center">
            <Search className="absolute left-6 text-slate-400 dark:text-slate-600 group-focus-within:text-blue-600 transition-colors" size={22} />
            <input 
              type="text" 
              placeholder="Search by tech (Java, C++, React...)" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-200/20 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-[24px] py-6 pl-16 pr-8 text-xl outline-none focus:ring-2 focus:ring-blue-600/40 transition-all dark:text-white placeholder:text-slate-500"
            />
          </div>
        </div>
      </motion.div>

      {/* --- GRID --- */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 text-slate-500">
           <Layers className="mx-auto mb-4 opacity-20" size={64} />
           <p className="text-xl font-bold">Nothing found in this stack.</p>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectAssignments;