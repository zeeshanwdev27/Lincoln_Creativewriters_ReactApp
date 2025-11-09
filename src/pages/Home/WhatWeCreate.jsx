import React from 'react';
import { 
  FileText, 
  TrendingUp, 
  BookOpen, 
  ShoppingCart, 
  Package,
  Video,
  Mail,
  Presentation,
  CheckCircle,
  User,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { motion } from "framer-motion";


function WhatWeCreate() {
    const cardsData = [
        {
            icon: <FileText className="w-8 h-8" />,
            title: "Grant Writing",
            description: "Craft compelling narratives that resonate with potential backers, ensuring your proposals stand out from the rest and secure the funding you need.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Business Plan Writing",
            description: "Transform your vision into a strategic masterpiece that impresses investors and sets the stage for unprecedented business success.",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: "EBook Ghostwriting",
            description: "Create captivating eBook masterpieces that leave lasting impressions on readers and dominate the digital publishing landscape.",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: <ShoppingCart className="w-8 h-8" />,
            title: "Product Description Writing",
            description: "Transform mundane product details into compelling narratives that spark curiosity and drive conversions among your target audience.",
            color: "from-orange-500 to-red-500"
        },
        {
            icon: <Package className="w-8 h-8" />,
            title: "Amazon Product Description Writing",
            description: "Craft keyword-rich Amazon descriptions that not only inform but compel customers to add your products to their cart instantly.",
            color: "from-amber-500 to-yellow-500"
        },
        {
            icon: <Video className="w-8 h-8" />,
            title: "Video Script Writing",
            description: "Develop captivating scripts with powerful introductions and compelling calls-to-action that make your videos unforgettable.",
            color: "from-red-500 to-rose-500"
        },
        {
            icon: <Mail className="w-8 h-8" />,
            title: "Cover Letter Writing",
            description: "Showcase your unique qualities with engaging cover letters that make your resume stand out to potential employers.",
            color: "from-indigo-500 to-blue-500"
        },
        {
            icon: <Presentation className="w-8 h-8" />,
            title: "Pitch Deck Designing",
            description: "Transform your ideas into persuasive messages that leave lasting impacts on investors and secure the funding you deserve.",
            color: "from-teal-500 to-cyan-500"
        },
        {
            icon: <CheckCircle className="w-8 h-8" />,
            title: "Proofreading",
            description: "Ensure your professional documents are flawless with meticulous proofreading that catches every typo and grammatical error.",
            color: "from-lime-500 to-green-500"
        },
        {
            icon: <User className="w-8 h-8" />,
            title: "Autobiography Writing",
            description: "Preserve your life story in a beautifully constructed document that honors your experiences for generations to come.",
            color: "from-violet-500 to-purple-500"
        },
    ]

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
        <div className='flex flex-col items-center w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-blue-50/20 to-purple-50/10 relative overflow-hidden'>
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
            
            {/* Header Section */}
            <div className='text-center mb-12 sm:mb-16 lg:mb-20 max-w-4xl mx-auto'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-2 rounded-full border border-indigo-100 mb-6"
                >
                    <Sparkles className="w-4 h-4 text-indigo-600" />
                    <span className="text-indigo-700 font-semibold text-sm">Our Services</span>
                </motion.div>
                
                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4'>
                    What We Can{' '}
                    <span className='bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
                        Create Together
                    </span>
                </h1>
                
                <p className='text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto'>
                    Transform your ideas into exceptional content with our comprehensive writing and design services
                </p>
            </div>

            {/* Cards Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 w-full max-w-7xl'>
                {cardsData.map((data, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ 
                            scale: 1.02,
                            y: -5,
                            transition: { duration: 0.2 }
                        }}
                        className='group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 p-6 sm:p-8 flex flex-col gap-6 transition-all duration-300'
                    >
                        {/* Background Gradient Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`} />
                        
                        {/* Icon */}
                        <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${data.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300 w-fit`}>
                            {data.icon}
                        </div>

                        {/* Content */}
                        <div className='flex flex-col gap-4 flex-1'>
                            <h3 className='text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors'>
                                {data.title}
                            </h3>
                            
                            <p className='text-gray-600 leading-relaxed flex-1'>
                                {data.description}
                            </p>

                            {/* CTA Button */}
                            <button className='group/btn inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold transition-colors duration-200 w-fit mt-2'>
                                <span>Learn More</span>
                                <ArrowRight className='w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200' />
                            </button>
                        </div>

                        {/* Hover Border Effect */}
                        <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${data.color} bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}>
                            <div className="rounded-3xl bg-white w-full h-full" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom CTA */}
            {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-12 sm:mt-16 lg:mt-20"
            >
                <p className="text-gray-600 mb-6 text-lg">
                    Ready to bring your ideas to life?
                </p>
                <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto">
                    <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                    <span>Start Your Project</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
            </motion.div> */}

        </div>
    )
}

export default WhatWeCreate