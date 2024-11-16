import React from 'react';

import leftImg from '../../../public/royal/Motorcycle_Poster8.jpg'
import Slider from 'react-slick';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const data = [

    {
        img: '../../../public/royal/slide1.jpg'
    },
    {
        img: '../../../public/royal/slide2.jpg'
    },
    {
        img: '../../../public/royal/slide3.jpg'
    },
    {
        img: '../../../public/royal/slide1.jpg'
    },
    {
        img: '../../../public/royal/slide2.jpg'
    },
]


const BlogAndPost = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true
    };


    return (
        <div className=' mb-20'>
            {/* heading */}
            <div className='flex justify-between mb-10'>
                <div className='w-[550px]'>
                    <p className='text-6xl font-serif mb-3'>Our latest blog and news posts</p>
                </div>
                <div >
                    <p className='text-2xl mb-5'>Join 27,000+ companies who’ve reached</p>
                    <div className='text-end'>
                        <button className='btn text-xl bg-emerald-500 rounded-full text-white px-8 py-2 hover:text-black'>View more Bike</button>
                    </div>
                </div>
            </div>



            {/* main part */}
            <div className='grid grid-cols-7 gap-6 items-center'>

                {/* left */}
                <div className='col-span-2'>
                    <Slider {...settings}>
                        {
                            data.map((d, idx) => (
                                <div key={idx} >
                                    <img className='rounded-2xl' src={d.img} alt="" />
                                </div>
                            ))
                        }
                    </Slider>
                </div>

                {/* center */}
                <div className='col-span-3 flex flex-col justify-around gap-2 h-full'>
                    <div className='text-xl bg-slate-300 rounded-xl p-5'>
                        <p className='text-sm'>20 Jan 2023 * New york</p>
                        <p className='font-semibold mt-3'>Decoding excellence: Your guide to bike shopping with bike dealers agency</p>
                    </div>
                    <div className='text-xl bg-slate-300 rounded-xl p-5'>
                        <p className='text-sm'>20 Jan 2023 * New york</p>
                        <p className='font-semibold mt-3'>Decoding excellence: Your guide to bike shopping with bike dealers agency</p>
                    </div>
                    <div className='text-xl bg-slate-300 rounded-xl p-5'>
                        <p className='text-sm'>20 Jan 2023 * New york</p>
                        <p className='font-semibold mt-3'>Decoding excellence: Your guide to bike shopping with bike dealers agency</p>
                    </div>
                </div>

                {/* right */}
                <div className='col-span-2'>
                    <img src={leftImg} alt="" className='w-full h-full rounded-2xl' />
                </div>
            </div>
        </div>
    );
};

export default BlogAndPost;