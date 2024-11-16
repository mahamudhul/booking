import React from 'react';


const Service = () => {
    return (
        <div className='mt-16 bg-slate-300 p-10'>
            <div className='flex justify-between items-center'>
                <div className=' mx-auto'>
                    <img className='w-20 mx-auto' src="../../../../public/icon/customer-support (1).png" alt="" />
                    <p className='mt-4 text-xl'><a href="">Book a Service</a></p>
                </div>
                <div className=' mx-auto'>
                    <img className='w-20 mx-auto' src="../../../../public/icon/route (1).png" alt="" />
                    <p className='mt-4 text-xl'><a href="">Find a store</a></p>
                </div>
                <div className=' mx-auto'>
                    <img className='w-20 mx-auto' src="../../../../public/icon/touch-screen (1).png" alt="" />
                    <p className='mt-4 text-xl'><a href="">Book a test ride</a></p>
                </div>

            </div>
        </div>
    );
};

export default Service;