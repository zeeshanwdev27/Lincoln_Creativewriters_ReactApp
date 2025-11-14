import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

function ProductDescriptionFAQs() {
   const [openIndex, setOpenIndex] = React.useState(null);

    const faqs = [
        {
            question: "Why Should I Hire Professional Product Description Writing Services?",
            answer: "Hiring professional product description writing services ensures your products are presented in the most engaging and persuasive way possible. Our expert writers understand how to highlight the unique features and benefits of your products, driving more sales and improving your online store's visibility in search results.",
        },
        {
            question: "How Long Does It Take to Complete a Product Description Project?",
            answer: "The timeline for completing a product description project varies depending on the number of products and the complexity of the descriptions. Typically, we work efficiently to deliver high-quality content within a few days to a week. During the initial consultation, we can provide a more precise timeline based on your specific needs.",
        },
        {
            question: "What are Product Description Services?",
            answer: "Product description services are a form of marketing copy that helps describe what the business has to offer. It provides the product's features and also its unique value proposition.",
        },
        {
            question: "How Much Do You Charge for Production Description Writing Services?",
            answer: "The cost of product description writing can vary based on several factors, including project complexity and timeline. Contact us for a better estimate regarding our services.",
        },
        {
            question: "Can I Provide Input or Request Changes During the Writing Process?",
            answer: "Absolutely; if you believe the product description draft file requires some changes, then you can have these changes made at any step of the writing process.",
        },
        {
            question: "What Type of Products Do Your Product Description Writing Services?",
            answer: "We provide product description services for all types of products. However, we mainly work with providing product descriptions for apparel, appliances, gadgets, and even testimonials.",
        },
    ];

    // Animation variants
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
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const faqItemVariants = {
        closed: {
            height: "auto",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        open: {
            height: "auto",
            transition: {
                duration: 0.4,
                ease: "easeInOut"
            }
        }
    };

    const answerVariants = {
        closed: {
            opacity: 0,
            height: 0,
            y: -10,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        open: {
            opacity: 1,
            height: "auto",
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
                delay: 0.1
            }
        }
    };

    const iconVariants = {
        closed: { rotate: 0 },
        open: { rotate: 180 }
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
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            
            <div className='bg-linear-to-br from-white via-blue-50/20 to-purple-50/10 relative overflow-hidden'>
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

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="max-w-4xl mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 xl:py-24"
                >
                    {/* Header Section */}
                    <motion.div 
                        variants={itemVariants}
                        className="text-center mb-8 sm:mb-12 lg:mb-16"
                    >
                        <motion.h1 
                            variants={itemVariants}
                            className="text-base sm:text-lg lg:text-xl text-slate-500 mb-2 sm:mb-3"
                        >
                            FAQ's
                        </motion.h1>
                        <motion.h3 
                            variants={itemVariants}
                            className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl text-indigo-600 font-semibold py-1 sm:py-2 lg:py-3 leading-tight"
                        >
                            Looking for answers?
                        </motion.h3>
                        <motion.p 
                            variants={itemVariants}
                            className="text-xs sm:text-sm lg:text-base text-slate-500 mt-2 sm:mt-3 lg:mt-4 pb-4 sm:pb-6 lg:pb-0 max-w-md sm:max-w-lg lg:max-w-xl mx-auto leading-relaxed"
                        >
                            Reach Out to Us for Further Assistance.
                        </motion.p>
                    </motion.div>

                    {/* FAQ Items */}
                    <motion.div 
                        variants={containerVariants}
                        className="w-full space-y-2 sm:space-y-3 lg:space-y-4"
                    >
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="border-b border-slate-200/60 cursor-pointer w-full bg-white/50 backdrop-blur-sm rounded-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 shadow-sm hover:shadow-md transition-shadow duration-300"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.995 }}
                            >
                                <motion.div 
                                    className="flex items-center justify-between"
                                    variants={faqItemVariants}
                                >
                                    <motion.h3 
                                        className="text-sm sm:text-base lg:text-lg font-medium text-slate-800 pr-4 sm:pr-6 leading-relaxed"
                                        whileHover={{ color: "#4f46e5" }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {faq.question}
                                    </motion.h3>
                                    <motion.div
                                        variants={iconVariants}
                                        animate={openIndex === index ? "open" : "closed"}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="flex-shrink-0"
                                    >
                                        <svg 
                                            width="20" 
                                            height="20" 
                                            viewBox="0 0 18 18" 
                                            fill="none" 
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-slate-600"
                                        >
                                            <path 
                                                d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" 
                                                stroke="currentColor" 
                                                strokeWidth="1.5" 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                            />
                                        </svg>
                                    </motion.div>
                                </motion.div>
                                
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.p 
                                            variants={answerVariants}
                                            initial="closed"
                                            animate="open"
                                            exit="closed"
                                            className="text-xs sm:text-sm lg:text-base text-slate-600 mt-3 sm:mt-4 lg:mt-5 leading-relaxed sm:leading-loose"
                                        >
                                            {faq.answer}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
};

export default ProductDescriptionFAQs;