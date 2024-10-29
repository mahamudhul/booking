import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import './SwiperBlog.css'


import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';



// Import local images
import image1 from '../../../../../public/images/Sajek.png';
import image2 from '../../../../../public/images/Sreemongol.png';
import image3 from '../../../../../public/images/sundorbon.png';

const SwiperBlog = () => {
    const images = [image1, image2, image3];
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        let interval;
        if (hovered && swiperInstance) {
            interval = setInterval(() => {
                swiperInstance.slideNext();
            }, 1000); // Change image every second
        }
        return () => clearInterval(interval); // Clear interval on mouse leave
    }, [hovered, swiperInstance]);

    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide><img src={image1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={image2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={image3} alt="" /></SwiperSlide>

            </Swiper>
        </>
        // <Swiper
        //     modules={[Navigation, Pagination]}
        //     navigation
        //     pagination={{ clickable: true }}
        //     spaceBetween={20}
        //     slidesPerView={1}
        //     loop={true}
        //     onSwiper={setSwiperInstance} // Save Swiper instance
        //     onMouseEnter={() => setHovered(true)}
        //     onMouseLeave={() => setHovered(false)}
        // >
        //     {images.map((image, index) => (
        //         <SwiperSlide key={index}>
        //             <img
        //                 src={image}
        //                 alt={`Slide ${index + 1}`}
        //                 style={{ width: '100%', height: 'auto' }}
        //             />
        //         </SwiperSlide>
        //     ))}
        // </Swiper>
    );
};

export default SwiperBlog;
