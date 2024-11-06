import React from 'react';
import { CiStar } from "react-icons/ci";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import star from '../../../../public/icons/star_1_.png'





const data = [
    {
        name: 'John',
        img: '/public/images/people.jpg',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum assumenda consequuntur harum modi quaerat animi ipsa reiciendis et alias earum sapiente id, consequatur adipisci? Consequuntur quasi aliquid ullam alias.'
    },
    {
        name: 'John',
        img: '/public/icons/google.png',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum assumenda consequuntur harum modi quaerat animi ipsa reiciendis et alias earum sapiente id, consequatur adipisci? Consequuntur quasi aliquid ullam alias.'
    },
    {
        name: 'John',
        img: '/public/icons/google.png',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum assumenda consequuntur harum modi quaerat animi ipsa reiciendis et alias earum sapiente id, consequatur adipisci? Consequuntur quasi aliquid ullam alias.'
    },
    {
        name: 'John',
        img: '/public/icons/google.png',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum assumenda consequuntur harum modi quaerat animi ipsa reiciendis et alias earum sapiente id, consequatur adipisci? Consequuntur quasi aliquid ullam alias.'
    },
    {
        name: 'John',
        img: '/public/icons/google.png',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum assumenda consequuntur harum modi quaerat animi ipsa reiciendis et alias earum sapiente id, consequatur adipisci? Consequuntur quasi aliquid ullam alias.'
    },
    {
        name: 'John',
        img: '/public/icons/google.png',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum assumenda consequuntur harum modi quaerat animi ipsa reiciendis et alias earum sapiente id, consequatur adipisci? Consequuntur quasi aliquid ullam alias.'
    },
    {
        name: 'John',
        img: '/public/icons/google.png',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum assumenda consequuntur harum modi quaerat animi ipsa reiciendis et alias earum sapiente id, consequatur adipisci? Consequuntur quasi aliquid ullam alias.'
    },
    {
        name: 'John',
        img: '/public/icons/google.png',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum assumenda consequuntur harum modi quaerat animi ipsa reiciendis et alias earum sapiente id, consequatur adipisci? Consequuntur quasi aliquid ullam alias.'
    },
    {
        name: 'John',
        img: '/public/icons/google.png',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum assumenda consequuntur harum modi quaerat animi ipsa reiciendis et alias earum sapiente id, consequatur adipisci? Consequuntur quasi aliquid ullam alias.'
    },
    {
        name: 'John',
        img: '/public/icons/google.png',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum assumenda consequuntur harum modi quaerat animi ipsa reiciendis et alias earum sapiente id, consequatur adipisci? Consequuntur quasi aliquid ullam alias.'
    },
]


const Review = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true
    };

    return (
        <div className='slider-container mx-auto my-10'>
            <div className='mb-20 '>
                <style>
                    {`
                        .slick-prev, .slick-next {
                            color: white;
                            // background: black;
                            z-index: 1;
                        }
                    `}
                </style>

                <Slider {...settings}>
                    {
                        data.map((d, idx) => (
                            <div key={idx} className=' bg-base-100  shadow-xl rounded-2xl'>
                                <figure >
                                    <img className='h-24 w-24 mt-3 ms-4 rounded-full'
                                        src={d.img}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className=" text-2xl font-bold">
                                        {d.name}
                                    </h2>
                                    <p className='text-red-400'>Customer</p>
                                    <p>{d.review}</p>
                                    <div className="card-actions justify-start">

                                        <div><img src={star} alt="" /></div>
                                        <div><img src={star} alt="" /></div>
                                        <div><img src={star} alt="" /></div>
                                        <div><img src={star} alt="" /></div>
                                        
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>

        </div>
    );
};


{/* <div className="mt-5 ms-5">
<h2 className="card-title text-xl  ">
Shoes!
</h2>
<p className='text-red-600 mb-3 mt-1 text-lg'>Customer</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non necessitatibus eius voluptates enim nam aut consequuntur aliquid, inventore, est, quas placeat porro! Excepturi aliquid in ab molestiae .</p>
<div className="card-actions justify-start mt-3">
<div><CiStar className="text-black text-3xl" /></div>
<div><CiStar className="text-black text-3xl" /></div>
<div><CiStar className="text-black text-3xl" /></div>
<div><CiStar className="text-black text-3xl" /></div>
<div><CiStar className="text-black text-3xl" /></div>
</div>
</div> */}

export default Review;