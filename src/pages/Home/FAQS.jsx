import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

function FAQS() {
   const [openIndex, setOpenIndex] = React.useState(null);

    const faqs = [
        {
            question: "What are Creative Writing Services?",
            answer: "Creative writing services provide high-quality content depending on the client's needs. Here, content can be grants, sales pitches, autobiographies, etc. Get in touch to learn more about what Lincoln Creative Writers has to offer.",
        },
        {
            question: "What Kind of Creative Writing Services Online Do I Get with Lincoln Creative Writers?",
            answer: "Lincoln Creative Writers can provide assistance with these projects: Grant Writing, Business Plan Writing, EBook Ghostwriting, Product Description Writing, Amazon Product Description Writing, Video Script Writing, Cover Letter Writing, Pitch Deck Designing, Proofreading, Autobiography Writing",
        },
        {
            question: "Do you work with Freelancers?",
            answer: "No, we have in-house writing experts who have exceptional talent when it comes to writing. This way, we ensure our work remains consistent throughout the service.",
        },
        {
            question: "How Much Do You Charge for Creative Content Writing Services?",
            answer: "The service cost depends on various factors, including project complexity, type, and requirements. If you request creative content writing services, then be sure to contact us for a more inclusive quote regarding our service.",
        },
        {
            question: "How Can Creative Writing Services Benefit My Business?",
            answer: "Creative writing services can significantly enhance your business by crafting engaging, original content tailored to your specific needs. From SEO-friendly articles and grant proposals to business plans and video scripts, our services help improve reader engagement, boost online presence, and ultimately drive business success.",
        },
        {
            question: "What Makes Lincoln Creative Writers Different from Other Agencies?",
            answer: "At Lincoln Creative Writers, we prioritize originality and quality over quantity. Our team of diverse and experienced writers conducts in-depth research to create content that is not only engaging but also well-informed and unique. We provide personalized support throughout the content creation process, ensuring your vision and goals are met with every project.",
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
                            className="text-xs sm:text-sm lg:text-base text-slate-500 mt-2 sm:mt-3 lg:mt-4 pb-4 sm:pb-6 lg:pb-8 max-w-md sm:max-w-lg lg:max-w-xl mx-auto leading-relaxed"
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

export default FAQS;