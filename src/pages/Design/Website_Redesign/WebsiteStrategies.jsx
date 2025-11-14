import React from "react";
import { Sparkles, Layout, Image , Activity    } from "lucide-react";
import { motion } from "framer-motion";

function WebsiteStrategies() {

  const cardsData = [
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Intuitive Navigation and Clean Layout for All Devices",
      description:
        "The clean and minimalist layouts of the templates make your website work on any device and aggregate sensitive touch to screens of every possible size. Your visitors will not only be able to navigate through your site on a PC, but mobile users will also have an equally fluid experience too. The established layout is sufficiently ideal for the clear and concise division of online space and the structuring of complex navigation, leading the user to the needed section without unnecessary confusion. Each element that is used consistently makes the user experience better and helps you establish your brand or make the website easily identifiable.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Image  className="w-8 h-8" />,
      title: "Modern Visuals Incorporating Your Latest Branding",
      description:
        "Our design concept entails the aim of using procurement and fresh, bright colors that not only get the attention of the viewers but incorporate your updated branding features on your products. High-quality graphics, images, and animations are completed in accordance with your present color scheme, typefaces, and hues, making your brand consistent and appealing on all media channels. No matter what, your website is optimized for and earmarked for desktop or mobile as all the cues given off by it scream professional and genuine as soon as the visitor gets a look in.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Interactive Content Highlighting Your Offerings",
      description:
        "Enhance the UI and user interaction together with inviting advertisements that will suit your business well. Those visually appealing and unobtrusive calls to action that are placed at the desired positions entice the visitors to perform certain actions like purchasing a product, subscribing to a magazine, or getting a quote. Moreover, by utilizing intrinsic filters, visitors can easily select certain criteria in order to get only the desired results and spend minimum time searching.",
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
            Is It Time to Refresh Your Website, but Don't Have the Budget for A Full Redesign?
          </span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-5">
          Affordable Website    <br />
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Redesigns to Transform Your Online Presence
          </span>{" "}
        </h1>

        <p className="text-sm md:text-md lg:text-lg text-gray-600 max-w-5xl mx-auto">
            Let Us Handle Your Redesign from Start to Finish. Our Solutions Are Proven to Strengthen Conversion and Increase Long-Term Customer Loyalty.
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

export default WebsiteStrategies;
