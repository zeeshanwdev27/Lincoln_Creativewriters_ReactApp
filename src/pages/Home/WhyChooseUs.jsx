import React from "react";
import { motion } from "framer-motion";
import { Book, Calendar } from 'lucide-react';

function WhyChooseUs() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: 50,
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const statItemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      scale: 1.02,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const numberVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.3
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const delayedFloatingVariants = {
    animate: {
      y: [0, -25, 0],
      x: [0, -15, 0],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      },
    },
  };

  return (
    <>
      {/* Main Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] pt-10 lg:pt-20 w-full px-4 sm:px-6 lg:px-8 gap-8 lg:gap-20 items-center bg-linear-to-br from-white via-blue-50/20 to-purple-50/10 relative overflow-hidden">
        
        {/* Animated Background Elements */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-10 left-4 sm:left-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          variants={delayedFloatingVariants}
          animate="animate"
          className="absolute bottom-20 right-4 sm:right-10 w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute top-1/2 left-1/4 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-amber-500/5 rounded-full blur-3xl"
        />

        {/* Left Content */}
        <motion.div
          className="w-full max-w-xl mx-auto lg:mx-0 lg:ml-auto flex flex-col gap-6 lg:gap-10 order-2 "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >

          <motion.div 
            className="flex flex-col gap-4"
            variants={itemVariants}
          >
            <motion.h1
              className="flex flex-col text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-slate-800 leading-tight"
              variants={itemVariants}
            >
              <motion.span
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -30, opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                Why Choose Us for
              </motion.span>
              <motion.span 
                className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -30, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Creative Writing
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base lg:text-md text-gray-600 leading-relaxed"
              variants={itemVariants}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
            >
              We're one of the best creative content writing services in the US,
              as our services are unmatched. We know how difficult it can be to
              churn out impactful content that delivers quality. It's the reason
              why our experts take great care when it comes to writing.
            </motion.p>
          </motion.div>

          <motion.div 
            className="flex flex-col gap-4"
            variants={itemVariants}
          >
            <motion.h1
              className="flex flex-col text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-slate-800 leading-tight"
              variants={itemVariants}
            >
              <motion.span
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -30, opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                Your Success
              </motion.span>
              <motion.span 
                className="text-indigo-600 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -30, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Lies in the Content You Write
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base lg:text-md text-gray-600 leading-relaxed"
              variants={itemVariants}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
            >
              Whether a grant for funding, an Amazon product description to
              attract customers, or a strong cover letter to catch the eye of
              employers, quality is a crucial factor that leads to success.
              Without it, your content may not make the impact you intended.
            </motion.p>
          </motion.div>

        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full flex justify-center lg:justify-start order-1 lg:order-2"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <motion.img
              src="/whychooseus.png"
              alt="Why Choose Us"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl "
              whileInView={{ 
                scale: 1,
                opacity: 1,
                rotate: 0 
              }}
              initial={{ 
                scale: 0.9,
                opacity: 0,
                rotate: 2 
              }}
              transition={{ 
                duration: 0.8,
                ease: "easeOut"
              }}
            />
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl -z-10"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </div>



      {/* Stats Section */}
      <motion.div 
        className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8 py-10 px-4 sm:px-6 lg:px-8"
        variants={statsContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Years of Experience */}
        <motion.div
          className="border border-slate-200 p-6 sm:p-8 lg:p-10 px-8 sm:px-12 lg:px-20 relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 w-full sm:w-auto max-w-xs"
          variants={statItemVariants}
          whileHover="hover"
        >
          <h1 
            className="text-6xl sm:text-7xl lg:text-8xl text-indigo-100 font-semibold text-center"
          >
            10+
          </h1>
          <div className="flex flex-col items-center -mt-16 sm:-mt-20">
            <motion.div
              variants={iconVariants}
              whileHover="hover"
            >
              <Calendar className="text-indigo-600 w-6 h-6 sm:w-7 sm:h-8" />
            </motion.div>
            <p className="text-sm text-gray-700 font-medium mt-2 text-center">Years Of Experience</p>
          </div>
        </motion.div>

        {/* Books Written */}
        <motion.div
          className="border border-slate-200 p-6 sm:p-8 lg:p-10 px-8 sm:px-12 lg:px-20 relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 w-full sm:w-auto max-w-xs"
          variants={statItemVariants}
          whileHover="hover"
        >
          <h1 
            className="text-6xl sm:text-7xl lg:text-8xl text-indigo-100 font-semibold text-center"
          >
            700+
          </h1>
          <div className="flex flex-col items-center -mt-16 sm:-mt-20">
            <motion.div
              variants={iconVariants}
              whileHover="hover"
            >
              <Book className="text-indigo-600 w-6 h-6 sm:w-7 sm:h-8" />
            </motion.div>
            <p className="text-sm sm:text-base text-gray-700 font-medium mt-2 text-center">Books Written</p>
          </div>
        </motion.div>

        {/* American Writers */}
        <motion.div
          className="border border-slate-200 p-6 sm:p-8 lg:p-10 px-8 sm:px-12 lg:px-20 relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 w-full sm:w-auto max-w-xs"
          variants={statItemVariants}
          whileHover="hover"
        >
          <h1 
            className="text-6xl sm:text-7xl lg:text-8xl text-indigo-100 font-semibold text-center"
          >
            250+
          </h1>
          <div className="flex flex-col items-center -mt-16 sm:-mt-20">
            <motion.div
              variants={iconVariants}
              whileHover="hover"
            >
              <img 
                src="/america.png" 
                alt="America Icon" 
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
            </motion.div>
            <p className="text-sm sm:text-base text-gray-700 font-medium mt-2 text-center">American Writers</p>
          </div>
        </motion.div>
      </motion.div>


      
    </>
  );
}

export default WhyChooseUs;