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

function WebsiteProcess() {

  const cardsData = [
    {
      icon: "Step 01",
      title: "Initial Consultation and Analysis",
      description:
      "The first step in our web redesign process involves a site review where we assess the effectiveness and weaknesses of your current website and the improvements that you hope to achieve. While analyzing your current website, we focus on the visual style and layout, the content, and the ease of usage. That is beneficial to determine where we possibly can advance and also to get the most of your experience.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "Step 02",
      title: "Strategy and Planning",
      description:
      "After we are done with our consultation and analysis to determine what changes your website needs, we shall then develop the overall strategic model and actionable plan to breathe new life into your website’s aesthetic. Before entering into the redesign phase, it is crucial to determine specific goals and objectives for the new design initiative, as well as the scope and time frame of the project. Our plan must also reflect your general business objectives as well as any concerns that were raised during the planning phase.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "Step 03",
      title: "Design Mock-ups and Prototypes",
      description:
      "After the strategic decision is made our design team develops mock-ups of the ideas and further physical prototypes. These mockups are related to the topic and present a new design aim, which concerns increasing the esthetic appeal, making it more functional throughout the UI and UX perspectives. Here, you get to look at and approve the designs presented to you on these concepts before we produce the final work.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "Step 04",
      title: "Development and Implementation",
      description:
      "Once the design is set, our skilled development team will not hesitate a second and start creating the new look in your website. This includes coding the new layout, incorporating new features, and testing to determine if everything is working properly. When designing for the web, we always pay extra attention to make sure that your site is ‘mobile friendly’, meaning that its look and feel is excellent and will function without any hitch on any device.",
      color: "from-red-500 to-red-500",
    },
    {
      icon: "Step 05",
      title: "Testing and Quality Assurance",
      description:
      "Before launching the redesigned website, we conduct extensive testing and quality assurance. This involves whether there are any glitches, whether all buttons and options are fully functioning, and whether the site is responsive across Internet browsers and Equipment. Here, the goal would be to deliver a perfect website that functions perfectly without any glitch or hindrance.",
      color: "from-yellow-500 to-yellow-500",
    },
    {
      icon: "Step 06",
      title: "Launch and Ongoing Support",
      description:
      "After successful testing, we will launch your redesigned website, making it available to your audience. Count on us for continuous support and maintenance to keep your website perform at its best. Our team is available for further enhancements and technical support.",
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
          Professional Web Redesign Services:  {" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Our Six-Step Process
          </span>{' '}
        </h1>

        <p className="text-sm md:text-md lg:text-lg text-gray-600 max-w-4xl mx-auto">
           Web redesign services mean that your website will remain up to date in regards to design and features which will be beneficial for your organization and its users. Here is the six step blueprint of how we are able to provide the best web redesign services:
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

export default WebsiteProcess;
