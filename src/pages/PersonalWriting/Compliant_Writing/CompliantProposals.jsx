import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Zap,
  CheckCircle,
  FileText,
  Users,
  Lightbulb,
  BarChart3,
  Clock,
  UserCheck,
  Headset,
  FileSearch,
  Sparkles
} from "lucide-react";

function CompliantProposals() {
  const [activeFeature, setActiveFeature] = useState(0);

const features = [
  {
    title: "Brief Understanding of Matters",
    description:
      "We understand how important it is to address issues that matter to you. Our writers have a strong command of both formal and informal complaint structures, enabling us to draft letters that clearly reflect your concerns.",
    offers: [
      "Accurate interpretation of your concerns",
      "Well-structured and professionally worded letters",
      "Context-appropriate tone and impactful phrasing",
    ],
    icon: FileSearch,
    color: "indigo",
  },
  {
    title: "Dedicated Support",
    description:
      "Our team stays by your side throughout the process, providing expert guidance and support whenever you need it. Whether you have questions or want updates, we’re always here to assist.",
    offers: [
      "A dedicated project manager for smooth communication",
      "Regular updates on your project’s progress",
      "Responsive support from start to final delivery",
    ],
    icon: Headset,
    color: "indigo",
  },
  {
    title: "Original Content",
    description:
      "We craft complaint letters that are authentic, credible, and tailored to your specific situation. Our writers ensure every document is unique, impactful, and aligned with your goals.",
    offers: [
      "100% original and tailored content",
      "Fact-checked and credibility-focused writing",
      "Revisions available to refine tone and message",
    ],
    icon: Sparkles,
    color: "indigo",
  },
  {
    title: "Timely Deliveries",
    description:
      "We understand the urgency behind many complaint matters. That’s why our team ensures your letter is delivered quickly and professionally, without compromising quality.",
    offers: [
      "Guaranteed on-time delivery",
      "Fast turnaround for urgent cases",
      "Quick revisions when needed",
    ],
    icon: Clock,
    color: "indigo",
  },
];


  const buttonLabels = [
    "Brief Understanding of Matters",
    "Dedicated Support",
    "Original Content",
    "Timely Deliveries",
  ];

  const offerIcons = [
    CheckCircle,
    FileText,
    Users,
    Lightbulb,
    BarChart3,
    Clock,
    Award,
    Zap,
  ];

  // Animation variants
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

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.3,
      },
    },
  };

  const buttonVariants = {
    inactive: {
      scale: 1,
      backgroundColor: "#ffffff",
      color: "#4b5563",
      borderColor: "#e5e7eb",
    },
    active: {
      scale: 1.02,
      backgroundColor: "#4f46e5",
      color: "#ffffff",
      borderColor: "#4f46e5",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#6366f1",
      color: "#ffffff",
      transition: {
        duration: 0.2,
      },
    },
  };

  const iconVariants = {
    inactive: {
      scale: 1,
      color: "#4b5563",
    },
    active: {
      scale: 1.1,
      color: "#ffffff",
      transition: {
        duration: 0.3,
      },
    },
    hover: {
      scale: 1.15,
      color: "#ffffff",
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-indigo-25 py-12 lg:py-15 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.p
            className="text-lg text-indigo-600 font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Still, Looking for a Reason to Connect with Us?
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-700  mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
           Here’s What Makes Our Complaint Writers So Good
          </motion.h1>
                    <motion.div
            className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        {/* Features Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-indigo-100 overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Navigation Buttons - Left Side */}
            <motion.div
              className="lg:w-1/3 p-6 bg-gradient-to-b from-indigo-50 to-white border-r border-indigo-200"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col gap-4 h-full">
                {buttonLabels.map((label, index) => {
                  const IconComponent = features[index].icon;
                  return (
                    <motion.button
                      key={index}
                      onClick={() => setActiveFeature(index)}
                      variants={buttonVariants}
                      initial="inactive"
                      animate={activeFeature === index ? "active" : "inactive"}
                      whileHover={activeFeature !== index ? "hover" : {}}
                      className={`p-4 rounded-xl border-2 font-semibold text-left transition-all duration-300 shadow-sm ${
                        activeFeature === index
                          ? "shadow-lg ring-2 ring-indigo-200 ring-opacity-50"
                          : "hover:shadow-md border-indigo-100"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <motion.div
                          variants={iconVariants}
                          initial="inactive"
                          animate={
                            activeFeature === index ? "active" : "inactive"
                          }
                        >
                          <IconComponent
                            size={24}
                            className={
                              activeFeature === index
                                ? "text-white"
                                : "text-indigo-600"
                            }
                          />
                        </motion.div>
                        <span className="text-sm sm:text-base">{label}</span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Content Area - Right Side */}
            <motion.div
              className="lg:w-2/3 p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-white to-indigo-50"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="h-full flex flex-col"
                >
                  <div className="space-y-6">
                    {/* Title with Icon */}
                    <motion.div
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="p-3 bg-indigo-100 rounded-xl">
                        {React.createElement(features[activeFeature].icon, {
                          size: 32,
                          className: "text-indigo-500",
                        })}
                      </div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-700">
                        {features[activeFeature].title}
                      </h2>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      className="text-gray-600 text-lg leading-relaxed border-l-4 border-indigo-200 pl-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {features[activeFeature].description}
                    </motion.p>

                    {/* What We Offer Section */}
                    <motion.div
                      className="pt-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <CheckCircle className="text-slate-700" size={24} />
                        <h3 className="text-xl font-semibold text-slate-700">
                          What We Offer:
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {features[activeFeature].offers.map((offer, index) => {
                          const OfferIcon =
                            offerIcons[index % offerIcons.length];
                          return (
                            <motion.div
                              key={index}
                              className="flex items-center gap-4 p-4 rounded-xl bg-white border border-indigo-100 shadow-sm hover:shadow-md transition-all duration-300 group"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + index * 0.1 }}
                              whileHover={{
                                scale: 1.02,
                                borderColor: "#4f46e5",
                                backgroundColor: "#fafbff",
                              }}
                            >
                              <div className="p-2 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-colors duration-300">
                                <OfferIcon
                                  className="text-indigo-600"
                                  size={20}
                                />
                              </div>
                              <span className="text-gray-700 font-medium">
                                {offer}
                              </span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Mobile Indicator */}
        <motion.div
          className="mt-8 text-center lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-sm text-indigo-600 bg-indigo-50 p-3 rounded-lg border border-indigo-200">
            💡 Tap on features to explore more
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default CompliantProposals;
