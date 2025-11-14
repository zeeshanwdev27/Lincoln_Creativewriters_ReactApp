import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { PhoneCall, Mail, ArrowRight, Star } from 'lucide-react';
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function GuestPostContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const slideVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

const dummyData = [
  {
    image: "/DigitalSolution/GuestPost/content1.png",
    title: "Statistical Posts",
    description:
      "Data-backed guest posts that present insights, trends, and market findings using clear statistics to build authority and credibility.",
    features: [
      "Includes verified data and research",
      "Presents insights in a clear, digestible format",
      "Ideal for niches requiring factual credibility",
    ],
  },
  {
    image: "/DigitalSolution/GuestPost/content2.png",
    title: "Case Studies",
    description:
      "Insightful case study guest posts that highlight real-world examples, outcomes, and results to demonstrate expertise and thought leadership.",
    features: [
      "Showcases real examples and success stories",
      "Breaks down challenges, strategies, and results",
      "Builds trust through evidence-based storytelling",
    ],
  },
  {
    image: "/DigitalSolution/GuestPost/content3.png",
    title: "Thought Leadership",
    description:
      "High-authority guest posts that share expert opinions, industry perspectives, and forward-thinking insights to establish you as a leader in your field.",
    features: [
      "Delivers expert insights and original perspectives",
      "Strengthens brand authority and credibility",
      "Engages audiences with industry-leading viewpoints",
    ],
  },
  {
    image: "/DigitalSolution/GuestPost/content4.png",
    title: "Guidance Post",
    description:
      "Practical and easy-to-follow guest posts that provide solutions, tips, and actionable steps to help readers overcome challenges and achieve goals.",
    features: [
      "Offers clear, step-by-step guidance",
      "Provides practical solutions and tips",
      "Helps readers take meaningful action",
    ],
  },
];




  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-32 py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-indigo-50/30"
    >
      {/* Header Section */}
      <motion.div variants={itemVariants} className="flex flex-col gap-4 text-center mb-12 lg:mb-16">
        <motion.div 
          className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mx-auto mb-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Star className="w-4 h-4 fill-current" />
          Hire Professional Guest Posting Service
        </motion.div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
         Content For <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent ">Every Niche</span>
        </h1>
        
      </motion.div>

      {/* Swiper Section */}
      <motion.div variants={itemVariants} className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1.1,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 28,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 32,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
            1536: {
              slidesPerView: 3.5,
              spaceBetween: 40,
            },
          }}
          loop={true}
          className="modern-swiper"
          speed={800}
        >
          {dummyData.map((data, index) => (
            <SwiperSlide key={index}>
              <motion.div
                variants={slideVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-slate-200/60 overflow-hidden transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img 
                    src={data.image} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={data.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {data.title}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3">
                    {data.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
                    {data.description}
                  </p>

                  {/* Features List */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {data.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors flex-1 group/btn"
                    >
                      <Mail className="w-4 h-4" />
                      Live Chat
                      {/* <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" /> */}
                    </motion.button>
                    
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 border border-slate-300 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 transition-colors flex-1"
                    >
                      <PhoneCall className="w-4 h-4" />
                      Call Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <motion.div
          className="swiper-button-prev !-left-3 sm:!-left-6 lg:!-left-8 !w-12 !h-12 !bg-white/80 backdrop-blur-sm !rounded-xl !shadow-xl !border !border-slate-200/50 after:!text-sm hover:!bg-white hover:!shadow-2xl hover:scale-110 transition-all duration-200"
          style={{ "--swiper-navigation-color": "#4f46e5" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        ></motion.div>
        
        <motion.div
          className="swiper-button-next !-right-3 sm:!-right-6 lg:!-right-8 !w-12 !h-12 !bg-white/80 backdrop-blur-sm !rounded-xl !shadow-xl !border !border-slate-200/50 after:!text-sm hover:!bg-white hover:!shadow-2xl hover:scale-110 transition-all duration-200"
          style={{ "--swiper-navigation-color": "#4f46e5" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        ></motion.div>

        {/* Custom Pagination */}
        <div className="swiper-pagination !bottom-4 mt-8"></div>
      </motion.div>

      {/* Custom CSS for Swiper */}
      <style jsx>{`
        .modern-swiper {
          padding: 20px 10px 60px;
        }

        @media (min-width: 640px) {
          .modern-swiper {
            padding: 30px 50px 60px;
          }
        }

        @media (min-width: 1024px) {
          .modern-swiper {
            padding: 40px 60px 70px;
          }
        }

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: #4f46e5;
          width: 24px;
          border-radius: 6px;
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </motion.div>
  );
}

export default GuestPostContent;