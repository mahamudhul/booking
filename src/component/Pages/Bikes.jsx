import React from 'react';
import bike1 from '../../../public/royal/bikes.jpg'
import bike2 from '../../../public/royal/bikes2.jpg'
import bike3 from '../../../public/royal/bikes3.jpg'

const Bikes = () => {
    return (
        <div className='mt-10 flex justify-center items-center gap-14'>
            {/* 1 */}
            <div className="w-[400px] h-[550px] rounded-lg overflow-hidden shadow-lg relative group">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                    style={{ backgroundImage: `url(${bike1})` }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end
                             items-center p-4">
                        <h2 className="text-white text-2xl font-bold">Development</h2>

                        <p className="text-white mt-2 group-hover:mb-2 group-hover:duration-300">Web Design</p>

                        <p className="hidden group-hover:inline  duration-300   mb-5">Some Lorem ipsum dolor sit amet. description goes here.</p>
                    </div>
                </div>
            </div>

{/* 2 */}
            <div className="w-[400px] h-[550px] rounded-lg overflow-hidden shadow-lg relative group">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                    style={{ backgroundImage: `url(${bike2})` }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end
                             items-center p-4">
                        <h2 className="text-white text-2xl font-bold">Development</h2>

                        <p className="text-white mt-2 group-hover:mb-2 duration-500">Web Design</p>

                        <p className="hidden group-hover:inline  transition-transform duration-100 ease-in-out transform  mb-5">Some Lorem ipsum dolor sit amet. description goes here.</p>
                    </div>
                </div>
            </div>

            {/* 3 */}
            <div className="w-[400px] h-[550px] rounded-lg overflow-hidden shadow-lg relative group">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                    style={{ backgroundImage: `url(${bike3})` }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end
                             items-center p-4">
                        <h2 className="text-white text-2xl font-bold">Development</h2>

                        <p className="text-white mt-2 group-hover:mb-2 duration-500">Web Design</p>

                        <p className="hidden group-hover:inline  transition-transform duration-100 ease-in-out transform  mb-5">Some Lorem ipsum dolor sit amet. description goes here.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bikes;