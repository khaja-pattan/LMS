import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Menu, LayoutDashboard, FileBarChart, Award, 
  Calendar, BookOpen, FileCheck, BadgeCheck 
} from 'lucide-react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menu = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={30} /> },
    { name: 'Overall Report', path: '/report', icon: <FileBarChart size={30} /> },
    { name: 'Assessments', path: '/assessments', icon: <Award size={30} /> },
    { name: 'Calendar', path: '/calendar', icon: <Calendar size={30} /> },
    { name: 'Courses', path: '/courses', icon: <BookOpen size={30} /> },
    { name: 'Projects Assessment', path: '/projects', icon: <FileCheck size={30} /> },
    { name: 'Certificates', path: '/certificates', icon: <BadgeCheck size={30} /> },
  ];

  return (
    <aside className={`transition-all duration-300 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-screen sticky top-0 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <div className="p-4 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
        {!isCollapsed && <span className="font-bold text-blue-600 dark:text-blue-400 ml-2 text-xl">Skill UP</span>}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 transition-colors mx-auto"
        >
          <Menu size={34} />
        </button>
      </div>

      <nav className="p-3 space-y-1">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `flex items-center gap-4 px-3 py-3 rounded-xl transition-all ${
                isActive 
                ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold shadow-sm' 
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
              } ${isCollapsed ? 'justify-center' : ''}`
            }
          >
            {item.icon}
            {!isCollapsed && <span className="whitespace-nowrap">{item.name}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;