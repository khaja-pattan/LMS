import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Code2, BookOpen, BadgeCheck, Sparkles, Film, ArrowRight } from 'lucide-react';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const allContent = [
    { id: 1, type: "Project", title: "Hotel Booking System", tech: "Spring Boot, MySQL, React", status: "In Progress", icon: <Code2 /> },
    { id: 2, type: "Project", title: "AI Resume Analysis", tech: "Java, Mock Interview API", status: "Completed", icon: <Code2 /> },
    { id: 3, type: "Project", title: "Ticket Reservation System", tech: "Core Java, JDBC", status: "Completed", icon: <Code2 /> },
    { id: 4, type: "Course", title: "Java Full Stack Masterclass", tech: "Spring & Hibernate", status: "60% Done", icon: <BookOpen /> },
    { id: 5, type: "Course", title: "Data Structures & Algorithms", tech: "Logic Building", status: "90% Done", icon: <BookOpen /> },
    { id: 6, type: "Course", title: "Cinematography Basics", tech: "Cinema Arts", status: "20% Done", icon: <Film /> },
    { id: 7, type: "Certificate", title: "Oracle Java SE Programmer", tech: "Java Certification", status: "Earned", icon: <BadgeCheck /> },
    { id: 8, type: "Certificate", title: "Spring Boot Specialist", tech: "Backend Mastery", status: "Verifying", icon: <BadgeCheck /> },
  ];

  const filteredItems = allContent.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.tech.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "All" || item.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const filterOptions = ["All", "Project", "Course", "Certificate"];

  return (
    <div className="max-w-6xl mx-auto py-6">
      {/* 1. SEARCH SECTION */}
      <div className="flex flex-col items-center mb-12 text-center">
        <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
          <Sparkles size={14} /> My Learning Journey
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">
          Find your <span className="text-blue-600">Growth.</span>
        </h1>

        <div className="relative w-full max-w-2xl group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur opacity-25 group-focus-within:opacity-60 transition duration-500"></div>
          <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 group-focus-within:text-blue-600 transition-colors" size={24} />
            <input 
              type="text" 
              placeholder="Search your Java projects, courses, or certificates..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white dark:bg-slate-900 border-0 rounded-2xl py-6 pl-16 pr-8 text-lg shadow-2xl dark:border dark:border-slate-800 text-slate-900 dark:text-white outline-none ring-0 focus:ring-2 focus:ring-blue-500/50 transition-all"
            />
          </div>
        </div>
      </div>

      {/* 2. FILTER TABS */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filterOptions.map((option) => (
          <button
            key={option}
            onClick={() => setActiveFilter(option)}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all relative ${
              activeFilter === option 
              ? 'text-white' 
              : 'text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400'
            }`}
          >
            {activeFilter === option && (
              <motion.div 
                layoutId="activeTab"
                className="absolute inset-0 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/30"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{option}s</span>
          </button>
        ))}
      </div>

      {/* 3. GRID SECTION */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-slate-900 rounded-[32px] border border-slate-100 dark:border-slate-800 p-8 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all cursor-pointer group"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  {item.type}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                {item.tech}
              </p>
              
              <div className="pt-6 border-t border-slate-50 dark:border-slate-800 flex justify-between items-center">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-lg">
                  {item.status}
                </span>
                <div className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Dashboard;