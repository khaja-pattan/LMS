import { useState } from 'react';
import { Sun, Moon, Bell } from 'lucide-react';
import { useTheme } from './ThemeContext';
import ProfileDropdown from './ProfileDropdown';

const Header = ({ onLogout }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b sticky top-0 z-40 flex items-center justify-end px-8">
      <div className="flex items-center gap-6">
        <button onClick={toggleTheme} className="p-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
          {isDarkMode ? <Sun size={26} className="text-yellow-400" /> : <Moon size={26} />}
        </button>
        
        <button className="relative p-3 text-slate-500 dark:text-slate-400">
          <Bell size={26} />
          <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
        </button>

        <div className="relative">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-black shadow-lg hover:scale-105 transition-all text-lg"
          >
            PK
          </button>
          {isOpen && <ProfileDropdown onLogout={onLogout} />}
        </div>
      </div>
    </header>
  );
};

export default Header;