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
                {name:'FICTION BOOKS', link: '/fiction-books'},{name:'AUDIO BOOKS', link: '/audio-book-services'},]
    },
    { 
      name: 'Business Writing', 
      submenu: [{name:'NEWSLETTER WRITING', link: '/newsletter-writing'},
                {name:'WHITE-PAPER WRITING SERVICE', link: '/whitepaper-writing-service'},
                {name:'BUSINESS-PROPOSALS', link: '/business-proposal'},
                {name:'BUSINESS PLAN', link: '/business-plan-writing-services'},
                {name:'GRANT WRITING', link: '/grant-writing-services'}, 
                {name:'EMAIL WRITING', link: '/email-writing'}, 
                {name:'PITCH DECK', link: '/pitch-deck-design-services'},
                {name:'PRESS RELEASE WRITING SERVICES', link: '/press-release-writing-service'},
                {name:'PRESENTATIONS WRITING', link: '/presentations-writing'}, 
                {name:'CUSTOMERS LETTERS', link: '/customer-letters'},]
    },
    { 
      name: 'Editing Service', 
      submenu: [{name:'EDITING & PROOF-READING SERVICE', link: '/editing-and-proofreading-services'},{name:'REWRITING', link: '/rewriting'},]
    },
    { 
      name: 'Personal Writing', 
      submenu: [{name:'TRANSCRIPTION SERVICE', link: '/transcription-service'},
                {name:'VIDEO SCRIPT WRITING', link: '/video-script-writing-services'},
                {name:'BIO WRITING', link: '/bio-writing'},
                {name:'RESUME WRITING', link: '/resume-writing-services'},
                {name:'WIKIPEDIA WRITING', link: '/wikipedia-writing'}, 
                {name:'COMPLAINT LETTER WRITING SERVICE', link: '/complaint-letters'},
                {name:'RECOMMENDATION LETTERS', link: '/recommendation-letters'},]
    },
    { 
      name: 'Digital Solution', 
      submenu: [{name:'GUEST POST SERVICE', link: '/guest-post-service'},
                {name:'LANDING PAGE WRITING SERVICES', link: '/landing-page-writing-service'},
                {name:'PRODUCT DESCRIPTION WRITING', link: '/product-description-writing-services'},
                {name:'WEB CONTENT WRITING', link: '/web-content-writing'},
                {name:'WEBSITE DESIGN AND DEVELOPMENT SERVICES', link: '/website-design-and-development-services'},
                {name:'RESUME WRITING', link: '/resume-writing-services'},
                {name:'WIKIPEDIA WRITING', link: '/wikipedia-writing'}, 
              ]
    },
    { 
      name: 'Design', 
      submenu: [{name:'VIDEOS', link: '/videos'},
                {name:'LOGO DESIGN', link: '/logo-design'},
                {name:'BUSINESS CARD', link: '/business-card'},
                {name:'INFOGRAPHICS', link: '/infographic'},
                {name:'FLYERS', link: '/flyer'}, 
                {name:'WEBSITE REDESIGN', link: '/website-redesign'},
                {name:'LETTERHEAD', link: '/letter-head'},
                {name:'EBOOK COVER', link: '/ebook-cover'},
                {name:'ECOMMERCE WEBSITE DESIGN', link: '#'},
                {name:'FACEBOOK COVER', link: '#'},
      ]
    },
    { 
      name: 'Marketing', 
      submenu: [{name:'Article Writing', link: '#'},]
    },
    { 
      name: 'Social Media', 
      submenu: [{name:'Article Writing', link: '#'},]
    },
    { 
      name: 'SEO', 
      submenu: [{name:'Article Writing', link: '#'},]
    },
    { 
      name: 'Industries', 
      submenu: [{name:'Article Writing', link: '#'},]
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
                <div className="z-50 absolute top-full left-0 mt-0.5 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 animate-in fade-in-0 zoom-in-95">
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