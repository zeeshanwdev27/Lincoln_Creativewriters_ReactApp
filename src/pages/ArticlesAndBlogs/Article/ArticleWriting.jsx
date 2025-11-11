import { motion } from "framer-motion";
import {
  Star,
  Phone,
  Quote,
  ArrowRight,
  Users,
  CheckCircle,
  Sparkles,
  PenTool,
  MessageCircle,
  Zap,
  Redo,
} from "lucide-react";
import { useState } from "react";

const ArticleWriting = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const userAvatars = [
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    "https://randomuser.me/api/portraits/men/75.jpg",
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-indigo-50/20 to-purple-50/10 pb-20 overflow-hidden relative">
      {/* Animated Background Elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
        className="absolute bottom-40 right-10 w-96 h-96 bg-purple-400/15 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12 text-gray-900 z-10"
      >
        {/* Main Headline */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-20 sm:mt-12 lg:mt-35 max-w-6xl mx-auto"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-bold leading-tight sm:leading-[1.1]"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            Premium{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Article
            </span>
            <span className="pl-3 relative bg-gradient-to-r from-purple-700 to-[#764de1] bg-clip-text text-transparent">
              Writing
              <div className="z-10 absolute bottom-0 left-0 w-full scale-[640px]">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradient_arc.svg"
                  alt="gradient"
                />
              </div>
            </span>
          </motion.h1>

          <motion.div
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mt-5 lg:mt-10"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Services
            </span>
          </motion.div>
        </motion.div>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-md md:text-xl lg:text-2xl text-gray-600 text-center  text-bold max-w-2xl sm:max-w-3xl mt-6 sm:mt-8 leading-relaxed font-light px-4"
        >
          Hire article writers who can provide you with results helping you
          boost your business.
        </motion.p>

        {/* Offer */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 text-lg sm:text-xl lg:text-2xl text-gray-600 text-center max-w-2xl sm:max-w-3xl mt-6 sm:mt-8 leading-relaxed font-light px-4"
        >
          <h1 className="text-red-600 text-2xl md:text-3xl lg:text-4xl font-bold">
            Starting from only
          </h1>

          <div className="flex gap-4 lg:gap-6 items-center">
          <span
          >
            <ArrowRight className="w-7 h-7 md:w-8 md:h-8  lg:w-10 lg:h-10 text-red-600 " />
          </span>

              <motion.p
      className="bg-red-600 text-white px-2 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-1.5 rounded-2xl lg:text-5xl text-3xl font-mono"
      animate={{
        scale: [1, 1.15, 1],
      }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      $10
    </motion.p>

          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          variants={itemVariants}
          className="mt-5 flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20 max-w-md sm:max-w-lg mx-auto"
        >
          <div className="flex -space-x-3">
            {userAvatars.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`user${index + 1}`}
                className="size-8 sm:size-10 object-cover rounded-full border-3 border-white shadow-lg hover:scale-110 transition-transform duration-300"
                style={{ zIndex: 5 - index }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              />
            ))}
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex gap-1">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star className="size-4 sm:size-5 text-amber-400 fill-current" />
                  </motion.div>
                ))}
            </div>
            <p className="text-sm text-gray-600 font-medium mt-1 flex items-center gap-1">
              <Users className="size-4 text-indigo-500" />
              Trusted by{" "}
              <span className="text-indigo-600 font-semibold">1,000+</span>{" "}
              clients
            </p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 mt-8 sm:mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-2xl px-8 py-4 font-semibold shadow-2xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <Phone className="size-5" />
            <span>Consult An Expert</span>
            <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-indigo-200 hover:bg-white text-gray-700 hover:text-gray-900 rounded-2xl px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <Quote className="size-5 text-purple-500" />
            <span>Get Free Quote</span>
            <Zap className="size-4 text-amber-500 group-hover:scale-110 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Signup Form Card */}
        <motion.div
          variants={itemVariants}
          className="mt-16 sm:mt-20 lg:mt-28 w-full max-w-4xl mx-auto px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.8,
            }}
            whileHover={{ scale: 1.02 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-8 lg:p-12"
          >
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-8 lg:mb-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-2 rounded-full border border-indigo-100 mb-4"
              >
                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
                <span className="text-indigo-700 font-semibold text-sm">
                  Limited Time Offer
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4"
              >
                Get Exclusive Writing Discounts
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto"
              >
                Join{" "}
                <span className="text-indigo-600 font-semibold">
                  Lincoln Creative Writers
                </span>{" "}
                and unlock special rates for premium content creation
              </motion.p>
            </motion.div>

            {/* Modern Form */}
            <motion.form
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full space-y-6"
            >
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Full Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                    Full Name
                    <span className="text-red-400">*</span>
                  </label>
                  <div className="relative group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 sm:py-4 rounded-xl border border-gray-200 bg-white focus:border-indigo-400 focus:ring-3 focus:ring-indigo-100 transition-all duration-200 outline-none group-hover:border-indigo-300 shadow-sm"
                      placeholder="Enter your full name"
                      required
                    />
                    <PenTool className="absolute right-3 top-1/2 transform -translate-y-1/2 size-5 text-gray-400 group-focus-within:text-indigo-500" />
                  </div>
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                    Email Address
                    <span className="text-red-400">*</span>
                  </label>
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 sm:py-4 rounded-xl border border-gray-200 bg-white focus:border-indigo-400 focus:ring-3 focus:ring-indigo-100 transition-all duration-200 outline-none group-hover:border-indigo-300 shadow-sm"
                      placeholder="your@email.com"
                      required
                    />
                    <MessageCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 size-5 text-gray-400 group-focus-within:text-indigo-500" />
                  </div>
                </motion.div>

                {/* Phone Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-semibold text-gray-700">
                    Phone Number
                  </label>
                  <div className="relative group">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 sm:py-4 rounded-xl border border-gray-200 bg-white focus:border-indigo-400 focus:ring-3 focus:ring-indigo-100 transition-all duration-200 outline-none group-hover:border-indigo-300 shadow-sm"
                      placeholder="+1 (555) 000-0000"
                    />
                    <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 size-5 text-gray-400 group-focus-within:text-indigo-500" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex justify-center pt-4"
              >
                <button
                  type="submit"
                  className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 sm:py-4 px-8 sm:px-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center"
                >
                  <Sparkles className="size-5 group-hover:rotate-180 transition-transform duration-500" />
                  <span>Claim My Discount</span>
                  <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </motion.div>
            </motion.form>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-gray-500 pt-6 mt-6 border-t border-gray-100"
            >
              {[
                "No credit card required",
                "No commitment",
                "24-hour response",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="size-4 text-green-500" />
                  <span>{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ArticleWriting;
