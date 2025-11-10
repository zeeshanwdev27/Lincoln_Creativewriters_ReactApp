import React from "react";
import { motion } from "framer-motion";
import { 
  Crown, 
  Users, 
  Sparkles, 
  DollarSign, 
  Clock, 
  Heart,
  ArrowRight
} from "lucide-react";

function WritingServicesSteps() {
  const steps = [
    {
      title: "Complete Ownership",
      description:
        "Whether a grant, video script, or autobiography, once you hire our creative content writing professionals, we'll deliver your content without claiming any copyright.",
      icon: Crown,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    },
    {
      title: "Writing Experts",
      description:
        "Our creative writing agency doesn't just house writers but a plethora of experts, from writers to editors and designers. We'll be sure to provide quality content as per your requirements.",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: "100% Original",
      description:
        "We ensure everything we provide is 100% original and top-quality. That's the reason we provide a compliance report with each project to ensure the authenticity of our work.",
      icon: Sparkles,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      title: "Cost-Effectiveness",
      description:
        "Although looking for top-quality services can be expensive, we ensure that our rates are market-competitive and affordable.",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      title: "Prompt Delivery",
      description:
        "We take deadlines quite seriously. We ensure that our online creative writing services are of top-notch quality and quick. This is why we keep you in the loop and ensure timely project delivery.",
      icon: Clock,
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      title: "Satisfaction Guaranteed",
      description:
        "Customer satisfaction is our top priority. We want to ensure that our clients are satisfied in every step of the project journey, from writing to proofreading and delivery.",
      icon: Heart,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

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
    <div className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBackground.png)]">
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
      <motion.div 
        className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
        >
          <ArrowRight className="w-4 h-4" />
          Premium Writing Experience
        </motion.div>

        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
          What to Expect When You
        </h3>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
          Choose Our Creative Writing Services
        </h1>
      </motion.div>

      {/* Steps Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover="hover"
       
            className={`relative group p-6 sm:p-8 rounded-2xl ${step.bgColor} border ${step.borderColor} backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300`}
          >
            {/* Step Number */}
            <div className="absolute -top-3 -left-3 w-8 h-8 sm:w-10 sm:h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-md">
              <span className="text-sm sm:text-base font-bold text-slate-700">
                {index + 1}
              </span>
            </div>

            {/* Gradient Overlay */}
            <div className={`absolute inset-0 rounded-2xl bg-linear-to-r ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

            {/* Icon */}
            <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-linear-to-r ${step.color} text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <step.icon size={24} className="sm:w-6 sm:h-6" />
            </div>

            {/* Content */}
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">
              {step.title}
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {step.description}
            </p>

            {/* Hover Indicator */}
            <div className={`absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r ${step.color} group-hover:w-full transition-all duration-500 rounded-full`} />
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      {/* <motion.div 
        className="text-center mt-12 sm:mt-16 lg:mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base">
          Start Your Writing Project
        </button>
        
      </motion.div> */}
    </div>
  );
}

export default WritingServicesSteps;