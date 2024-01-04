import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// react icons
import {FaStar} from "react-icons/fa6" 
import { Avatar } from 'flowbite-react';
import proPic from "../assets/profile.jpg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customer</h2>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='spce-y-6'>
            <div className='text-amber-500 flex gap-2'> 
                <FaStar/> 
                <FaStar/>
                <FaStar/>
                <FaStar/>  
            </div>
            {/* text */}
            <div className='mt-7'>
                <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur error tempora asperiores tempore minus. Vitae laboriosam atque dolor nulla odio eos reprehenderit eum odit, est, corporis placeat molestias amet repellendus?</p>
                <Avatar
                alt="avatar of Jese"
                img={proPic}
                rounded
                className='w-10 mb-4'
                />
                <h5 className='text-lg font-medium'>Mark Ping</h5>
                <p className='text-base'>CEO, ABC Company</p>
            </div>

        </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='spce-y-6'>
            <div className='text-amber-500 flex gap-2'> 
                <FaStar/> 
                <FaStar/>
                <FaStar/>
                <FaStar/>  
            </div>
            {/* text */}
            <div className='mt-7'>
                <p className='mb-5'> "Your Book Store is my go-to destination for discovering new and exciting reads. The curated collection and user-friendly interface make it a delightful experience. I love exploring the diverse genres and finding hidden literary gems!"</p>
                <Avatar
                alt="avatar of Jese"
                img={proPic}
                rounded
                className='w-10 mb-4'
                />
                <h5 className='text-lg font-medium'>Mark Ping</h5>
                <p className='text-base'>CEO, ABC Company</p>
            </div>

        </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='spce-y-6'>
            <div className='text-amber-500 flex gap-2'> 
                <FaStar/> 
                <FaStar/>
                <FaStar/>
                <FaStar/>  
            </div>
            {/* text */}
            <div className='mt-7'>
                <p className='mb-5'>"As a student, Your Book Store has been a lifesaver. Whether I need textbooks for my courses or want to unwind with a captivating novel, the extensive selection and affordable prices make it the perfect one-stop-shop. The quick delivery is an added bonus!"</p>
                <Avatar
                alt="avatar of Jese"
                img={proPic}
                rounded
                className='w-10 mb-4'
                />
                <h5 className='text-lg font-medium'>Mark Ping</h5>
                <p className='text-base'>CEO, ABC Company</p>
            </div>

        </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='spce-y-6'>
            <div className='text-amber-500 flex gap-2'> 
                <FaStar/> 
                <FaStar/>
                <FaStar/>
                <FaStar/>  
            </div>
            {/* text */}
            <div className='mt-7'>
                <p className='mb-5'>"I find endless inspiration at Your Book Store. The blog section provides valuable insights into the world of literature, and the carefully curated book collection sparks my creativity. It's my favorite place to discover new authors and learn about the craft of writing."</p>
                <Avatar
                alt="avatar of Jese"
                img={proPic}
                rounded
                className='w-10 mb-4'
                />
                <h5 className='text-lg font-medium'>Mark Ping</h5>
                <p className='text-base'>CEO, ABC Company</p>
            </div>

        </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='spce-y-6'>
            <div className='text-amber-500 flex gap-2'> 
                <FaStar/> 
                <FaStar/>
                <FaStar/>
                <FaStar/>  
            </div>
            {/* text */}
            <div className='mt-7'>
                <p className='mb-5'> "Your Book Store has been a game-changer for our book club. The ease of ordering multiple copies and the availability of discussion guides make it a breeze to organize our meetings. The diverse range of titles ensures there's always something for everyone in our club!"</p>
                <Avatar
                alt="avatar of Jese"
                img={proPic}
                rounded
                className='w-10 mb-4'
                />
                <h5 className='text-lg font-medium'>Mark Ping</h5>
                <p className='text-base'>CEO, ABC Company</p>
            </div>

        </div>
        </SwiperSlide>
     </Swiper>
        </div>
    </div>
  )
}

export default Review