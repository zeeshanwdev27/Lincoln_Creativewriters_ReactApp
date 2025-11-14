import React from "react";
import { Sparkles,  Clock , RefreshCw, Sliders, Palette, UserCheck    } from "lucide-react";
import { motion } from "framer-motion";

function EbookStrategies() {

  const cardsData = [
    {
      icon: <Sliders className="w-8 h-8" />,
      title: "Over-The-Top Customization",
      description:
        "Our eBook designers believe there’s much more in an eBook than a story. In our words, it’s crucial to have a compelling and tailored design that comprises all the elements that make your book stand out. That’s why we offer over-the-top customization options for you to turn your ebook into an aesthetic piece of art.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Palette   className="w-8 h-8" />,
      title: "Designs That Matter",
      description:
        "We understand that cover designs can play a key role in making your book stand out from the competition. This is why our trained eBook cover designers develop stunning designs that resonate with the eBook's content. We ensure to incorporate all the elements that can intrigue your targeted audience into reading your book.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Professional Designers",
      description:
        "We know how it feels to write an ebook with all your heart, only to be let down by a sloppy ebook cover design. But luckily, with Lincoln Creative, you don’t have to worry about that. We are home to professional designers who can develop covers from scratch. We create attractive ebook covers that add immense value to your book.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Countless Revisions",
      description:
        "Our dream at Lincoln Creative Writers is to enforce perfection in our work. This drives us to offer you endless eBook cover design revisions so you get what you need without any hassle. Our skillful designers are always happy to guide you and do the necessary to deliver the designs according to your demands",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Around the Clock Consultancy",
      description:
        "Questions can erupt in minds at any time of the day. And we are glad to consultant you through the ebook cover design process under the supervision of our industry experts. Our professional team will help you find the right answers to your question, ensuring timely deliveries and a sense of satisfaction.",
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
            Hire Professional Ebook Writing Service
          </span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-5">
          Custom EBook {" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Covers Powered by Visual Brilliance
          </span>
        </h1>

        <p className="text-sm md:text-md lg:text-lg text-gray-600 max-w-5xl mx-auto">
         Our award-winning cover designers can help you craft visually moving ebook covers that connect with your work offering readers an intriguing insight into what they expect from your book.
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

export default EbookStrategies;
