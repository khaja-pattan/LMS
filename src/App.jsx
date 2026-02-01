import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './components/ThemeContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AuthModal from './components/AuthModal'; // New File
import ProjectDetail from './pages/ProjectDetail';
// Pages
import Dashboard from "./pages/Dashboard";
import OverallReport from "./pages/OverallReport";
import ProjectAssignments from "./pages/ProjectAssignments";
import PageTemplate from "./pages/PageTemplate";

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <ThemeProvider>
      <Router>
        <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            {/* Pass onLogout to the Header */}
            <Header onLogout={() => setIsAuthOpen(true)} />
            <main className="p-8">
              <Routes>
                <Route path="/" element={<Dashboard />} />
  <Route path="/projects" element={<ProjectAssignments />} />
  <Route path="/project/:id" element={<ProjectDetail />} />
               
                <Route path="/report" element={<OverallReport />} />
                
                <Route path="/assessments" element={<PageTemplate title="Assessments" />} />
                <Route path="/calendar" element={<PageTemplate title="Calendar" />} />
                <Route path="/courses" element={<PageTemplate title="Courses" />} />
                <Route path="/project/:id" element={<ProjectDetail />} />
                <Route path="/certificates" element={<PageTemplate title="Certificates" />} />
              </Routes>
            </main>
          </div>
        </div>

        {/* The Popup Modal */}
        <AnimatePresence>
          {isAuthOpen && <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />}
        </AnimatePresence>
      </Router>
    </ThemeProvider>
  );
}

export default App;