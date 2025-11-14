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

function GrantWritingProcess() {

  const cardsData = [
    {
      icon: "Step 01",
      title: "Initial Consultation",
      description:
        "As you start your grant writing journey, we’ll connect you with one of our respondents to discuss your grant type and the program or reason you want it sponsored. We may also send in an information questionnaire to have it filled.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "Step 02",
      title: "Research and Outline",
      description:
        "Depending on the information you’ve sent us regarding your project needs, we’ll start our grant writing services by gathering crucial information to construct our draft. We’ll take care of the research phase to better understand your visions and goals and how they align with the grant holder.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "Step 03",
      title: "Draft Formation",
      description:
        "Once we’ve got all the information in order, our expert grant writers will start constructing the first draft of the proposal. Depending on whether you’re targeting a singular foundation or multiple at once, we’ll align it to your project and foundation’s mission and vision",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "Step 04",
      title: "Draft Approval",
      description:
        "AftOnce we’re done with the first draft, we’ll quickly send it back to you for approval before further refining and finalizing the grant. We want you to remain satisfied with what the grant describes. If not, you can always provide us the valuable feedback to have errors or inconsistencies fixed.",
      color: "from-red-500 to-red-500",
    },
    {
      icon: "Step 05",
      title: "Proofreading and Editing",
      description:
        "When the draft is finalized, we refine your grant proposal to boost persuasion. Here, we remove any inconsistencies, grammatical errors, or spelling typos that may impact your grant quality. Once our expert editors give the green signal, it’s time to send it back.",
      color: "from-yellow-500 to-yellow-500",
    },
    {
      icon: "Step 06",
      title: "Final Delivery",
      description:
        "After the file is finalized, the time comes to deliver the polished grant proposal back to you. Depending on the dedicated timeline we set during the initial consultation, we ensure your project gets delivered on time without any unwanted delays.",
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

        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 mb-4">
         Our Process of {" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Grant Writing Service ?
          </span>{' '}
        </h1>

        <p className="text-sm md:text-md lg:text-lg text-gray-600 max-w-4xl mx-auto mt-10">
          When you consider our professional grant writing services, you’re considering a streamlined process that gets your proposal quickly. Here’s a look at our writing process.
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

export default GrantWritingProcess;
