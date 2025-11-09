import { useState } from "react";
import { 
  Phone, 
  MessageCircle, 
  Quote, 
  Menu, 
  X,
  ChevronDown,
  Sparkles,
  BadgeCheck
} from "lucide-react";
import BottomNavbar from "./BottomNavbar";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="z-50 flex items-center justify-between w-full py-3 px-6 md:px-8 lg:px-50 bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100/80">
        {/* Logo */}
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="relative">
            <div className="w-12 h-12 bg-linear-to-br from-indigo-600 via-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              LincolnWrites
            </h1>
            <p className="text-xs text-gray-500 font-medium -mt-1">Creative Content</p>
          </div>
        </div>

        {/* Desktop Call To Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a 
            href="#" 
            className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-linear-to-r from-gray-50 to-gray-100/50 hover:from-indigo-50 hover:to-purple-50/30 border border-gray-200/60 hover:border-indigo-200 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="relative">
              <Phone className="w-5 h-5 text-green-500" />
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            </div>
            <span className="text-gray-700 group-hover:text-indigo-700 font-semibold text-sm">
              +1 (917) 765-8780
            </span>
          </a>
          
          <a 
            href="#features" 
            className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100/50 hover:from-indigo-50 hover:to-purple-50/30 border border-gray-200/60 hover:border-indigo-200 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <MessageCircle className="w-5 h-5 text-blue-500 group-hover:text-blue-600" />
            <span className="text-gray-700 group-hover:text-indigo-700 font-semibold text-sm">
              Live Chat
            </span>
          </a>
          
          <a 
            href="#testimonials" 
            className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Quote className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
            <span className="text-sm">Free Quote</span>
            <ChevronDown className="w-4 h-4 text-white/80 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-3 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100/50 hover:from-indigo-50 hover:to-purple-50/30 border border-gray-200/60 hover:border-indigo-200 transition-all duration-300 active:scale-95"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </nav>
      

      <div className="lg:block hidden">
      <BottomNavbar />

      </div>



    </>
  );
}

export default Navbar;