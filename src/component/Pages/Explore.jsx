import React from 'react';
import Slider from 'react-slick';


const data = [
    {
        img: '../../../public/royal/royal-enfield-trail-school-2024.png'
    },
    {
        img: '../../../public/royal/leh-rider-support.jpg'
    },
    {
        img: '../../../public/royal/explore-guide.jpg'
    },
    {
        img: '../../../public/royal/l1.png'
    },
    {
        img: '../../../public/royal/royal-enfield-tours.jpg'
    },
    {
        img: '../../../public/royal/gt-cup-hero-desc.png'
    },
]

const Explore = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    // const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

    return (
        <div className='my-20 mx-20'>
            <div className=''>
                <div className='text-center mb-3'>
                    <p className='text-6xl font-serif'>Rides With Us</p>
                    <p className='text-2xl'>Explore More</p>

                </div>
                <hr className='border border-t-2 border-gray-500 mb-10 w-1/3 mx-auto' />


                <div className='slider-container'>
                    <Slider {...settings} className='mx-auto'>
                        {
                            data.map((d, idx) => (
                                <div key={idx} className=''>
                                    <img className='w-full rounded-2xl' src={d.img} alt="" />
                                </div>
                            ))
                        }
                    </Slider>
                </div>

            </div>
        </div>
    );
};

export default Explore;