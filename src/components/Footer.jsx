import React from 'react'
import { Phone, Mail, MapPin, Coins, MoveRight } from 'lucide-react';
import { motion } from "framer-motion";

function Footer() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const arrowAnimation = {
    animate: { x: [0, 5, 0] },
    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const linkVariants = {
    hover: {
      x: 5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className='pt-8 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 bg-linear-to-r from-indigo-600 to-purple-600 shadow-lg text-white'
    >
      <motion.div 
        variants={containerVariants}
        className='flex flex-col lg:flex-row justify-between gap-8 md:gap-12 lg:gap-50'
      >
        {/* Company Info Section */}
        <motion.div 
          variants={itemVariants}
          className='max-w-full lg:max-w-80 flex-1'
        >
          <motion.h1 
            variants={itemVariants}
            className='text-2xl font-bold text-white mb-5'
          >
            LOGO
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className='text-sm leading-relaxed'
          >
            We at Lincoln Creative Writers aim to produce quality content, helping you stand out in the industry with effective and engaging content.
          </motion.p>
          
          {/* Social's Icons */}
          <motion.div 
            variants={itemVariants}
            className='flex items-center gap-3 mt-6'
          >
            {/* Instagram */}
            <motion.a 
              href="https://www.instagram.com/lincolncreativewriters/"
              variants={socialIconVariants}
              whileHover="hover"
              className="cursor-pointer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5a3.25 3.25 0 01-3.25-3.25v-8.5zm9.5 1a4 4 0 11-4 4 4 4 0 014-4zm0 1.5a2.5 2.5 0 102.5 2.5 2.5 2.5 0 00-2.5-2.5zm3.5-.75a.75.75 0 11.75-.75.75.75 0 01-.75.75z" />
              </svg>
            </motion.a>
            
            {/* Facebook */}
            <motion.a 
              href="https://www.facebook.com/lincolncreativewritersofficial"
              variants={socialIconVariants}
              whileHover="hover"
              className="cursor-pointer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.5 9H15V6.5h-1.5c-1.933 0-3.5 1.567-3.5 3.5v1.5H8v3h2.5V21h3v-7.5H16l.5-3h-3z" />
              </svg>
            </motion.a>
            
            {/* Twitter */}
            <motion.a 
              href="https://www.linkedin.com/company/86231782/admin/"
              variants={socialIconVariants}
              whileHover="hover"
              className="cursor-pointer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 5.92a8.2 8.2 0 01-2.36.65A4.1 4.1 0 0021.4 4a8.27 8.27 0 01-2.6 1A4.14 4.14 0 0016 4a4.15 4.15 0 00-4.15 4.15c0 .32.04.64.1.94a11.75 11.75 0 01-8.52-4.32 4.14 4.14 0 001.29 5.54A4.1 4.1 0 013 10v.05a4.15 4.15 0 003.33 4.07 4.12 4.12 0 01-1.87.07 4.16 4.16 0 003.88 2.89A8.33 8.33 0 012 19.56a11.72 11.72 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.53A8.18 8.18 0 0022 5.92z" />
              </svg>
            </motion.a>
            
            {/* LinkedIn */}
            <motion.a 
              href="https://www.pinterest.com/lincolncreativewriters/"
              variants={socialIconVariants}
              whileHover="hover"
              className="cursor-pointer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.25 17.562c-1.57 0-2.937-.87-3.437-1.97 0 0-.87 3.37-1.05 4.03-.19.69-.56 1.38-.93 1.38-.14 0-.19-.19-.19-.31 0-.56.87-5.25.87-5.25s-.25-.5-.25-1.25c0-1.19.69-2.06 1.56-2.06.75 0 1.12.56 1.12 1.25 0 .75-.5 1.87-.75 2.94-.19.81.44 1.44 1.31 1.44 1.56 0 2.62-1.87 2.62-4.06 0-1.75-1.25-3-3.06-3-2.19 0-3.44 1.56-3.44 3.31 0 .62.19 1.06.5 1.37.14.19.19.25.12.44-.06.19-.19.62-.25.81-.06.25-.19.31-.44.19-1.25-.56-1.87-2.06-1.87-3.37 0-2.75 2.19-5.5 6.25-5.5 3.31 0 5.56 2.37 5.56 4.94 0 3.37-2.06 5.87-5 5.87z"/>
              </svg>
            </motion.a>
          </motion.div>
          
          {/* Contact */}
          <motion.div 
            variants={itemVariants}
            className='flex flex-col gap-4 mt-8'
          >
            <motion.div 
              variants={linkVariants}
              whileHover="hover"
              className='flex gap-3 items-center cursor-pointer group'
            >
              <Phone className='w-4 h-4'/> 
              <span className='text-sm group-hover:text-indigo-300 transition-colors'>+1 (917) 765-8780</span>
            </motion.div>
            
            <motion.div 
              variants={linkVariants}
              whileHover="hover"
              className='flex gap-3 items-center cursor-pointer group'
            >
              <Mail className='w-4 h-4'/> 
              <span className='text-sm group-hover:text-indigo-300 transition-colors'>support@lincolncreativewriters.com</span>
            </motion.div>
            
            <motion.div 
              variants={linkVariants}
              whileHover="hover"
              className='flex gap-3 cursor-pointer group'
            >
              <MapPin className='w-4 h-5 flex-shrink-0'/> 
              <span className='text-sm group-hover:text-indigo-300 transition-colors flex-1'>
                325 N. St. Paul Street Suite 3100 Dallas Texas 75201 United States of America
              </span>
            </motion.div>
            
            <motion.div 
              variants={linkVariants}
              whileHover="hover"
              className='flex gap-3 items-center cursor-pointer group font-semibold'
            >
              <Coins className='w-4 h-4'/> 
              <span className='text-sm group-hover:text-indigo-300 transition-colors'>REQUEST A REFUND</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Navigation Links Section */}
        <motion.div 
          variants={containerVariants}
          className='flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-5'
        >
          {/* Business Writing */}
          <motion.div variants={itemVariants}>
            <motion.p 
              variants={itemVariants}
              className='text-lg text-white font-bold mb-4'
            >
              Business Writing
            </motion.p>
            <ul className='flex flex-col gap-3 text-sm'>
              {[
                "Newsletter Writing",
                "Whitepaper Writing Service",
                "Business Proposal",
                "Business Plan",
                "Grant Writing",
                "Email Writing",
                "Pitch Deck",
                "Press Release Writing Services",
                "Presentations Writing",
                "Customer Letters"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  variants={linkVariants}
                  whileHover="hover"
                  className='flex gap-3 items-center cursor-pointer group'
                >
                  <motion.span 
                    className="w-4 h-4 flex-shrink-0"
                    animate={arrowAnimation.animate}
                    transition={arrowAnimation.transition}
                  >
                    <MoveRight className='w-4 h-4'/>
                  </motion.span>
                  <a href="#" className='group-hover:text-indigo-300 transition-colors'>{item}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Design */}
          <motion.div variants={itemVariants}>
            <motion.p 
              variants={itemVariants}
              className='text-lg text-white font-bold mb-4'
            >
              Design
            </motion.p>
            <ul className='flex flex-col gap-3 text-sm'>
              {[
                "Videos",
                "Logo Design",
                "Business card",
                "Infographics",
                "Flyer",
                "Website Redesign",
                "Letterhead",
                "Ebook Cover",
                "Ecommerce Website Design",
                "Facebook Cover"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  variants={linkVariants}
                  whileHover="hover"
                  className='flex gap-3 items-center cursor-pointer group'
                >
                  <motion.span 
                    className="w-4 h-4 flex-shrink-0"
                    animate={arrowAnimation.animate}
                    transition={arrowAnimation.transition}
                  >
                    <MoveRight className='w-4 h-4'/>
                  </motion.span>
                  <a href="#" className='group-hover:text-indigo-300 transition-colors'>{item}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Digital Solution */}
          <motion.div variants={itemVariants}>
            <motion.p 
              variants={itemVariants}
              className='text-lg text-white font-bold mb-4'
            >
              Digital Solution
            </motion.p>
            <ul className='flex flex-col gap-3 text-sm'>
              {[
                "Guest Post Service",
                "Landing Page Writing Services",
                "Product Description Writing",
                "Resume Writing",
                "Wikipedia Writing",
                "Web Content Writing",
                "Website Design And Development Services"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  variants={linkVariants}
                  whileHover="hover"
                  className='flex gap-3 items-center cursor-pointer group'
                >
                  <motion.span 
                    className="w-4 h-4 flex-shrink-0"
                    animate={arrowAnimation.animate}
                    transition={arrowAnimation.transition}
                  >
                    <MoveRight className='w-4 h-4'/>
                  </motion.span>
                  <a href="#" className='group-hover:text-indigo-300 transition-colors'>{item}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Marketing */}
          <motion.div variants={itemVariants}>
            <motion.p 
              variants={itemVariants}
              className='text-lg text-white font-bold mb-4'
            >
              Marketing
            </motion.p>
            <ul className='flex flex-col gap-3 text-sm'>
              {[
                "Affiliate Content Marketing",
                "Slogans",
                "Taglines",
                "Brochure",
                "Social Media Content Writing",
                "Book Marketing",
                "PPC Ads",
                "Sales Emails"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  variants={linkVariants}
                  whileHover="hover"
                  className='flex gap-3 items-center cursor-pointer group'
                >
                  <motion.span 
                    className="w-4 h-4 flex-shrink-0"
                    animate={arrowAnimation.animate}
                    transition={arrowAnimation.transition}
                  >
                    <MoveRight className='w-4 h-4'/>
                  </motion.span>
                  <a href="#" className='group-hover:text-indigo-300 transition-colors'>{item}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.hr 
        variants={itemVariants}
        className='border-gray-300 mt-8 opacity-50'
      />
      
      <motion.div 
        variants={containerVariants}
        className='flex flex-col md:flex-row gap-4 items-center justify-between py-6'
      >
        <motion.p 
          variants={itemVariants}
          className='text-sm text-center md:text-left'
        >
          © {new Date().getFullYear()} <a href="https://prebuiltui.com" className='hover:text-indigo-300 transition-colors'> Lincoln Creative Writers</a>. All rights reserved.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className='flex items-center gap-4 flex-wrap justify-center'
        >
          <motion.img 
            whileHover={{ scale: 1.05 }}
            src="/payment.png" 
            alt="paymentIcons" 
            className='h-8 object-contain'
          />
          <motion.img 
            whileHover={{ scale: 1.05 }}
            src="seals-footer.png" 
            alt="seals-footer" 
            className='h-8 object-contain'
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Footer