import React from "react";
import { PhoneCall , MessageCircle, BookOpenText, Zap, Quote } from "lucide-react";
import { motion } from "framer-motion";

function CallToAction({title, title2, description}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: { scale: 0.95 },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "8rem",
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5,
      },
    },
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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
      
      <motion.section 
        className="flex flex-col gap-3 items-center justify-center mx-auto w-full text-center py-16 md:py-20 lg:py-10 px-4 sm:px-6 lg:px-8 bg-[url('/bg-banner.png')] bg-cover bg-center bg-no-repeat"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Heading Section */}
        <motion.div 
          className="flex flex-col text-center max-w-6xl gap-2 lg:gap-0"
          variants={itemVariants}
        >
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">
            {title}
          </h1>
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">
            {title2}
          </h1>
        </motion.div>

        {/* Animated Line */}
        <motion.div 
          className="h-1 bg-linear-to-r from-transparent via-white to-transparent my-2"
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />

        {/* Description and Buttons */}
        <motion.div 
          className="flex flex-col gap-2 max-w-xs lg:max-w-4xl "
          variants={itemVariants}
        >
          <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
            {description}
          </p>

          {/* Buttons Container */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 lg:gap-4 mt-5 lg:mt-2 lg:w-full sm:w-auto justify-center"
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
                <PhoneCall  className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Consult an Expert</span>
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
              className="cursor-pointer px-12 py-3 sm:px-15 sm:py-4 text-white rounded-full font-medium bg-white/90 lg:w-full sm:w-auto"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <div className="flex gap-2 items-center justify-center">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
                <span className="text-black text-sm sm:text-base">LIVE CHAT</span>
              </div>
            </motion.button>

            
          </motion.div>
        </motion.div>



        </motion.div>
      </motion.section>
    </>
  );
}

export default CallToAction;