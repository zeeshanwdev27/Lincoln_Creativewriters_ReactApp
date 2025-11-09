import React from 'react'
import { motion } from 'framer-motion'

function HowWeProvide() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

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
  }

    const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] mt-10 lg:mt-20 w-full px-4 sm:px-6 lg:px-8 gap-8 lg:gap-0 items-center bg-linear-to-br from-white via-blue-50/20 to-purple-50/10 relative overflow-hidden'>
            {/* Animated Background Elements */}
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute top-10 left-4 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 bg-blue-500/10 rounded-full blur-3xl"
            />
            <motion.div
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 1 }}
              className="absolute bottom-20 right-4 sm:right-10 w-56 h-56 sm:w-80 sm:h-80 bg-purple-500/10 rounded-full blur-3xl"
            />
            <motion.div
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 2 }}
              className="absolute top-1/2 left-1/4 w-40 h-40 sm:w-52 sm:h-52 bg-amber-500/5 rounded-full blur-3xl"
            />
      
      
      <motion.div 
        className='w-full max-w-xl mx-auto flex flex-col gap-4 lg:gap-5 order-2 lg:order-1'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h1 
          className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700'
          variants={itemVariants}
        >
          How Does <span className='text-indigo-500'>Our Creative Writing Agency</span> Provide the Top Quality Content Solution?
        </motion.h1>
        
        <motion.p 
          className='text-sm sm:text-base text-gray-700'
          variants={itemVariants}
        >
          Lincoln Creative Writers is all about curating brand-specific content that drives business credibility. Regardless of what you need, our troupe of expert writers can craft engaging content to boost reader engagement and improve your online presence. From SEO-focused articles and blogs to more technical projects like grant proposals and newsletters, trust our creative writing professionals to prepare compelling pieces that maintain industry-leading positions.
        </motion.p>
        
        <motion.h2 
          className='text-xl sm:text-2xl font-bold text-slate-700'
          variants={itemVariants}
        >
          How We're Different!
        </motion.h2>
        
        <motion.p 
          className='text-sm sm:text-base text-gray-700'
          variants={itemVariants}
        >
          Unlike other creative writing companies that believe creativity translates to writing fairy tales and fictional pieces, we go up a notch by producing high-quality content that not only entices readers but also improves brand loyalty to the business.
        </motion.p>
        
        <motion.div 
          className='flex flex-col sm:flex-row justify-center gap-3 lg:gap-4 mt-4'
          variants={itemVariants}
        >
          <motion.button 
            className='cursor-pointer hover:bg-indigo-600 border w-full sm:w-1/3 p-3 rounded-md bg-indigo-500 text-white font-bold'
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            Get A Quote
          </motion.button>
          <motion.button 
            className='cursor-pointer hover:bg-gray-100 border w-full sm:w-1/3 p-3 rounded-md font-semibold'
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            Chat With Us
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div 
        className='w-full flex justify-center order-1 lg:order-2'
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.img 
          src="/hero.png" 
          alt="Why Choose Us" 
          className='w-full max-w-xs lg:max-w-lg xl:max-w-xl rounded-lg '
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  )
}

export default HowWeProvide