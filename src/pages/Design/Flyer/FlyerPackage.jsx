import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from 'lucide-react';

function FlyerPackage() {
  const [activeTab, setActiveTab] = useState("basic");

  const packageData = {
    basic: [
      {
        package: "1 Page Flyer for Web",
        noOfArticles: `With Design`,
        price: "$199",
      },
      {
        package: "1 Page Flyer for Print",
        noOfArticles: `With Design`,
        price: "$299",
      },
      {
        package: "1 Page Flyer for Content",
        noOfArticles: `300 Words`,
        price: "$99",
      },
    ]
  };

  const currentPackages = packageData[activeTab];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const tableRowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <div className=" bg-gradient-to-br from-indigo-50 to-white py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-2xl sm:text-3xl font-semibold text-indigo-600 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Have a Limited Budget?
          </motion.h2>
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Choose Package That Fits Your Project
          </motion.h1>
          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            We have seasoned creative writers on board who are capable of offering
            services for a wide range of writing projects.
          </motion.p>
        </motion.div>



        {/* Table Container */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden border border-indigo-200"
        >
          {/* Table Header - Hidden on mobile */}
          <div className="hidden md:flex bg-indigo-500 text-white font-semibold">
            <div className="flex-1 p-4 border-r border-indigo-400">Type of Flyer</div>
            <div className="flex-1 p-4 border-r border-indigo-400">Design/Words</div>
            <div className="flex-1 p-4 border-r border-indigo-400">Price</div>
            <div className="flex-1 p-4">Order</div>
          </div>


          {/* Table Body */}
          <div className="divide-y divide-indigo-100">
            <AnimatePresence mode="wait">
              {currentPackages.map((data, index) => (
                <motion.div
                  key={`${activeTab}-${index}`}
                  variants={tableRowVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  custom={index}
                  className={`${
                    index % 2 === 0 ? 'bg-indigo-50' : 'bg-white'
                  } hover:bg-indigo-100 transition-colors duration-200`}
                >
                  {/* Desktop View */}
                  <div className="hidden md:flex">
                    {/* Package Name */}
                    <div className="flex-1 p-4 border-r border-indigo-200 font-medium text-gray-900">
                      {data.package}
                    </div>

                    {/* No. of Articles */}
                    <div className="flex-1 p-4 border-r border-indigo-200 text-gray-700">
                      {data.noOfArticles}
                    </div>

                    {/* Price */}
                    <div className="flex-1 p-4 border-r border-indigo-200">
                      <span className={`text-lg font-bold ${
                        data.price === "Live Chat" ? "text-green-600" : "text-indigo-600"
                      }`}>
                        {data.price}
                      </span>
                    </div>

                    {/* Order Button */}
                    <div className="flex-1 p-4">
                      <motion.button
                        className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors bg-indigo-500 hover:bg-indigo-600 text-white`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {data.price === "Live Chat" ? "Contact Us" : "Order Now"}
                      </motion.button>
                    </div>
                  </div>

                  {/* Mobile View */}
                  <div className="md:hidden p-4">
                    <div className="space-y-3">
                      {/* Package Name */}
                      <div className="text-center">
                        <h3 className="font-bold text-lg text-gray-900">{data.package}</h3>
                      </div>

                      {/* Details Grid */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="text-center">
                          <p className="font-medium text-gray-600">Articles</p>
                          <p className="text-gray-700">{data.noOfArticles}</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-gray-600">Per Article</p>
                          <p className={data.perArticle === "Live Chat" ? "text-green-600 font-medium" : "text-gray-700"}>
                            {data.perArticle}
                          </p>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-center">
                        <p className="font-medium text-gray-600">Total Price</p>
                        <p className={`text-xl font-bold ${
                          data.price === "Live Chat" ? "text-green-600" : "text-indigo-600"
                        }`}>
                          {data.price}
                        </p>
                      </div>

                      {/* Order Button */}
                      <motion.button
                        className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                          data.price === "Live Chat"
                            ? "bg-green-500 hover:bg-green-600 text-white"
                            : "bg-indigo-500 hover:bg-indigo-600 text-white"
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {data.price === "Live Chat" ? "Contact Us" : "Order Now"}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}

export default FlyerPackage;