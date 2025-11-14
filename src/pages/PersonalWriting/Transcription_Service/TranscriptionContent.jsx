import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { PhoneCall, Mail, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function TranscriptionContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const slideVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

const dummyData = [
  {
    image: "/PersonalWriting/TranscriptionService/audio.png",
    title: "Audio Transcription",
    description:
      "Convert your audio recordings into accurate, readable text quickly and efficiently, ensuring nothing is missed from your meetings, interviews, or podcasts.",
    features: [
      "Accurate word-for-word transcription",
      "Supports interviews, podcasts, and meetings",
      "Quick turnaround with high reliability",
    ],
  },
  {
    image: "/PersonalWriting/TranscriptionService/video.png",
    title: "Video Transcription",
    description:
      "Transform your video content into precise text, making your media accessible, searchable, and easier to repurpose for captions, blogs, or presentations.",
    features: [
      "Time-stamped transcription for videos",
      "Enhances accessibility and SEO",
      "Ideal for captions, scripts, and content repurposing",
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
      <motion.div
        variants={itemVariants}
        className="flex flex-col gap-4 text-center mb-12 lg:mb-16"
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mx-auto mb-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Star className="w-4 h-4 fill-current" />
         Hire Professional Transcription Content Service
        </motion.div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Our Services
        </h1>
      </motion.div>

      {/* Swiper Section */}
      <motion.div variants={itemVariants} className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {dummyData.map((data, index) => (
            <motion.div
              key={index}
              variants={slideVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
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
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default TranscriptionContent;
