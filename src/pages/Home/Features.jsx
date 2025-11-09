import React from "react";
import { motion } from "framer-motion";
import { Shield, Search, Target, Sparkles, Check } from "lucide-react";

function Features() {
  const content = [
    {
      title: "Plagiarism Free Content",
      description:
        "At Lincoln Creative Writers, we pride ourselves on delivering content that's as unique as your thumbprint. Our team of creative writing professionals ensures that every word is freshly crafted, waving goodbye to the land of copy-paste. With us, you're not just getting a writing service – you're diving into the realm of authentic storytelling.",
      icon: Shield,
    },
    {
      title: "Diving Deep into Research",
      description:
        "Ever heard of writing that's like a well-baked pie? That's us, but with research. Our dedicated crew at this creative writing agency doesn't just skim the surface – we plunge into the depths of information oceans to craft content that's rich, well-informed, and utterly fascinating.",
      icon: Search,
    },
    {
      title: "Your Goals, Our Words",
      description:
        "Your vision is our mission. We're not just another creative writing company; we're the co-pilots on your journey to success. Our goal-oriented writing doesn't just fill pages; it propels you towards your objectives. From Lincoln marketing agency projects to creative content writing services in the USA, we're here to infuse purpose into every syllable.",
      icon: Target,
    },
    {
      title: "Style that Spells Uniqueness",
      description:
        "cookie-cutter prose or clichés here. At our creative writing agency, we embrace individuality, blending creativity with expression. When you choose Lincoln Creative Writers, you're stepping into a realm where words don't just tell a story – they dance, they paint, they captivate.",
      icon: Sparkles,
    },
  ];

  const notConvienceData = [
    {
      title: "Plagiarism Free Content",
      description:
        "We believe in complete originality, which is why we don't promote or work with generic AI tools to create content. We ensure our content is made with humans, by humans, and for humans.",
    },
    {
      title: "Extensive Research",
      description:
        "We don't just skim the surface. Our dedicated crew at this creative writing agency plunges deep into the information ocean to create content that is rich, well-informed, and fascinating.",
    },
    {
      title: "Quality Over Quantity",
      description:
        "If you look at some creative content writing services in the US, you'll notice that they go for creating volumes upon volumes of content, but with no value. But not us; we believe quality goes way beyond quantity.",
    },
    {
      title: "Unique Style",
      description:
        "At our Lincoln marketing agency, we believe every writer has something to bring to the table. Our experts all hold immense talent, and they can create content that not only satisfies but excels.",
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-white via-indigo-50/20 to-purple-50/10 overflow-hidden relative">
      {/* Animated Background Elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-indigo-500/20 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
        className="absolute bottom-20 sm:bottom-40 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-400/15 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
        className="absolute top-1/2 left-1/4 sm:left-1/3 w-40 h-40 sm:w-64 sm:h-64 bg-blue-400/10 rounded-full blur-3xl"
      />

      {/* Header - Keeping your exact content */}
      <motion.div
        className="flex flex-col gap-4 sm:gap-6 text-center max-w-4xl mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-indigo-500 text-lg sm:text-xl md:text-[20px] font-bold px-4">
          Here Are A Few Reasons Why You Should Choose Us As Your Creative
          Marketing Agency.
        </h3>

        <h1 className="text-slate-700 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-4">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Secret Features
          </span>{" "}
          of Our Creative Content Writing Services
        </h1>
      </motion.div>

      {/* Features Grid - Responsive layout */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl w-full mb-16 sm:mb-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {content.map((data, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="border border-indigo-200 p-4 sm:p-6 lg:p-8 flex flex-col gap-3 sm:gap-4 rounded-xl sm:rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-1 sm:mb-2">
              <div className="p-2 sm:p-3 bg-indigo-100 rounded-lg sm:rounded-xl text-indigo-600">
                <data.icon size={20} className="sm:w-6 sm:h-6" />
              </div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800">
                {data.title}
              </h1>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              {data.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Still Not Convienced Section */}
      <motion.div
        className="mt-12 sm:mt-16 lg:mt-20 max-w-6xl text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-700 font-semibold mb-8 sm:mb-12">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Still Not Convinced?
          </span>{" "}
          Let the Secret Features{" "}
          <span className="font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent block sm:inline mt-2 sm:mt-0">
            of Our Creative Writing Agency Change Your Mind
          </span>
        </h1>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {notConvienceData.map((data, index) => (
            <motion.div
              key={index}
              variants={listItemVariants}
              className="border border-gray-200 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h1 className="text-base sm:text-lg lg:text-xl font-bold text-slate-800 mb-3 sm:mb-4">
                {data.title}
              </h1>
              <div className="flex gap-2 sm:gap-3 items-start">
                <Check className="text-red-600 w-4 h-4 sm:w-5 sm:h-5 mt-1 shrink-0 font-bold" />
                <p className="text-sm sm:text-base text-slate-700 text-left">
                  {data.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Features;
