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

function BusinessPlanProcess() {

  const cardsData = [
    {
      icon: "Step 01",
      title: "Initial Discussion",
      description:
        "As you start your business plan writing journey, we first take the time to connect with you. Our respondents contact you to learn more about your business venture. Here we want you to tell us everything about your plan. The more specific, the better.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "Step 02",
      title: "Signing the Contract",
      description:
        "Next, we consult you regarding the deadlines and project estimates. Once you make a contract with our creative agency business plan, our dedicated staff gets to work. Depending on the project, we may send over a questionnaire for more information.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "Step 03",
      title: "Filling Out the Questionnaire",
      description:
        "The questionnaire is sent to our clients to help us learn more about the business venture. You may want to ensure that you fill it out completely. The questionnaire offers valuable insight into our business venture that will help with writing business plans.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "Step 04",
      title: "Collaborate with Designing",
      description:
        "While our expert writers are taking care of your business plan writing, we’ll want you to collaborate on choosing the design and color scheme of the business plan. We’ll show you an extensive range of color schemes from which you can choose.",
      color: "from-red-500 to-red-500",
    },
    {
      icon: "Step 05",
      title: "Draft Approval",
      description:
        "Once we’re done with the first draft, we’ll send it back to you for approval. Don’t consider it the end of our business plan writing services. The first draft is only a rough presentation of what your plan will appear like. Once you give the OK, we’ll start working on polishing it.",
      color: "from-yellow-500 to-yellow-500",
    },
    {
      icon: "Step 06",
      title: "Revisions and Final Delivery",
      description:
        "Depending on your feedback, we’ll work on making any revisions if necessary. Once done, our skilled editors start the proofreading process to ensure the business plan is flawless. After completing it, we deliver the final polished business plan to you.",
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
         Our {" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Business Plan Writing Service Process
          </span>{' '}
        </h1>

        <p className="text-sm md:text-md lg:text-lg text-gray-600 max-w-4xl mx-auto mt-10">
          Lincoln Creative Writers is your answer to professional business plan writing servicesnear me. Here’s how we take care of your project if you collaborate with us:
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

export default BusinessPlanProcess;
