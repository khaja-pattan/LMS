import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Code2, BookOpen, BadgeCheck, Sparkles, Film, ArrowRight, Layers } from 'lucide-react';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const springConfig = { type: "spring", stiffness: 400, damping: 30 };

  const allContent = [
    { 
      id: 1, type: "Project", title: "Hotel Booking System", tech: "Spring Boot, MySQL", status: "In Progress", 
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: 2, type: "Project", title: "AI Resume Analysis", tech: "Java, Mock Interview API", status: "Completed", 
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: 4, type: "Course", title: "Java Full Stack Masterclass", tech: "Spring & Hibernate", status: "60% Done", 
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: 6, type: "Course", title: "Cinematography Basics", tech: "Cinema Arts", status: "20% Done", 
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: 7, type: "Certificate", title: "Oracle Java SE Programmer", tech: "Java Certification", status: "Earned", 
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
    }
  ];

  const filteredItems = allContent.filter(item => 
    (activeFilter === "All" || item.type === activeFilter) &&
    (item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.tech.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      {/* HEADER SECTION */}
      <motion.div layout className="flex flex-col items-center mb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-10 tracking-tighter">
          My <span className="text-blue-600">Universe.</span>
        </h1>

        <div className="relative w-full max-w-2xl group">
          <input 
            type="text" 
            placeholder="Search projects or courses..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-200/20 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-[24px] py-6 pl-14 pr-8 text-xl outline-none focus:ring-2 focus:ring-blue-600/40 transition-all dark:text-white"
          />
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
        </div>
      </motion.div>

      {/* FILTER TABS */}
      <div className="flex justify-center gap-3 mb-16">
        {["All", "Project", "Course", "Certificate"].map((option) => (
          <button
            key={option}
            onClick={() => setActiveFilter(option)}
            className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all relative ${activeFilter === option ? 'text-white' : 'text-slate-500'}`}
          >
            {activeFilter === option && (
              <motion.div layoutId="dashTab" className="absolute inset-0 bg-blue-600 rounded-2xl shadow-lg shadow-blue-500/40" transition={springConfig} />
            )}
            <span className="relative z-10">{option}s</span>
          </button>
        ))}
      </div>

      {/* GRID SECTION */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -10 }}
              className="group bg-slate-200/10 dark:bg-slate-900/40 backdrop-blur-xl rounded-[32px] border border-slate-200/50 dark:border-slate-800/50 overflow-hidden shadow-sm cursor-pointer"
            >
              {/* IMAGE HEADER */}
              <div className="h-48 w-full overflow-hidden relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <span className="absolute bottom-4 left-4 text-[10px] font-black text-white bg-blue-600 px-3 py-1 rounded-lg uppercase tracking-widest">
                  {item.type}
                </span>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 mb-6">{item.tech}</p>
                
                <div className="pt-6 border-t border-slate-200/20 dark:border-slate-800/20 flex justify-between items-center">
                  <span className="text-xs font-bold text-blue-600">{item.status}</span>
                  <ArrowRight size={20} className="text-blue-600 opacity-0 group-hover:opacity-100 transition-all" />
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