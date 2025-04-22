import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  // State management
  const [cursorHovering, setCursorHovering] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header 
      className="fixed top-0 w-full py-6 px-8 z-40 transition-all duration-500"
      style={{
        backgroundColor: scrollY > 20 
          ? isDarkMode ?   'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)'
          : 'transparent',
        backdropFilter: scrollY > 20 ? 'blur(10px)' : 'none',
        boxShadow: scrollY > 20 ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-3xl font-bold"
          onMouseEnter={() => setCursorHovering(true)}
          onMouseLeave={() => setCursorHovering(false)}
        >
          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            JL
          </span>
        </Link>
        
        <nav className="hidden md:flex space-x-12">
          {[
            { name: 'Home', path: '/' },
            { name: 'Projects', path: '/projects' },
            { name: 'Contact', path: '/contact' }
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="font-medium relative text-gray-800 dark:text-gray-200 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
              onMouseEnter={() => setCursorHovering(true)}
              onMouseLeave={() => setCursorHovering(false)}
            >
              {item.name}
              <motion.span
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 origin-left"
              />
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center space-x-6">
          <button
            onClick={toggleDarkMode}
            className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            onMouseEnter={() => setCursorHovering(true)}
            onMouseLeave={() => setCursorHovering(false)}
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          
          <Link
            to="/contact"
            className="hidden md:flex items-center px-4 py-2 border-2 border-indigo-600 dark:border-indigo-400 rounded-full text-indigo-600 dark:text-indigo-400 font-medium transition-colors hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900"
            onMouseEnter={() => setCursorHovering(true)}
            onMouseLeave={() => setCursorHovering(false)}
          >
            <span>Say Hello</span>
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          
          <button
            className="md:hidden text-gray-800 dark:text-gray-200"
            onMouseEnter={() => setCursorHovering(true)}
            onMouseLeave={() => setCursorHovering(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;