import { useState } from 'react';
import { Link } from 'react-router-dom';

function BottomNavbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    { 
      name: 'Articles & Blogs', 
      submenu: [{name:'ARTICLE WRITING', link: '/article-writing'},{name:'BLOG WRITING', link: '/blogs-writing'},{name:'MICRO-BLOG POSTS', link: '/microblog-posts'},
               {name:'NEWSJACKING-POSTS', link: '/newsjacking-posts'},{name:'POWER-BLOG POSTS', link: '/power-blog-posts'}, {name:'MAGAZINE ARTICLES', link: '/magazine-articles'},
               {name:'LISTICLES', link: '/listicles'},]
    },
    { 
      name: 'Books', 
      submenu: [{name:'EBOOK', link: '/ebook-writing-services'},{name:'AUTOBIOGRAPHY WRITING', link: '/autobiography-writing-services'},
                {name:'FICTION BOOKS', link: '/fiction-books'},{name:'AUDIO BOOKS', link: '/article-writing'},]
    },
    { 
      name: 'Business Writing', 
      submenu: [{name:'Article Writing', link: '/article-writing'},{name:'Blog Writing', link: '/article-writing'},{name:'Micro-Blog Posts', link: '/article-writing'},{name:'NewsJacking Posts', link: '/article-writing'},{name:'Power Blog Posts', link: '/article-writing'}, {name:'Magazine Articles', link: '/article-writing'},{name:'Listicles', link: '/article-writing'},]
    },
    { 
      name: 'Editing Service', 
      submenu: [{name:'Article Writing', link: '/article-writing'},{name:'Blog Writing', link: '/article-writing'},{name:'Micro-Blog Posts', link: '/article-writing'},{name:'NewsJacking Posts', link: '/article-writing'},{name:'Power Blog Posts', link: '/article-writing'}, {name:'Magazine Articles', link: '/article-writing'},{name:'Listicles', link: '/article-writing'},]
    },
    { 
      name: 'Personal Writing', 
      submenu: [{name:'Article Writing', link: '/article-writing'},{name:'Blog Writing', link: '/article-writing'},{name:'Micro-Blog Posts', link: '/article-writing'},{name:'NewsJacking Posts', link: '/article-writing'},{name:'Power Blog Posts', link: '/article-writing'}, {name:'Magazine Articles', link: '/article-writing'},{name:'Listicles', link: '/article-writing'},]
    },
    { 
      name: 'Digital Solution', 
      submenu: [{name:'Article Writing', link: '/article-writing'},{name:'Blog Writing', link: '/article-writing'},{name:'Micro-Blog Posts', link: '/article-writing'},{name:'NewsJacking Posts', link: '/article-writing'},{name:'Power Blog Posts', link: '/article-writing'}, {name:'Magazine Articles', link: '/article-writing'},{name:'Listicles', link: '/article-writing'},]
    },
    { 
      name: 'Design', 
      submenu: [{name:'Article Writing', link: '/article-writing'},{name:'Blog Writing', link: '/article-writing'},{name:'Micro-Blog Posts', link: '/article-writing'},{name:'NewsJacking Posts', link: '/article-writing'},{name:'Power Blog Posts', link: '/article-writing'}, {name:'Magazine Articles', link: '/article-writing'},{name:'Listicles', link: '/article-writing'},]
    },
    { 
      name: 'Marketing', 
      submenu: [{name:'Article Writing', link: '/article-writing'},{name:'Blog Writing', link: '/article-writing'},{name:'Micro-Blog Posts', link: '/article-writing'},{name:'NewsJacking Posts', link: '/article-writing'},{name:'Power Blog Posts', link: '/article-writing'}, {name:'Magazine Articles', link: '/article-writing'},{name:'Listicles', link: '/article-writing'},]
    },
    { 
      name: 'Social Media', 
      submenu: [{name:'Article Writing', link: '/article-writing'},{name:'Blog Writing', link: '/article-writing'},{name:'Micro-Blog Posts', link: '/article-writing'},{name:'NewsJacking Posts', link: '/article-writing'},{name:'Power Blog Posts', link: '/article-writing'}, {name:'Magazine Articles', link: '/article-writing'},{name:'Listicles', link: '/article-writing'},]
    },
    { 
      name: 'SEO', 
      submenu: [{name:'Article Writing', link: '/article-writing'},{name:'Blog Writing', link: '/article-writing'},{name:'Micro-Blog Posts', link: '/article-writing'},{name:'NewsJacking Posts', link: '/article-writing'},{name:'Power Blog Posts', link: '/article-writing'}, {name:'Magazine Articles', link: '/article-writing'},{name:'Listicles', link: '/article-writing'},]
    },
    { 
      name: 'Industries', 
      submenu: [{name:'Article Writing', link: '/article-writing'},{name:'Blog Writing', link: '/article-writing'},{name:'Micro-Blog Posts', link: '/article-writing'},{name:'NewsJacking Posts', link: '/article-writing'},{name:'Power Blog Posts', link: '/article-writing'}, {name:'Magazine Articles', link: '/article-writing'},{name:'Listicles', link: '/article-writing'},]
    },
  ];

  return (
    <div className="z-50 relative bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
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
              <button className="cursor-pointer flex items-center gap-1 px-4 py-2 text-white/90 hover:text-white font-medium rounded-lg transition-all duration-200 group-hover:bg-white/10">
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
                <div className="z-50 absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 animate-in fade-in-0 zoom-in-95">
                  <div className="p-2">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.link}
                        className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 rounded-lg transition-colors duration-200 hover:text-indigo-700 font-medium"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default BottomNavbar;