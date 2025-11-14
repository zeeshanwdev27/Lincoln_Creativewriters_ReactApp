import React from "react";
import { Sparkles, FileText, Briefcase , Feather    } from "lucide-react";
import { motion } from "framer-motion";

function BioWritingStrategies() {

  const cardsData = [
    {
      icon: <FileText  className="w-8 h-8" />,
      title: "Short Bios",
      description:
        "These are typically 150-200 words suited for a website's brief bio section. The bio is not suitable for company profiles or bios requiring detailed information from a resume. However, we will work with you to address all your needs.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Feather   className="w-8 h-8" />,
      title: "Creative Bios",
      description:
        "It is usually between 300 and 400 words and requires a phone interview. They are a fit for creative professionals or anyone seeking a bio with a bit of flair and not too much detail. And we can work with anything you give us!",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Briefcase     className="w-8 h-8" />,
      title: "Executive Bios",
      description:
        "They are 300 to 400 words in length and target professionals in executive or C-suite positions. An interview is conducted over the phone. The client may also provide a resume or CV.",
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
            Hire Professional Bio Writing Service
          </span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-5">
          Truly memorable  <br />
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Autobiography Writing Service
          </span>{" "}
        </h1>

        <p className="text-sm md:text-md lg:text-lg text-gray-600 max-w-5xl mx-auto">
         Relay your struggles, hard work, efforts, and achievements to future generations through a memoir that reflects your character. Use our professional biography writing services to launch your career in a positive direction in line with your goals and objectives.
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

export default BioWritingStrategies;
