import React from 'react'
import { Phone, Mail, MapPin ,Coins, MoveRight    } from 'lucide-react';
import { motion } from "framer-motion";

function Footer() {
   return (
        <div className='pt-8 px-6 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg text-white' >
            <div className='flex flex-wrap justify-between gap-12 md:gap-6'>

                <div className='max-w-80'>
                    <h1 className='text-2xl font-bold text-white mb-5'>LOGO</h1>
                    <p className='text-sm'>
                        We at Lincoln Creative Writers aim to produce quality content, helping you stand out in the industry with effective and engaging content.
                    </p>
                    {/* Social's Icons */}
                    <div className='flex items-center gap-3 mt-4'>
                        {/* Instagram */}
                        <a href="https://www.instagram.com/lincolncreativewriters/">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5a3.25 3.25 0 01-3.25-3.25v-8.5zm9.5 1a4 4 0 11-4 4 4 4 0 014-4zm0 1.5a2.5 2.5 0 102.5 2.5 2.5 2.5 0 00-2.5-2.5zm3.5-.75a.75.75 0 11.75-.75.75.75 0 01-.75.75z" />
                        </svg>
                        </a>
                        {/* Facebook */}
                        <a href="https://www.facebook.com/lincolncreativewritersofficial">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.5 9H15V6.5h-1.5c-1.933 0-3.5 1.567-3.5 3.5v1.5H8v3h2.5V21h3v-7.5H16l.5-3h-3z" />
                        </svg>
                        </a>
                        {/* Twitter */}
                        <a href="https://www.linkedin.com/company/86231782/admin/">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22 5.92a8.2 8.2 0 01-2.36.65A4.1 4.1 0 0021.4 4a8.27 8.27 0 01-2.6 1A4.14 4.14 0 0016 4a4.15 4.15 0 00-4.15 4.15c0 .32.04.64.1.94a11.75 11.75 0 01-8.52-4.32 4.14 4.14 0 001.29 5.54A4.1 4.1 0 013 10v.05a4.15 4.15 0 003.33 4.07 4.12 4.12 0 01-1.87.07 4.16 4.16 0 003.88 2.89A8.33 8.33 0 012 19.56a11.72 11.72 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.53A8.18 8.18 0 0022 5.92z" />
                        </svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="https://www.pinterest.com/lincolncreativewriters/">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.25 17.562c-1.57 0-2.937-.87-3.437-1.97 0 0-.87 3.37-1.05 4.03-.19.69-.56 1.38-.93 1.38-.14 0-.19-.19-.19-.31 0-.56.87-5.25.87-5.25s-.25-.5-.25-1.25c0-1.19.69-2.06 1.56-2.06.75 0 1.12.56 1.12 1.25 0 .75-.5 1.87-.75 2.94-.19.81.44 1.44 1.31 1.44 1.56 0 2.62-1.87 2.62-4.06 0-1.75-1.25-3-3.06-3-2.19 0-3.44 1.56-3.44 3.31 0 .62.19 1.06.5 1.37.14.19.19.25.12.44-.06.19-.19.62-.25.81-.06.25-.19.31-.44.19-1.25-.56-1.87-2.06-1.87-3.37 0-2.75 2.19-5.5 6.25-5.5 3.31 0 5.56 2.37 5.56 4.94 0 3.37-2.06 5.87-5 5.87z"/>
                        </svg>
                        </a>
                    </div>
                    {/* Contact */}
                    <div className='flex flex-col gap-3 mt-10'>

                        <div className='flex gap-3 items-center'><Phone className='w-4 h-4'/> <span className='text-sm cursor-pointer hover:text-indigo-300'>+1 (917) 765-8780</span> </div>
                        <div className='flex gap-3 items-center'><Mail  className='w-4 h-4'/> <span className='text-sm cursor-pointer hover:text-indigo-300'>support@lincolncreativewriters.com</span> </div>
                        <div className='flex gap-3 '><MapPin className='w-8 h-5'/> <span className='text-sm flex cursor-pointer'>325 N. St. Paul Street Suite 3100 Dallas Texas 75201 United States of America</span> </div>
                        <div className='flex gap-3 items-center font-semibold'><Coins className='w-4 h-4'/> <span className='text-sm cursor-pointer hover:text-indigo-300'>REQUEST A REFUND</span> </div>


                    </div>
                </div>

            <div className='flex gap-15 '>
                <div>
                    <p className='text-lg text-white font-bold'>Business Writing</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Newsletter Writing</a>
                        </li>
                                                <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Whitepaper Writing Service</a>
                        </li>
                                                <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Business Proposal</a>
                        </li>
                                                <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Business Plan</a>
                        </li>
                                                <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Grant Writing</a>
                        </li>
                                                <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Email Writing</a>
                        </li>
                                                <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Pitch Deck</a>
                        </li>
                                                <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Press Release Writing Services</a>
                        </li>
                                                <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Presentations Writing</a>
                        </li>
                    <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Customer Letters</a>
                    </li>

                    </ul>
                </div>

                <div>
                    <p className='text-lg text-white font-bold'>Design</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                    <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Videos</a>
                    </li>
                                        <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Logo Design</a>
                    </li>
                                        <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Business card</a>
                    </li>
                                        <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Infographics</a>
                    </li>
                                        <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Flyer</a>
                    </li>
                                        <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Website Redesign</a>
                    </li>
                                        <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Letterhead</a>
                    </li>
                                        <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Ebook Cover</a>
                    </li>
                                        <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Ecommerce Website Design</a>
                    </li>
                                                            <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Facebook Cover</a>
                    </li>
                    </ul>
                </div>

                <div>
                    <p className='text-lg text-white font-bold'>Digital Solution</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>

                    <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Guest Post Service</a>
                    </li>

                    <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Landing Page Writing Services</a>
                    </li>

                                        <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Product Description Writing</a>
                    </li>

                                        <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Resume Writing</a>
                    </li>

                                        <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Wikipedia Writing</a>
                    </li>

                                        <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Web Content Writing</a>
                    </li>

                                        <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Website Design And Development Services</a>
                    </li>

                    </ul>
                </div>

                <div>
                    <p className='text-lg text-white font-bold'>Marketing</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                   <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Affiliate Content Marketing</a>
                    </li>
                                       <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Slogans</a>
                    </li>
                                       <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Taglines</a>
                    </li>
                                       <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Brochure</a>
                    </li>
                                       <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Social Media Content Writing</a>
                    </li>
                                       <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Book Marketing</a>
                    </li>
                                       <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>PPC Ads</a>
                    </li>
                                                           <li className='flex gap-3 items-center'><motion.span className="w-4 h-4" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}><MoveRight className='w-4 h-4'/></motion.span>
                        <a href="#" className='hover:text-indigo-300'>Sales Emails</a>
                    </li>
                    </ul>
                </div>

            </div>

                
            </div>
            <hr className='border-gray-300 mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
            <p>© {new Date().getFullYear()} <a href="https://prebuiltui.com"> Lincoln Creative Writers</a>. All rights reserved.</p>
            <div className='flex items-center gap-5'>
                <img src="/payment.png" alt="paymentIcons" />
                <img src="seals-footer.png" alt="seals-footer" />

            </div>
            </div>
        </div>
    );
}

export default Footer
