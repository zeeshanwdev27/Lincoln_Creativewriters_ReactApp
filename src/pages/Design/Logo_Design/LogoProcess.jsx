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

function LogoProcess() {

  const cardsData = [
    {
      icon: "Step 01",
      title: "Initial Consultation",
      description:
      "From here, the designer will ask you some questions to know about your company's mission statement and vision, as well as your targeted market. Provide what kind of message about your business and its services you wish to transfer through your logo (e.g. reliability, spirit of innovation, amusement, etc.). Here, they also described the project timeline and its cost, as well as the number of revisions included in the service.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "Step 02",
      title: "Research",
      description:
      "The designer will analyze logos of your competitors and industry leaders, identifying design trends and what works well in your niche. Understanding your ideal customer's demographics and design preferences helps create a logo that resonates with them. Staying updated on current design trends and logo styles ensures your logo feels fresh and avoids appearing outdated.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "Step 03",
      title: "Concept Development:",
      description:
      "One possible step that the designer can take is to make a mood board where he will combine the images and the colour schemes that will help to illustrate the general vision of the brand. Engage in preliminary designing of the logo and come up with as many ideas as possible in view of the collected information on possible design directions. The designer develops the most viable ideas into screen images, which provide the feasibility of the logo in a better way.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "Step 04",
      title: "Refinement",
      description:
      "Logo, which will be developed for your project, you will see several options, and in detail, you will give a critique of each one. This includes aspects like: How well do you think the logo design reflects the overall impression of the logo, Convey the brand message of the company, How legible and clear is the logo design you have in mind, choice of colours and their appropriateness to the logo, Typestyle compatibility with the brand. According to your responses, the designer will alter the logo further.",
      color: "from-red-500 to-red-500",
    },
    {
      icon: "Step 05",
      title: "Delivery",
      description:
      "You'll receive the final logo design in various formats suitable for different uses, including Ai and EPS, as the vector formats used for scalability and editing in a design program. Cognitive web and print raster formats with different resolutions, such as PNG and JPG, among others.",
      color: "from-yellow-500 to-yellow-500",
    },
    {
      icon: "Step 06",
      title: "Support",
      description:
      "The designer may be consulted for some changes after the finalizing of the logo especially to fit the use it will be put in. Ask if they can do other related services, such as designing other relevant items like business cards and letterheads that conform to the set brand image.",
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
          Our Process {" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            of Logo Design Service
          </span>{' '}
        </h1>

        <p className="text-sm md:text-md lg:text-lg text-gray-600 max-w-4xl mx-auto">
          Logos are significant elements when it comes to the overall brand image of a particular business. Hiring the services of a good logo designing company in the USA or any qualified logo designer guarantees an appropriate and meaningful logo. Here is our 6-step process for delivering creative and effective logo design companies near me:
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

export default LogoProcess;
