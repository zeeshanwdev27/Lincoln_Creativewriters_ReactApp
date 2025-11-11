import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

function Testimonials({title}) {
  const dummyTestimonialData = [
    {
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: 'John Doe',
      title: 'Marketing Director, TechCorp',
      content: 'ContentAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.',
      rating: 5,
    },
    {
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: 'Jane Smith',
      title: 'Content Creator, TechCorp',
      content: 'ContentAI has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.',
      rating: 5,
    },
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
      name: 'David Lee',
      title: 'Content Writer, TechCorp',
      content: 'ContentAI has transformed our content creation process. The AI tools have helped us produce high-quality content faster than ever before.',
      rating: 5,
    },
    {
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: 'Jane Smith',
      title: 'Content Creator, TechCorp',
      content: 'ContentAI has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.',
      rating: 5,
    },
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
      name: 'David Lee',
      title: 'Content Writer, TechCorp',
      content: 'ContentAI has transformed our content creation process. The AI tools have helped us produce high-quality content faster than ever before.',
      rating: 5,
    },
  ]

  // Function to render stars based on rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        width="16"
        height="15"
        viewBox="0 0 16 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
          fill={index < rating ? "#5044E5" : "#E5E7EB"}
        />
      </svg>
    ))
  }

  return (
    <div className='px-4 sm:px-6 lg:px-8 xl:px-32 py-16 lg:py-24 bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBackground.png)]'>
      <div className='text-center mb-8 lg:mb-12'>
        <h2 className='text-indigo-600  text-3xl sm:text-4xl lg:text-6xl font-semibold mb-4'>
          {title}
        </h2>
        <p className='text-slate-700 max-w-lg mx-auto text-sm sm:text-base'>
          What Our Satisfied Clients Have to Say
        </p>
      </div>

      <div className='relative'>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is >= 1280px
            1280: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          loop={true}
          className="testimonials-swiper"
        >
          {dummyTestimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className='p-6 sm:p-8 h-full rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition duration-300 cursor-pointer mb-12'>
                <div className="flex items-center gap-1">
                  {renderStars(testimonial.rating)}
                </div>
                <p className='text-gray-500 text-sm my-5'>"{testimonial.content}"</p>
                <hr className='mb-5 border-gray-300' />
                <div className='flex items-center gap-4'>
                  <img 
                    src={testimonial.image} 
                    className='w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full' 
                    alt={testimonial.name}
                  />
                  <div className='text-sm text-gray-600'>
                    <h3 className='font-medium'>{testimonial.name}</h3>
                    <p className='text-xs text-gray-500'>{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
{/* Custom Navigation Buttons */}
<div 
  className="swiper-button-prev !-left-2 sm:!-left-4 !w-10 !h-10 !bg-white !rounded-full !shadow-lg !border !border-gray-200 after:!text-sm hover:!bg-gray-50"
  style={{ '--swiper-navigation-color': '#6366f1' }}
></div>
<div 
  className="swiper-button-next !-right-2 sm:!-right-4 !w-10 !h-10 !bg-white !rounded-full !shadow-lg !border !border-gray-200 after:!text-sm hover:!bg-gray-50"
  style={{ '--swiper-navigation-color': '#6366f1' } }
></div>
        
        {/* Custom Pagination */}
        <div className="swiper-pagination !bottom-0 mt-8"></div>
      </div>

      {/* Custom CSS for Swiper */}
      <style jsx>{`
        .testimonials-swiper {
          padding: 20px 10px 40px;
        }
        
        @media (min-width: 640px) {
          .testimonials-swiper {
            padding: 20px 40px 40px;
          }
        }
        
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #D1D5DB;
          opacity: 1;
        }
        
        .swiper-pagination-bullet-active {
          background: #5044E5;
          width: 20px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  )
}

export default Testimonials