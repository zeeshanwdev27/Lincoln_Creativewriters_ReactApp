import React from "react";
import {
Sparkles 
} from "lucide-react";
import { motion } from "framer-motion";

function WebdesignDevProcess() {

  const cardsData = [
    {
      icon: "Step 01",
      title: "Initial Consultation and Site Audit",
      description:
        "The first thing that we do is discuss with you about your business needs and the audience to target. Next, we analyze your website for broken links, errors, and anything else that needs to be fixed or upgraded. Technical SEO audit, On-Page optimization, Current rankings are all considered by team to set a parameter for the website.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "Step 02",
      title: "Keyword Research",
      description:
        "Optimization of the website begins from the proper identification of the keywords. We do keyword research to find out the terms and tags you or your potential buyers are likely to type. These are the short- and long-tail keywords appropriate to the particular industry, with the aim of hitting the most profitable keywords for the business.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "Step 03",
      title: "On-Page Optimization",
      description:
        "Our specialists adjust the positions of the selected keywords in the title tags, meta descriptions, headers and the main content. We also ensure the structure of your site, internal linking and URLs are SEO-friendly to improve the end users’ experience.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "Step 04",
      title: "Content Creation and Optimization",
      description:
        "Professional writing is provided and our task is to produce content that reflects your tone and is entertaining and instructive. Our content plans cover the posts, articles, and other types of content to engage the clients and prolong their stay while increasing the percent of visibility in SERP.",
      color: "from-red-500 to-red-500",
    },
    {
      icon: "Step 05",
      title: "Link Building",
      description:
        "Using effective methods of link building it is possible to get only the necessary and valuable links from the sites of your market niche. This increases the website’s credibility, attracts the right traffic and culminates in better rankings on the search engines.",
      color: "from-yellow-500 to-yellow-500",
    },
    {
      icon: "Step 06",
      title: "Ongoing Monitoring and Reporting",
      description:
        "Search engine optimization is a process that should be checked regularly and its execution amended from time to time. Therefore, we are alert to provide you daily/weekly or monthly reports on your site’s status, ranking, traffic, and lead/conversion rate. We work on your Internet marketing strategy as a team and are dedicated to constantly adapting and improving your SEO plan and results for lasting advancement and achievement.",
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
          Our{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            SEO Services Process
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

export default WebdesignDevProcess;
