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

function WikipediaWritingProcess() {

  const cardsData = [
    {
      icon: "Step 01",
      title: "Initial Consultation and Research",
      description:
        "Our Wikipedia writing process begins with an initial consultation to understand your objectives and gather essential information about the subject. We conduct comprehensive research to collect reliable sources and references, ensuring our content is well-supported and verifiable.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "Step 02",
      title: "Content Planning and Outline",
      description:
        "We develop a detailed content plan and outline for your Wikipedia page based on the information gathered. This includes structuring the page into appropriate sections, such as the introduction, history, notable achievements, and references. We ensure that the outline adheres to Wikipedia's content guidelines and standards.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "Step 03",
      title: "Drafting the Content",
      description:
        "Our experienced writers then begin drafting the content for your Wikipedia page. We focus on creating neutral, well-written, and factually accurate content. Credible sources back each statement, and we maintain a neutral point of view to comply with Wikipedia's strict editorial standards.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "Step 04",
      title: "Review and Revisions",
      description:
        "After completing the initial draft, we thoroughly review the content to ensure accuracy, clarity, and compliance with Wikipedia guidelines. We will then share the draft with you for feedback and make any necessary revisions. We work together to ensure the final content meets your expectations and follows Wikipedia's standards.",
      color: "from-red-500 to-red-500",
    },
    {
      icon: "Step 05",
      title: "Submission and Formatting",
      description:
        "After finalizing the content, we format the page according to Wikipedia's requirements and submit it for publication. This includes adding proper citations, internal links, and categories to enhance the page's credibility and discoverability. We ensure the submission process is smooth and compliant with Wikipedia's procedures",
      color: "from-yellow-500 to-yellow-500",
    },
    {
      icon: "Step 06",
      title: "Monitoring and Maintenance",
      description:
        "After the page is published, we offer ongoing monitoring and maintenance services. This includes regularly checking for updates, managing edits, and ensuring the page remains accurate and up-to-date. Our team is available to address any issues and make necessary updates.",
      color: "from-gray-500 to-gray-500",
    },
  ];


  return (
    <div className="flex flex-col items-center w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBackground.png)]">

      {/* Header Section */}
      <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-linear-to-r from-indigo-50 to-purple-50 px-4 py-2 rounded-full border border-indigo-100 mb-6"
        >
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span className="text-indigo-700 font-semibold text-sm">
           Our Process
          </span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-7">
          Our Comprehensive Process{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            of Wikipedia Writing Services
          </span>{' '}
        </h1>

        <p className="text-sm md:text-md lg:text-lg text-gray-600 max-w-4xl mx-auto">
        Creating a well-crafted and reliable Wikipedia page requires expertise and a thorough understanding of Wikipedia's guidelines and standards. Our Wikipedia writing services ensure that your page is accurate, well-researched, and compliant with Wikipedia’s rules.
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

export default WikipediaWritingProcess;
