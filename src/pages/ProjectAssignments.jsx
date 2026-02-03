import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, Clock, CheckCircle2, Upload, 
  ChevronRight, ArrowLeft, Send, Link as LinkIcon,
  AlertCircle, Trophy, Terminal, BookOpen
} from 'lucide-react';

const ProjectAssignments = ({ onBack }) => {
  const [activeTask, setActiveTask] = useState(null);
  const [submissionType, setSubmissionType] = useState('link'); // 'link' or 'file'

  const assignments = [
    {
      id: "ASG-01",
      title: "ER Modeling & Normalization",
      subject: "Mastering DBMS",
      due: "Feb 12, 2026",
      status: "Action Required",
      difficulty: "Intermediate",
      points: 100,
      brief: "Design a relational schema for a digital library. Requirements: Support multi-author books, fine-tracking logic, and member history. Must be in 3NF."
    },
    {
      id: "ASG-02",
      title: "Secure Auth Microservice",
      subject: "Java Full Stack Masterclass",
      due: "Feb 08, 2026",
      status: "Submitted",
      difficulty: "Advanced",
      points: 250,
      brief: "Implement a Spring Cloud Security service using OIDC and JWT. Must handle token refresh logic and secure cross-service communication."
    },
    {
      id: "ASG-03",
      title: "UI Component Library",
      subject: "React Modern Patterns",
      due: "Jan 30, 2026",
      status: "Graded",
      difficulty: "Beginner",
      points: 150,
      score: "142/150",
      brief: "Build a reusable Tailwind-based component library including Modals, Loaders, and Advanced Form inputs with validation."
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Graded": return "text-emerald-500 bg-emerald-500/10";
      case "Submitted": return "text-blue-500 bg-blue-500/10";
      default: return "text-amber-500 bg-amber-500/10";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0f18] py-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <button 
              onClick={onBack}
              className="group flex items-center gap-2 text-slate-400 hover:text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 transition-all"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
              Return to Hub
            </button>
            <h1 className="text-4xl font-black tracking-tighter">Project<span className="text-blue-600">Assignments.</span></h1>
          </div>
          
          <div className="flex gap-4">
            <div className="bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total XP</p>
              <div className="flex items-center gap-2">
                <Trophy size={16} className="text-amber-500" />
                <span className="font-black text-xl">1,420</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT: TASK LIST */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2 mb-4">Active Backlog</p>
            {assignments.map((task) => (
              <motion.div
                key={task.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTask(task)}
                className={`p-6 rounded-[32px] cursor-pointer border-2 transition-all ${
                  activeTask?.id === task.id 
                  ? 'bg-white dark:bg-slate-900 border-blue-600 shadow-2xl shadow-blue-500/10' 
                  : 'bg-white/60 dark:bg-slate-900/40 border-transparent hover:border-slate-200'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter ${getStatusColor(task.status)}`}>
                    {task.status}
                  </span>
                  <span className="text-[10px] font-bold text-slate-300">#{task.id}</span>
                </div>
                <h4 className="font-bold text-lg leading-tight mb-2">{task.title}</h4>
                <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400">
                  <span className="flex items-center gap-1"><BookOpen size={12}/> {task.subject}</span>
                  <span className="flex items-center gap-1"><Clock size={12}/> {task.due}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: SUBMISSION WORKSPACE */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {activeTask ? (
                <motion.div
                  key={activeTask.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white dark:bg-slate-900 rounded-[48px] border border-slate-200 dark:border-slate-800 p-8 md:p-12 shadow-2xl"
                >
                  <div className="flex justify-between items-start mb-10">
                    <div>
                      <h2 className="text-3xl font-black tracking-tighter mb-2">{activeTask.title}</h2>
                      <div className="flex gap-3">
                        <span className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg text-[10px] font-black text-slate-500 uppercase">{activeTask.difficulty}</span>
                        <span className="bg-blue-600/10 px-3 py-1 rounded-lg text-[10px] font-black text-blue-600 uppercase">{activeTask.points} Points</span>
                      </div>
                    </div>
                    {activeTask.score && (
                      <div className="text-right">
                        <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Final Grade</p>
                        <p className="text-4xl font-black italic text-emerald-500">{activeTask.score}</p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-10">
                    <div className="bg-slate-50 dark:bg-slate-800/40 p-8 rounded-[40px]">
                      <h5 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-600 mb-4">
                        <FileText size={16}/> Project Brief
                      </h5>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        {activeTask.brief}
                      </p>
                    </div>

                    {activeTask.status !== "Graded" && (
                      <div className="space-y-6">
                        <h5 className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                          <Terminal size={16}/> Submission Portal
                        </h5>
                        
                        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl w-fit">
                          <button 
                            onClick={() => setSubmissionType('link')}
                            className={`px-6 py-2 rounded-xl text-xs font-black uppercase transition-all ${submissionType === 'link' ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-sm' : 'text-slate-400'}`}
                          >
                            Repository Link
                          </button>
                          <button 
                            onClick={() => setSubmissionType('file')}
                            className={`px-6 py-2 rounded-xl text-xs font-black uppercase transition-all ${submissionType === 'file' ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-sm' : 'text-slate-400'}`}
                          >
                            Upload File
                          </button>
                        </div>

                        <div className="relative">
                          {submissionType === 'link' ? (
                            <div className="relative">
                              <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                              <input 
                                type="text" 
                                placeholder="https://github.com/your-repo/project-name"
                                className="w-full bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-800 p-5 pl-12 rounded-[24px] outline-none focus:border-blue-600 transition-all font-medium"
                              />
                            </div>
                          ) : (
                            <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 p-12 rounded-[32px] flex flex-col items-center justify-center gap-4 hover:border-blue-500 transition-all cursor-pointer group">
                              <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all">
                                <Upload size={24} />
                              </div>
                              <p className="text-sm font-bold text-slate-400">Drag & Drop .zip or .pdf files</p>
                            </div>
                          )}
                        </div>

                        <button 
                          onClick={() => alert("Assignment Submitted for Review!")}
                          className="w-full bg-blue-600 text-white font-black py-5 rounded-[24px] shadow-xl shadow-blue-500/30 hover:bg-blue-700 transition-all active:scale-95 flex items-center justify-center gap-2"
                        >
                          Push Submission <Send size={18} />
                        </button>
                      </div>
                    )}

                    {activeTask.status === "Graded" && (
                      <div className="flex items-center gap-4 p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-[32px]">
                        <div className="p-3 bg-emerald-500 text-white rounded-2xl">
                          <CheckCircle2 size={24} />
                        </div>
                        <div>
                          <p className="font-black text-emerald-600 text-lg italic">Verified & Graded</p>
                          <p className="text-xs text-emerald-500/70 font-bold uppercase tracking-widest">Completed on Jan 28, 2026</p>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ) : (
                <div className="h-[600px] flex flex-col items-center justify-center bg-white/40 dark:bg-slate-900/40 rounded-[48px] border-2 border-dashed border-slate-200 dark:border-slate-800">
                  <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-full mb-6">
                    <AlertCircle size={48} className="text-slate-300" />
                  </div>
                  <h3 className="text-xl font-black text-slate-400 italic">Select an assignment to initialize workspace</h3>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectAssignments;