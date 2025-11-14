import React from "react";
import {
Sparkles 
} from "lucide-react";
import { motion } from "framer-motion";

function ProductDescriptionProcess() {

  const cardsData = [
    {
      icon: "Step 01",
      title: "Initial Consultation",
      description:
        "Your first step in the production description process is meeting with our respondents via virtual meeting. Here, we take the time to learn the aim you wish to accomplish via production description services. We'll also send over a proposal outlining the scope and pricing of the service for you to accept.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "Step 02",
      title: "Research and Analysis",
      description:
        "Once you accept our proposal, our dedicated staff will learn more about the product you're offering. They'll use extensive research practices to unravel more information about the listed product items. In addition, they’ll also analyze each to learn the specific features and benefits they have to offer.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "Step 03",
      title: "Content Strategy Development",
      description:
        "We don't just write- we strategize. Next, we develop the content strategy, which involves forming the structure and identifying key elements to consider in the product description. Through content strategy development, we determine the language, tone, style, and SEO considerations to provide a description that will boost your online business.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "Step 04",
      title: "Drafting and Review",
      description:
        "With the strategy in place, our dedicated SEO product description writing service team prepares the initial draft. When writing the initial description copy for the products, we consider the already planned elements, including language and tone style. At the same time, internal reviews are conducted to ensure your satisfaction.",
      color: "from-red-500 to-red-500",
    },
    {
      icon: "Step 05",
      title: "Client Feedback",
      description:
        "We believe in collaboration. If you have any concerns during the review phase, you can always provide us with constructive Feedback regarding what you want to improve. Your satisfaction is our top priority, which is why our product description writing service exceeds your expectations.",
      color: "from-yellow-500 to-yellow-500",
    },
    {
      icon: "Step 06",
      title: "Final Delivery",
      description:
        "Once we complete our product description, we'll deliver it based on the agreed-upon deadline. We provide the finalized product description in the preferred format. You can take the time to review them and send them back to us if you have any concerns or minor changes that require editing.",
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
          How Our Product{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Descriptions Writers Work?
          </span>{' '}
        </h1>

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

export default ProductDescriptionProcess;
