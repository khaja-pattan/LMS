import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, ArrowLeft, ArrowRight, PlayCircle, Clock, Users, Zap, 
  Target, ChevronRight, CreditCard, ShieldCheck, 
  CheckCircle2, Star, Filter, Rocket, Smartphone, 
  QrCode, Award, BookOpen, BarChart3, Sparkles, Calendar, History, ListChecks
} from 'lucide-react';

// --- DATASET ---
const INITIAL_CONTENT = [
  { 
    id: 1, type: "Project", title: "Hotel Booking System", tech: "Spring Boot, MySQL", status: "In Progress", progress: 45, 
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800", 
    duration: "4 Weeks", daysToComplete: "30 Days", validity: "Lifetime Access", price: 0, 
    description: "Architect a high-concurrency reservation system. Covers real-time availability logic and AWS cloud deployment.",
    weeklySyllabus: [
      { week: "Week 1", topic: "System Design & ERD", modules: ["Requirement Analysis", "DB Schema Design", "Entity Mapping"] },
      { week: "Week 2", topic: "Backend Core", modules: ["Spring Boot Init", "Repository Layer", "Service Logic"] }
    ],
    mentor: "Dr. Sarah Jenkins"
  },
  { 
    id: 4, type: "Course", title: "Java Full Stack Masterclass", tech: "Spring & Hibernate", status: "Active", progress: 60, 
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800", 
    duration: "42 Hours", daysToComplete: "90 Days", validity: "2 Years", price: 4999, 
    description: "Master everything from Java Core and Spring Boot Microservices to building modern reactive UIs with React.",
    weeklySyllabus: [
      { week: "Week 1", topic: "Java Deep Dive", modules: ["Advanced Collections", "Stream API", "Multithreading"] },
      { week: "Week 2", topic: "Spring Framework", modules: ["Dependency Injection", "AOP Fundamentals", "Spring MVC"] }
    ],
    mentor: "Alex Rivera"
  },
  { 
    id: 5, type: "Course", title: "Mastering DBMS", tech: "SQL & NoSQL", status: "New", progress: 0, 
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=800", 
    duration: "18 Hours", daysToComplete: "45 Days", validity: "Lifetime Access", price: 2499, 
    description: "Learn how to structure relational data, optimize complex queries, and implement distributed NoSQL clusters.",
    weeklySyllabus: [
      { week: "Week 1", topic: "Relational Foundations", modules: ["Normalization", "Relational Algebra", "SQL Mastery"] },
      { week: "Week 2", topic: "Advanced Queries", modules: ["Indexing Strategies", "Joins Optimization", "Transaction ACID"] }
    ],
    mentor: "Rajesh Kumar"
  }
];

// --- UPDATED PAYMENT COMPONENT (Strictly UPI & Cards only) ---
const RazorpayGateway = ({ course, onComplete, onCancel }) => {
  const [method, setMethod] = useState('upi');

  const handlePay = () => {
    setTimeout(() => {
      alert("✅ Payment Done Successfully!");
      onComplete(course.id);
    }, 800);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
      <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} className="bg-[#f2f5f9] w-full max-w-4xl rounded-[12px] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[520px]">
        {/* Left Side Summary */}
        <div className="md:w-1/3 bg-[#1e66f5] p-8 text-white flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-white/20 p-2 rounded-lg font-black italic">G</div>
              <h3 className="font-bold text-lg leading-tight">GeeksForGeeks <span className="block text-[10px] opacity-60 uppercase tracking-widest text-blue-100">Razorpay Trusted Business</span></h3>
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-white/20 mb-6 text-center">
              <p className="text-[10px] font-medium opacity-80 mb-1 uppercase tracking-widest text-blue-100">Price Summary</p>
              <h2 className="text-4xl font-black">₹{course.price}</h2>
            </div>
            <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10 cursor-pointer">
                  <div className="flex items-center gap-2"><Smartphone size={14}/> Using as +91 93818 24499</div>
                  <ChevronRight size={14}/>
                </div>
            </div>
          </div>
          <div className="text-[10px] opacity-60 flex items-center gap-2 font-bold uppercase tracking-widest"><ShieldCheck size={14}/> Secured by Razorpay</div>
        </div>

        {/* Right Side Options */}
        <div className="md:w-2/3 bg-white p-8 relative">
          <button onClick={onCancel} className="absolute top-4 right-4 text-slate-400 hover:text-red-500 font-bold p-2 z-10">✕</button>
          <h2 className="text-xl font-bold text-slate-700 mb-8">Payment Options</h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3 space-y-1">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 italic">Recommended</p>
              <button onClick={() => setMethod('upi')} className={`w-full text-left p-4 rounded-xl text-sm font-bold transition-all flex justify-between items-center ${method === 'upi' ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-slate-500'}`}>
                <div className="flex items-center gap-2"><QrCode size={18}/> UPI</div>
                <span className="text-[9px] text-emerald-500 font-black">2 OFFERS</span>
              </button>
              <button onClick={() => setMethod('card')} className={`w-full text-left p-4 rounded-xl text-sm font-bold transition-all flex justify-between items-center ${method === 'card' ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-slate-500'}`}>
                <div className="flex items-center gap-2"><CreditCard size={18}/> Cards</div>
                <span className="text-[9px] text-emerald-500 font-black">SAVE 1.5%</span>
              </button>
            </div>

            <div className="w-full md:w-2/3">
              {method === 'upi' ? (
                <div className="space-y-6 w-full text-center">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-dashed border-slate-200 inline-block mb-4">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=PAY" className="w-32 h-32" alt="QR" />
                  </div>
                  <button onClick={handlePay} className="w-full bg-[#1e66f5] text-white py-4 rounded-xl font-black text-sm uppercase shadow-xl hover:bg-blue-700">Pay Securely ₹{course.price}</button>
                </div>
              ) : (
                /* Card Payment Detail View */
                <div className="w-full space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase">Cardholder's Name</label>
                      <input type="text" defaultValue="PAULINA CHIMAROKE" className="w-full bg-[#f8faff] p-3 rounded-xl text-sm border border-slate-100 outline-none font-medium text-blue-900" />
                    </div>
                    <div className="space-y-1 relative">
                      <label className="text-[10px] font-bold text-slate-400 uppercase">Card Number</label>
                      <div className="relative">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" className="absolute left-3 top-1/2 -translate-y-1/2 h-4" alt="MC" />
                        <input type="text" defaultValue="9870 3456 7890 6473" className="w-full bg-[#f8faff] p-3 pl-12 rounded-xl text-sm border border-slate-100 outline-none font-medium text-blue-900" />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-1/2 space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase">Expiry</label>
                        <input type="text" defaultValue="03 / 25" className="w-full bg-[#f8faff] p-3 rounded-xl text-sm border border-slate-100 font-medium text-blue-900" />
                      </div>
                      <div className="w-1/2 space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase">CVC</label>
                        <input type="text" defaultValue="654" className="w-full bg-[#f8faff] p-3 rounded-xl text-sm border border-slate-100 font-medium text-blue-900" />
                      </div>
                    </div>
                    <button onClick={handlePay} className="w-full bg-[#6366f1] text-white py-4 rounded-xl font-bold text-sm shadow-xl shadow-indigo-500/20 hover:bg-indigo-700">Pay Now</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- MAIN DASHBOARD (Kept original design as requested) ---
const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [enrolled, setEnrolled] = useState(new Set()); 
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const springConfig = { type: "spring", stiffness: 400, damping: 30 };

  const isSearching = searchTerm.trim().length > 0;
  const filteredItems = INITIAL_CONTENT.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.tech.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "All" || item.type === activeFilter;
    if (!isSearching && item.type === "Course") return false;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0f18] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <AnimatePresence>
        {showPayment && <RazorpayGateway course={selectedCourse} onCancel={() => setShowPayment(false)} onComplete={(id) => { setEnrolled(prev => new Set([...prev, id])); setShowPayment(false); }} />}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto py-12 px-6">
        <AnimatePresence mode="wait">
          {selectedCourse && !showPayment ? (
            /* --- COURSE FEATURES VIEW --- */
            <motion.div key="features" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <button onClick={() => setSelectedCourse(null)} className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold mb-10 transition-colors group uppercase text-[10px] tracking-[0.3em]">
                <ArrowLeft size={16} /> Back to Dashboard
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                  <div className="aspect-video bg-slate-900 rounded-[32px] overflow-hidden relative shadow-2xl">
                    <img src={selectedCourse.image} className="w-full h-full object-cover opacity-40" alt="" />
                    <PlayCircle size={80} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/80" />
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                     <div className="bg-blue-600/10 text-blue-600 px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-bold">
                        <Calendar size={14}/> {selectedCourse.daysToComplete}
                     </div>
                     <div className="bg-emerald-600/10 text-emerald-600 px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-bold">
                        <History size={14}/> {selectedCourse.validity}
                     </div>
                  </div>

                  <h2 className="text-5xl font-black tracking-tighter">{selectedCourse.title}</h2>
                  
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold flex items-center gap-3 border-l-4 border-blue-600 pl-4">Course Curriculum</h3>
                    <div className="grid gap-4">
                      {selectedCourse.weeklySyllabus.map((weekData, i) => (
                        <div key={i} className="bg-white dark:bg-slate-900 rounded-[24px] border border-slate-100 dark:border-slate-800 p-6 shadow-sm">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-blue-600 font-black text-sm uppercase tracking-widest">{weekData.week}</span>
                            <span className="text-slate-900 dark:text-white font-bold">{weekData.topic}</span>
                          </div>
                          <div className="space-y-2">
                            {weekData.modules.map((module, j) => (
                              <div key={j} className="flex items-center gap-3 text-sm text-slate-500 font-medium bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl">
                                <ListChecks size={14} className="text-blue-400"/> {module}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 p-10 rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-xl h-fit sticky top-10">
                  <div className="text-5xl font-black mb-8 italic">₹{selectedCourse.price}</div>
                  {enrolled.has(selectedCourse.id) || selectedCourse.price === 0 ? (
                    <button className="w-full bg-emerald-600 text-white font-black py-5 rounded-2xl shadow-lg flex items-center justify-center gap-2">
                       Start Course <ArrowRight size={20}/>
                    </button>
                  ) : (
                    <button onClick={() => setShowPayment(true)} className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl shadow-lg flex items-center justify-center gap-2">
                       Enroll Now <Rocket size={20}/>
                    </button>
                  )}
                  <p className="text-center text-[10px] text-slate-400 mt-6 font-bold uppercase tracking-widest">Mentor: {selectedCourse.mentor}</p>
                </div>
              </div>
            </motion.div>
          ) : (
            /* --- ORIGINAL DASHBOARD VIEW --- */
            <motion.div key="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <header className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                <div className="text-center md:text-left">
                  <h1 className="text-4xl font-black tracking-tight mb-2">LMS<span className="text-blue-600">PRO</span></h1>
                  <p className="text-slate-500 font-medium uppercase text-xs tracking-[0.2em]">Intellectual Asset Management</p>
                </div>
                <div className="relative w-full max-w-xl">
                  <input type="text" placeholder="Search Python, Java, DBMS..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 shadow-sm focus:ring-4 focus:ring-blue-500/10 transition-all outline-none" />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                </div>
              </header>

              <nav className="flex items-center gap-1 mb-10 bg-white dark:bg-slate-900 p-1.5 rounded-2xl w-fit border border-slate-200 dark:border-slate-800 shadow-sm mx-auto md:mx-0">
                {["All", "Project", "Course"].map((option) => (
                  <button key={option} onClick={() => setActiveFilter(option)} className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all relative z-10 ${activeFilter === option ? 'text-white' : 'text-slate-500 hover:text-blue-600'}`}>
                    {activeFilter === option && <motion.div layoutId="navTab" className="absolute inset-0 bg-blue-600 rounded-xl shadow-md -z-10" transition={springConfig} />}
                    {option}s
                  </button>
                ))}
              </nav>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                <AnimatePresence mode="popLayout">
                  {filteredItems.map((item) => (
                    <motion.div layout key={item.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} whileHover={{ y: -10 }} onClick={() => setSelectedCourse(item)} className="group bg-white dark:bg-slate-900 rounded-[32px] border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all border-b-4 border-b-transparent hover:border-b-blue-600 cursor-pointer">
                      <div className="h-48 overflow-hidden relative">
                        <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-blue-600">₹{item.price > 0 ? item.price : 'Free'}</div>
                        <span className={`absolute bottom-4 left-4 text-[10px] font-black text-white px-3 py-1 rounded-lg uppercase tracking-widest ${item.type === 'Project' ? 'bg-orange-500' : 'bg-blue-600'}`}>{item.type}</span>
                      </div>
                      <div className="p-8">
                        <h4 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors leading-tight">{item.title}</h4>
                        <div className="pt-4 border-t border-slate-50 flex justify-between items-center text-[10px] font-black uppercase text-slate-400">
                           <span className="flex items-center gap-1 font-bold tracking-widest"><Clock size={12}/> {item.duration}</span>
                           <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all"><ArrowRight size={16}/></div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Dashboard;