import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';



const data = [

    {
        img: '../../../public/royal/gt-650.jpg'
    },
    {
        img: '../../../public/royal/guerrilla_450.jpg'
    },
    {
        img: '../../../public/royal/himalayan-motorcycle.jpg'
    },
    {
        img: '../../../public/royal/hunter-350.jpg'
    },
    {
        img: '../../../public/royal/guerrilla_450.jpg'
    },
]

const LatestModel = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,

        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",

        pauseOnHover: true,

        className: "center",
        centerMode: true,
        centerPadding: "60px"
    };


    return (
        <div className='my-20  mx-auto'>
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
    );
};

export default LatestModel;