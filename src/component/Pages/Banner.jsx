import React from 'react';
import bg from '../../../public/royal/bg.jpg'


const Banner = () => {
    return (
        <div>
            {/* <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div> */}

            <div className="w-full h-[584px]  overflow-hidden shadow-lg relative group">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${bg})` }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 p-4">
                        <div className='mt-20 '>
                            <h2 className="text-white text-[90px] font-bold ">Style in
                                Every mile</h2>
                            <p className="text-white mt-2 w-96 mb-9">Seamless clicks, Limitless picks: Revolutionize car buying online. Revolutionize car buying online!</p>
                            <p><button className='rounded-full text-xl text-white border border-white py-3 px-5'>CONTACT US</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;