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

function VideoScriptProcess() {

  const cardsData = [
    {
      icon: "Step 01",
      title: "Initial Consultation",
      description:
        "The beginning of our journey together will start with a friendly chat! We would like you to debrief us about your visions, ideas, and goals. Through this Consultation, we can set the stage for writing a script tailored to your needs.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "Step 02",
      title: "Understanding Your Audience.",
      description:
        "After getting the required information, we consider the next significant aspect of the script- your audience. Who are they? What do they love? Asking these questions helps our talented team to come up with creative ideas that they can use to connect and resonate with the audience.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "Step 03",
      title: "Crafting a Compelling Narrative",
      description:
        "Through out-of-the-box thinking, our creative writers craft a compelling story that has the potential to connect with your audience. They choose every word carefully to ensure the visual story brings the message to life.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "Step 04",
      title: "Review and Feedback",
      description:
        "Once we complete the first draft, it's time to submit it so you can offer us your insightful feedback. Any adjustment you want. Be sure to be specific about them so that we can make it happen.",
      color: "from-red-500 to-red-500",
    },
    {
      icon: "Step 05",
      title: "Finalization",
      description:
        "After receiving your feedback, we'll polish the script to perfection. We'll ensure that the pacing, tone, and overall feel align seamlessly with your vision. Our video script editors will also ensure the script doesn't pose any issues once edited.",
      color: "from-yellow-500 to-yellow-500",
    },
    {
      icon: "Step 06",
      title: "Final Delivery",
      description:
        "Once we're done reviewing and finalizing, congratulations! The final script is ready for delivery. Upon the agreed-upon date of delivery decided in the initial consultation, we'll send the final file so you can start the next step of video creation.",
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
          Steps to Achieve{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            a Great Video Script- Explore the Process of Video Script Writing Services
          </span>{' '}
        </h1>

        <p className="text-sm md:text-md lg:text-lg text-gray-600 max-w-4xl mx-auto">
         Lincoln Creative Writers doesn’t just offer unparalleled video scriptwriting services, but we also provide a quite simple process to help you get what you want. Here is what you can expect when you go for our video script writer for hire.
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

export default VideoScriptProcess;
