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

function BusinessProposalProcess() {

  const cardsData = [
    {
      icon: "Step 01",
      title: "Initial Consultation",
      description:
        "In this regard, we meet with our clients to understand their goals, requirements and target market. In this meeting we identify specific data and aspects crucial to personalizing our strategies for the client's needs.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "Step 02",
      title: "Research and Analysis:",
      description:
        "Our team thoroughly researches and analyzes our clients' business and their markets. This helps us identify trends, risks, and opportunities to develop our proposed strategy",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "Step 03",
      title: "Strategy Development:",
      description:
        "Under the subsidies study, we unveil the guidelines for preparing a good business pitch. This constitutes determining and stating the framework, the messages and the proposition that the client has to offer.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "Step 04",
      title: "Content Creation:",
      description:
        "Having a clear direction on what needs to be done, our professional writers compose the business proposal's content. We use word choice, appealing graphics, and business vertical keywords to target the point of interest in the intended audience.",
      color: "from-red-500 to-red-500",
    },
    {
      icon: "Step 05",
      title: "Revisions and Refinement:",
      description:
        "After that, we submit our first draft and engage the client so that they can provide feedback and make changes, if any. We make sure that the proposal is as closely related as possible to the targeted audience's vision, goals, and brand, making adjustments as needed.",
      color: "from-yellow-500 to-yellow-500",
    },
    {
      icon: "Step 06",
      title: "Finalization and Delivery:",
      description:
        "Once we have gathered feedback and revised it to the last detail, the business proposal is ready to be presented. Whether it be a document on the computer screen, PowerPoint, or a tangible-looking booklet, its output is continually refined, professional, and neat.",
      color: "from-gray-500 to-gray-500",
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
           Our Writing Process
          </span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 mb-4">
         Our Process of{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Providing Business Proposal Writing Services
          </span>{' '}
        </h1>

        <p className="text-sm md:text-md lg:text-lg text-gray-600 max-w-4xl mx-auto mt-10">
          Writing a good business proposal is a challenging task that involves simple strategy, good writing skills and observation. Well, that is precisely where our company comes in: as a business proposal writing service, we strive to assist clients in expressing the key reasons behind their business and seizing worthy prospects. Here's how we provide our business proposal services:
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

export default BusinessProposalProcess;
