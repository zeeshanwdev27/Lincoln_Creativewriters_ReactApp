import React from "react";
import {
ChartNoAxesCombined ,
ClockArrowUp ,
ClockCheck ,
Smartphone ,
Handshake ,
ThumbsUp ,
Sparkles 
} from "lucide-react";
import { motion } from "framer-motion";

function OurSixSteps() {

  const cardsData = [
    {
      icon: "Step 01",
      title: "Initial Consultation and Project Assessment",
      description:
        "Our audiobook creation process begins with an initial consultation to understand your book, your goals, and any specific requirements you may have. We assess the project's scope, including the book's length, the desired narration style, and any special instructions. To better meet your unique needs.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "Step 02",
      title: "Narrator Selection and Script Preparation",
      description:
        "Based on the initial consultation, we help you select the perfect narrator for your audiobook. We have a diverse roster of professional voice actors with various styles and tones to match your book’s genre and mood. Concurrently, we prepare the script for narration, ensuring it is formatted correctly for a smooth recording process.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "Step 03",
      title: "Recording and Production",
      description:
        "We move on to the recording phase once the script is ready and the narrator is selected. Our experienced narrators record the audiobook in a professional studio to ensure high- quality sound. We focus on tone, pacing, and clarity during this process to deliver an engaging listening experience.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "Step 04",
      title: "Editing and Post-Production",
      description:
        "After recording, our audio engineers meticulously edit the audio files. This involves removing errors, adjusting volume levels, and enhancing sound quality. We also add any necessary effects or background music to enhance the storytelling experience. The goal is to produce a polished and professional final product.",
      color: "from-red-500 to-red-500",
    },
    {
      icon: "Step 05",
      title: "Quality Assurance and Approval",
      description:
        "Before finalizing the audiobook, we conduct thorough quality assurance checks. This includes reviewing the audiobook for consistency, clarity, and overall quality. We provide a preview of the finished product for your approval, allowing you to request any last-minute adjustments or corrections.",
      color: "from-yellow-500 to-yellow-500",
    },
    {
      icon: "Step 06",
      title: "Distribution and Marketing Support",
      description:
        "Once approved, we assist you with distributing your audiobook across various platforms such as Audible, iTunes, and other major audiobook retailers. We also offer marketing support to help promote your audiobook and reach a wider audience. Our team is available to provide ongoing support and ensure your audiobook achieves maximum success.",
      color: "from-gray-500 to-gray-500",
    },
  ];


  return (
    <div className="flex flex-col items-center w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBackground.png)]">

      {/* Header Section */}
      <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-linear-to-r from-indigo-50 to-purple-50 px-4 py-2 rounded-full border border-indigo-100 mb-6"
        >
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span className="text-indigo-700 font-semibold text-sm">
           Our Writing Process
          </span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
         Our Six-Step Process of{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Professional Audiobook Services
          </span>{' '}
        </h1>

        <p className="mt-5 text-sm md:text-md lg:text-lg text-gray-600 max-w-5xl mx-auto">
          In the rapidly growing world of audiobooks, having a high-quality recording of your book can significantly expand your audience's reach. Our professional audiobook services are designed to deliver clear, engaging, and professionally produced audiobooks that captivate listeners. Here's an overview of our six-step process for creating top-notch audiobooks.
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

export default OurSixSteps;
