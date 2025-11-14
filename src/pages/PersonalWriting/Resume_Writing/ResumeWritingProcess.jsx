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

function ResumeWritingProcess() {

  const cardsData = [
    {
      icon: "Step 01",
      title: "Initial Consultation",
      description:
        "We start with a comprehensive consultation to understand your career goals, experiences, and achievements. This step involves discussing your current resume (if you have one), job descriptions for positions you are interested in, and any specific points you want to highlight.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "Step 02",
      title: "Information Gathering",
      description:
        "We ask you to provide detailed information about your work history, education, certifications, skills, and any notable accomplishments. This can include filling out a questionnaire or having an in-depth conversation with your dedicated resume writer to gather all relevant details.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "Step 03",
      title: "Resume Drafting",
      description:
        "Our certified resume writers craft a personalized resume based on the information provided. They focus on highlighting your strengths, accomplishments, and the skills most relevant to your desired job. Keywords and phrases tailored to pass applicant tracking systems (ATS) are strategically included.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "Step 04",
      title: "Review and Feedback",
      description:
        "Once the initial draft is ready, we send it to you for review. This is your opportunity to provide feedback, request changes, and ensure all details accurately reflect your experience and career aspirations. We value your input and collaborate with you to refine the document.",
      color: "from-red-500 to-red-500",
    },
    {
      icon: "Step 05",
      title: "Revisions and Finalization",
      description:
        "We make any necessary revisions based on your feedback to perfect the resume. Our goal is to ensure you are completely satisfied with the final product. We polish the content, format, and layout to create a professional, visually appealing resume.",
      color: "from-yellow-500 to-yellow-500",
    },
    {
      icon: "Step 06",
      title: "Final Delivery",
      description:
        "The final resume is delivered to you in both MS Word and PDF formats. This allows for easy editing and submission through various application channels. We ensure the resume is ready for you to confidently apply to job opportunities, showcasing your qualifications effectively.",
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
          Our Resume{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Writing Service Process
          </span>{' '}
        </h1>

        <p className="text-sm md:text-md lg:text-lg text-gray-600 max-w-4xl mx-auto">
        So, Lincoln Creative Writers is the space where your life story comes to life! Step into the journey of crafting your autobiography with us. With the help of your autobiography writer, here is how we do it.
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

export default ResumeWritingProcess;
