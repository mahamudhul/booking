import React from 'react';
import App from '../../App';

const World = () => {
    return (
        <div className='grid grid-cols-2 gap-10 my-20'>

            {/* left side */}
            <div className='relative'>

                <App></App>

                <div className='absolute top-1/3 left-1/3 text-black'>
                    <div className='text-center'>
                        <p className='text-[50px] font-bold '>120+</p>
                        <p className='text-xl'>Dealers Location open location maps !</p>
                    </div>
                </div>
            </div>

            {/* right side */}
            <div className='ml-20 flex items-center'>
                <div className='w-[550px]'>
                    <p className='text-7xl font-serif mb-3'>The largest Our dealership!</p>

                    <p className='mt-3 mb-8'>Experience the unparalleled choice and a service at bike dealers agency, your premier destination.</p>

                    <button className='btn bg-emerald-500 rounded-full text-white px-6 py-3 hover:text-black'>View more bike</button>

                </div>
            </div>
        </div>
    );
};

export default World;