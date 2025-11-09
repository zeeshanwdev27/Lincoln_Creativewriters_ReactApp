import React from "react";
import { Phone, Zap, Quote } from "lucide-react";
import { motion } from "framer-motion";

function CollabrateWithUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: { scale: 0.95 }
  };

  const rainbowHoverVariants = {
    initial: { backgroundPosition: "0% 50%" },
    hover: { 
      backgroundPosition: "100% 50%",
      transition: {
        duration: 0.8,
        ease: "linear"
      }
    }
  };

  return (
    <div className="min-h-[35vh] bg-linear-to-r from-indigo-600 to-purple-500 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="flex flex-col gap-6 items-center justify-center w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div 
          className="flex flex-col gap-1 lg:gap-3 text-center"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            variants={itemVariants}
          >
            Collaborate with Us and See the Magic
          </motion.h1>
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white"
            variants={itemVariants}
          >
            Of Our Creative Writing Service
          </motion.h2>
        </motion.div>

        <motion.div 
          className="flex flex-col gap-1 lg:gap-2 text-center max-w-2xl"
          variants={itemVariants}
        >
          <motion.p 
            className="text-sm sm:text-base text-white/90"
            variants={itemVariants}
          >
            We don't just create content but rather turn your ideas into compelling pieces that fit your needs and requirements.
          </motion.p>
          {/* <motion.p 
            className="text-sm sm:text-base text-white/90"
            variants={itemVariants}
          >
            Give us a call and join our exclusive list of satisfied clients.
          </motion.p> */}
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-3 lg:gap-4 mt-2 lg:w-full sm:w-auto justify-center"
          variants={itemVariants}
        >
          <motion.div 
            className="rainbow relative z-0 overflow-hidden p-0.5 flex items-center justify-center rounded-full"
            variants={rainbowHoverVariants}
            initial="initial"
            whileHover="hover"
          >
            <motion.button 
              className="cursor-pointer px-6 py-3 sm:px-8 sm:py-4 text-white rounded-full font-medium bg-gray-800 lg:w-full sm:w-auto"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <div className="flex gap-2 items-center justify-center">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">+1 (917) 765-8780</span>
              </div>
            </motion.button>
          </motion.div>

          <motion.div 
            className="rainbow relative z-0 overflow-hidden p-0.5 flex items-center justify-center rounded-full"
            variants={rainbowHoverVariants}
            initial="initial"
            whileHover="hover"
          >
            <motion.button 
              className="cursor-pointer px-6 py-3 sm:px-8 sm:py-4 text-white rounded-full font-medium bg-white/90 lg:w-full sm:w-auto"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <div className="flex gap-2 items-center justify-center">
                <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
                <span className="text-black text-sm sm:text-base">Get Free Quote</span>
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500" />
              </div>
            </motion.button>

            
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default CollabrateWithUs;

