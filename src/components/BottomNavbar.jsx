import { useState } from 'react';

function BottomNavbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    { 
      name: 'Articles & Blogs', 
      submenu: ['Blog Writing', 'Article Creation', 'Content Strategy']
    },
    { 
      name: 'Books', 
      submenu: ['Ebook Writing', 'Manuscript Editing', 'Publishing Support']
    },
    { 
      name: 'Business Writing', 
      submenu: ['Proposals', 'Reports', 'Business Plans']
    },
    { 
      name: 'Editing Service', 
      submenu: ['Proofreading', 'Copy Editing', 'Substantive Editing']
    },
    { 
      name: 'Personal Writing', 
      submenu: ['Resumes', 'Cover Letters', 'Personal Statements']
    },
    { 
      name: 'Digital Solution', 
      submenu: ['Web Development', 'App Development', 'Digital Transformation']
    },
    { 
      name: 'Design', 
      submenu: ['UI/UX Design', 'Graphic Design', 'Brand Identity']
    },
    { 
      name: 'Marketing', 
      submenu: ['Digital Marketing', 'Content Marketing', 'Email Marketing']
    },
    { 
      name: 'Social Media', 
      submenu: ['Social Media Management', 'Content Creation', 'Analytics']
    },
    { 
      name: 'SEO', 
      submenu: ['On-Page SEO', 'Technical SEO', 'SEO Audits']
    },
    { 
      name: 'Industries', 
      submenu: ['Healthcare', 'Technology', 'Finance', 'Education']
    },
  ];

  return (
    <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-center">
        <ul className="flex items-center gap-1 py-3 px-6">
          {menuItems.map((item, index) => (
            <li 
              key={index}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-white/90 hover:text-white font-medium rounded-lg transition-all duration-200 group-hover:bg-white/10">
                {item.name}
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {activeDropdown === item.name && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 animate-in fade-in-0 zoom-in-95">
                  <div className="p-2">
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href="#"
                        className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 rounded-lg transition-colors duration-200 hover:text-indigo-700 font-medium"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden overflow-x-auto">
        <div className="flex space-x-1 py-3 px-4 min-w-max">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 backdrop-blur-sm"
            >
              {item.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BottomNavbar;