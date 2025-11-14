import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Eye } from "lucide-react";

function WebcontentSamples() {
  const cardsData = [
    { title: "Guest Sample 1", image: "/DigitalSolution/Webcontent/Sample/sample1.png", pdfLink : '/DigitalSolution/Webcontent/Sample/sample1.pdf', },
    { title: "Guest Sample 2", image: "/DigitalSolution/Webcontent/Sample/sample2.png", pdfLink : '/DigitalSolution/Webcontent/Sample/sample2.png'},
    { title: "Guest Sample 3", image: "/DigitalSolution/Webcontent/Sample/sample3.png", pdfLink : '/DigitalSolution/Webcontent/Sample/sample3.png'},
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div
      className="relative flex flex-col items-center w-full mx-auto px-4 sm:px-6 lg:px-8 py-15
      bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden"
      style={{ backgroundImage: "url('/articles/bg-article.jpg')" }}
    >
      {/* Enhanced Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-purple-900/30 backdrop-blur-[1px]"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full flex flex-col items-center max-w-8xl h-full justify-center">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16 max-w-6xl mx-auto w-full"
        >
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex lg:items-center lg:gap-2 bg-white px-12 lg:px-4 py-3 rounded-2xl border border-indigo-200/20 mb-6 lg:mb-6 shadow-lg backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-700 animate-pulse" />
            <span className="text-indigo-600 font-semibold text-[13px] md:text-sm">
              We deliver precise and effective creative content worldwide.
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-3 sm:mb-4 px-2"
          >
            Explore Our{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Diverse Content Writing
            </span>{" "}
            Samples
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-white/90 max-w-4xl mx-auto px-4 leading-relaxed"
          >
            Experience how we turn ideas into compelling written masterpieces.
          </motion.p>
        </motion.div>

        {/* Enhanced Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-7xl"
        >
          {cardsData.map((data, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl border border-white/40 rounded-2xl lg:rounded-3xl shadow-2xl hover:shadow-3xl p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 transition-all duration-500 overflow-hidden h-full"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Image Container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-xl lg:rounded-2xl shadow-lg relative flex-1"
              >
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-xl lg:rounded-2xl transition-transform duration-700 group-hover:scale-110"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 rounded-xl lg:rounded-2xl"></div>
              </motion.div>

              {/* Content */}
              <div className="flex flex-col gap-3 sm:gap-4 relative z-10">
                <motion.h3
                  className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 line-clamp-2"
                >
                  {data.title}
                </motion.h3>

                <motion.button
                onClick={() => window.open(`${data.pdfLink}`, "_blank")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer group relative w-full px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-lg lg:rounded-xl text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Button Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <div className="relative flex items-center justify-center gap-2 sm:gap-3">
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">View Sample</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-indigo-400/10 to-purple-400/10 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full translate-y-6 -translate-x-6 group-hover:scale-150 transition-transform duration-700"></div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}

export default WebcontentSamples;