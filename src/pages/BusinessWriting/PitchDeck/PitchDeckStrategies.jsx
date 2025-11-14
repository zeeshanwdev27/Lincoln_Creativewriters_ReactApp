import React from "react";
import { Sparkles, FileCheck, Rocket    } from "lucide-react";
import { motion } from "framer-motion";

function PitchDeckStrategies() {
  const cardsData = [
    {
      icon: <Sparkles  className="w-8 h-8" />,
      title: "Well-Designed Decks",
      description:
        "We craft professional-looking decks that instantly convey to the investors that the founders are well-aware of what goes into their business.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FileCheck  className="w-8 h-8" />,
      title: "Error-Free Pitches",
      description:
        "Our pitch deck writers are known for presenting relevant information concisely, engagingly, and with a significant degree of flow and cohesion",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Rocket    className="w-8 h-8" />,
      title: "The Extra Mile",
      description:
        "Our pitch deck designers supplement clients with additional material that makes the presentation more straightforward, easy to digest, and succinct.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBackground.png)]">
      {/* Header Section */}
      <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-linear-to-r from-indigo-50 to-purple-50 px-4 py-2 rounded-full border border-indigo-100 mb-6"
        >
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span className="text-indigo-700 font-semibold text-sm">
            Avail Pitch Deck Consulting Services
          </span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          The Staple of {" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Modern Venture Capitalists
          </span>{" "}
        </h1>

        <p className="text-sm md:text-md lg:text-lg text-gray-600 max-w-6xl mx-auto">
          A pitch deck, when implemented correctly, acts as an invaluable asset for a business’s development as it breaks new paths for securing third-party funding. The clearer the goals, the easier it’s to persuade the audience.
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

export default PitchDeckStrategies;
