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
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] pt-8 sm:pt-12 lg:pt-20 w-full px-4 sm:px-6 lg:px-8 xl:px-12 gap-6 sm:gap-8 lg:gap-12 xl:gap-20 items-center bg-linear-to-br from-white via-blue-50/20 to-purple-50/10 relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-4 sm:top-6 lg:top-10 left-2 sm:left-4 lg:left-10 w-20 h-20 sm:w-32 sm:h-32 lg:w-48 lg:h-48 xl:w-64 xl:h-64 bg-blue-500/10 rounded-full blur-2xl sm:blur-3xl"
        />
        <motion.div
          variants={delayedFloatingVariants}
          animate="animate"
          className="absolute bottom-12 sm:bottom-16 lg:bottom-20 right-2 sm:right-4 lg:right-10 w-24 h-24 sm:w-40 sm:h-40 lg:w-56 lg:h-56 xl:w-80 xl:h-80 bg-purple-500/10 rounded-full blur-2xl sm:blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute top-1/2 left-1/4 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 bg-amber-500/5 rounded-full blur-2xl sm:blur-3xl"
        />

        {/* Left Content */}
        <motion.div
          className="w-full max-w-full lg:max-w-xl mx-auto lg:mx-0 lg:ml-auto flex flex-col gap-4 sm:gap-5 lg:gap-8 xl:gap-10 order-2 lg:order-1 px-5 lg:px-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="flex flex-col gap-3 sm:gap-4" variants={itemVariants}>
            <motion.h1
              className="flex flex-col text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 leading-tight sm:leading-tight lg:leading-tight"
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
              className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed sm:leading-relaxed"
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

          <motion.div className="flex flex-col gap-3 sm:gap-4" variants={itemVariants}>
            <motion.h1
              className="flex flex-col text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 leading-tight sm:leading-tight lg:leading-tight"
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
              className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed sm:leading-relaxed"
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
              className="w-full max-w-[350px] xs:max-w-[320px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[500px] xl:max-w-[600px] rounded-2xl"
              whileInView={{
                scale: 1,
                opacity: 1,
                rotate: 0,
              }}
              initial={{
                scale: 0.9,
                opacity: 0,
                rotate: 2,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            />
            <motion.div
              className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg sm:blur-xl -z-10"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 lg:gap-6 xl:gap-8 py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 xl:px-12 bg-linear-to-br from-white via-blue-50/20 to-purple-50/10 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Years of Experience */}
        <motion.div
          className="border border-slate-200 p-4 sm:p-6 lg:p-10  px-6 sm:px-8 lg:px-12  relative bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 w-full sm:flex-1 max-w-[300px] md:max-w-[220px] lg:max-w-[350px] py-8 lg:py-10"
          variants={statItemVariants}
          whileHover="hover"
        >
          <h1 className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-5xl sm:text-5xl lg:text-6xl xl:text-8xl text-indigo-100 font-semibold text-center m-0">
            10+
          </h1>

          <div className="flex flex-col items-center relative z-10">
            <motion.div variants={iconVariants} whileHover="hover">
              <Calendar className="text-indigo-600 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-8" />
            </motion.div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-medium mt-1 sm:mt-2 text-center">
              Years Of Experience
            </p>
          </div>
        </motion.div>

        {/* Books Written */}
        <motion.div
          className="border border-slate-200 p-4 sm:p-6 lg:p-10 xl:p-10 px-6 sm:px-8 lg:px-12 xl:px-20 relative bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 w-full sm:flex-1 max-w-[300px] md:max-w-[220px] lg:max-w-[350px] py-8 lg:py-10"
          variants={statItemVariants}
          whileHover="hover"
        >
          <h1 className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-5xl sm:text-5xl lg:text-6xl xl:text-8xl text-indigo-100 font-semibold text-center m-0">
            700+
          </h1>

          <div className="flex flex-col items-center relative z-10">
            <motion.div variants={iconVariants} whileHover="hover">
              <Book className="text-indigo-600 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-8" />
            </motion.div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-medium mt-1 sm:mt-2 text-center">
              Books Written
            </p>
          </div>
        </motion.div>

        {/* American Writers */}
        <motion.div
          className="border border-slate-200 p-4 sm:p-6 lg:p-10 xl:p-10 px-6 sm:px-8 lg:px-12 xl:px-20 relative bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 w-full sm:flex-1 max-w-[300px]  md:max-w-[220px] lg:max-w-[350px] py-8"
          variants={statItemVariants}
          whileHover="hover"
        >
          <h1 className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-5xl sm:text-5xl lg:text-6xl xl:text-8xl text-indigo-100 font-semibold text-center m-0">
            250+
          </h1>

          <div className="flex flex-col items-center relative z-10">
            <motion.div variants={iconVariants} whileHover="hover">
              <img
                src="/america.png"
                alt="America Icon"
                className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
              />
            </motion.div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-medium mt-1 sm:mt-2 text-center">
              American Writers
            </p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default WhyChooseUs;