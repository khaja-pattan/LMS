import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutGrid, BookOpen, Settings, ChevronLeft, 
  Menu, Flame, Search, GraduationCap,
  Bell, Sparkles, Trophy, ArrowRight
} from 'lucide-react';

const AdvancedNavbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');

  // Smooth Spring for "Medium" feel
  const transition = { type: "spring", stiffness: 200, damping: 22 };

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutGrid size={24} />, id: 'home' },
    { name: 'My Library', icon: <BookOpen size={24} />, id: 'library' },
    { name: 'Settings', icon: <Settings size={24} />, id: 'settings' },
  ];

  return (
    <div className="flex min-h-screen bg-[#f4f7fa] font-['Plus_Jakarta_Sans',sans-serif] text-slate-900 antialiased">
      
      {/* --- MEDIUM GLASS SIDEBAR --- */}
      <motion.aside
        animate={{ width: isCollapsed ? "100px" : "300px" }}
        transition={transition}
        className="fixed left-0 top-0 h-full bg-white/70 backdrop-blur-2xl border-r border-white/50 flex flex-col z-50 shadow-[4px_0_24px_rgba(0,0,0,0.02)]"
      >
        {/* Header: Logo & Slide Toggle */}
        <div className="h-24 flex items-center px-7 justify-between overflow-hidden">
          <div className="flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 bg-indigo-600 rounded-[18px] flex items-center justify-center text-white shadow-lg shadow-indigo-100">
              <GraduationCap size={26} />
            </div>
            {!isCollapsed && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col">
                <span className="text-xl font-black tracking-tighter leading-none">AURA</span>
                <span className="text-[10px] font-bold text-indigo-500 tracking-[0.3em] uppercase mt-1">Studio</span>
              </motion.div>
            )}
          </div>
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-slate-100 rounded-xl text-slate-400 transition-colors"
          >
            {isCollapsed ? <Menu size={22} /> : <ChevronLeft size={22} />}
          </button>
        </div>

        {/* Navigation - Medium Sized Font */}
        <nav className="flex-1 px-5 space-y-2 mt-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center p-4 rounded-2xl transition-all relative group ${
                activeTab === item.name ? 'text-white' : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              {activeTab === item.name && (
                <motion.div 
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-slate-900 rounded-2xl shadow-xl shadow-slate-200"
                  transition={transition}
                />
              )}
              <div className="relative z-10 shrink-0">{item.icon}</div>
              {!isCollapsed && (
                <motion.span 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="relative z-10 ml-4 font-bold text-[16px] tracking-tight"
                >
                  {item.name}
                </motion.span>
              )}
            </button>
          ))}
        </nav>

        {/* Profile Section */}
        <div className="p-6 border-t border-slate-100/50">
          <div className="bg-white/50 backdrop-blur-md p-3 rounded-[24px] border border-white/60 flex items-center gap-3 shadow-sm">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
              className="w-11 h-11 rounded-2xl bg-indigo-50 border border-white shadow-sm" 
              alt="avatar"
            />
            {!isCollapsed && (
              <div className="overflow-hidden">
                <p className="text-sm font-black text-slate-900 truncate">Felix Chen</p>
                <div className="flex items-center gap-1.5 mt-0.5 text-orange-500 font-bold text-[10px]">
                  <Flame size={12} fill="currentColor" /> 12 STREAK
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.aside>

      {/* --- MAIN CONTENT AREA --- */}
      <motion.main 
        animate={{ paddingLeft: isCollapsed ? "100px" : "300px" }}
        transition={transition}
        className="flex-1 p-10 lg:p-14"
      >
        <div className="max-w-[1300px] mx-auto">
          {/* Header Bar */}
          <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
            <div>
              <motion.h1 
                layout
                className="text-5xl font-[900] text-slate-900 tracking-tight"
              >
                {activeTab}
              </motion.h1>
              <p className="text-slate-400 font-semibold mt-2">Ready to level up your Java skills?</p>
            </div>

            <div className="flex items-center gap-4 w-full lg:w-auto">
              {/* Modern Search */}
              <div className="relative flex-1 lg:w-[400px] group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="Find a course..." 
                  className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-6 text-sm font-bold shadow-sm focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-600 outline-none transition-all"
                />
              </div>
              <button className="p-4 bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-indigo-600 relative transition-all">
                <Bell size={24} />
                <span className="absolute top-4 right-4 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
            </div>
          </header>

          {/* Bento Grid Design */}
          <div className="grid grid-cols-12 gap-8">
            {/* Featured Course */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="col-span-12 lg:col-span-8 bg-white p-10 rounded-[40px] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] relative overflow-hidden"
            >
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <span className="bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full font-bold text-[11px] tracking-widest uppercase">Ongoing Path</span>
                  <h2 className="text-3xl font-black text-slate-900 mt-6 leading-tight">Java Full Stack <br/> Architecture 2026</h2>
                  <p className="text-slate-400 font-medium mt-4 max-w-sm leading-relaxed">Master enterprise-grade applications with Spring Boot and React.</p>
                </div>
                <button className="mt-8 flex items-center gap-2 w-fit px-8 py-4 bg-slate-900 text-white rounded-[20px] font-bold text-sm shadow-xl hover:bg-indigo-600 transition-all">
                  Resume Lesson <ArrowRight size={18} />
                </button>
              </div>
              {/* Background Accent */}
              <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-indigo-50 rounded-full blur-[80px] opacity-70"></div>
            </motion.div>

            {/* Progress Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="col-span-12 lg:col-span-4 bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                  <Trophy size={28} />
                </div>
                <p className="text-slate-400 font-bold uppercase text-[11px] tracking-widest leading-none">Overall Progress</p>
                <p className="text-4xl font-black text-slate-900 mt-3 tracking-tight">84.2%</p>
              </div>
              
              <div className="mt-8">
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }} animate={{ width: "84%" }} transition={{ duration: 1.5, delay: 0.5 }}
                    className="bg-indigo-600 h-full rounded-full shadow-[0_0_12px_rgba(79,70,229,0.3)]"
                  />
                </div>
                <div className="flex justify-between mt-3">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">12 Lessons Done</span>
                  <span className="text-[10px] font-bold text-indigo-600 uppercase">3 Remaining</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default AdvancedNavbar;