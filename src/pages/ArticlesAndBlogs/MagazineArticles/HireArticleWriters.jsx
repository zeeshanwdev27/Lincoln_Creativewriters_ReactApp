import React from "react";
import { Award, Globe2, Sparkles, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

function HireArticleWriters() {
  const cardsData = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "High-Quality Content",
      description:
        "Our writers stay head to head with the latest trends and happenings, working tirelessly to produce relevant and quality content to make your magazine stand out, bringing exceptional value to your readers.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "Diverse Perspectives",
      description:
        "We at Lincoln Creative believe in diversity and introducing readers to different perspectives. We have niche-based writers who can generate premium content that provides various voices, allowing a platform to shine.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Powered by Trends",
      description:
        "Our professional writers always stay ahead of the curve by actively following the latest trends and industry developments, ensuring the content produced is always fresh, relevant, and appealing.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBackground.png)]">
      {/* Header Section */}
      <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-linear-to-r from-indigo-50 to-purple-50 px-4 py-2 rounded-full border border-indigo-100 mb-6"
        >
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span className="text-indigo-700 font-semibold text-sm">
            Partner with the Best Team
          </span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          Hire {" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Article Writers
          </span>{" "}
          <span>Who Can Set New Industry Standards</span>
        </h1>

        <p className="text-sm md:text-md lg:text-lg text-gray-600 max-w-2xl mx-auto">
          Lincoln Creative Writers has the most professional magazine writers in the industry, with unparalleled expertise and a knack for crafting captivating content that keeps your readers engaged and informed.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 w-full max-w-7xl">
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
              transition: { duration: 0.2 },
            }}
            className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 p-6 sm:p-8 flex flex-col gap-6 transition-all duration-300"
          >
            {/* Background Gradient Effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}
            />

            {/* Icon */}
            <div
              className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${data.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300 w-fit`}
            >
              {data.icon}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4 flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                {data.title}
              </h3>

              <p className="text-gray-600 leading-relaxed flex-1">
                {data.description}
              </p>
            </div>

            {/* Hover Border Effect */}
            <div
              className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${data.color} bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
            >
              <div className="rounded-3xl bg-white w-full h-full" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default HireArticleWriters;
