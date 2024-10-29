import React from 'react';
import SwiperBlog from './Component/SwiperBlog/SwiperBlog';

const BlogAndPost = () => {
    return (
        <div className=' mb-20'>
            {/* heading */}
            <div className='flex justify-between mb-5'>
                <div className='w-[550px]'>
                    <p className='text-[60px] font-serif mb-3'>Our latest blog and news posts</p>
                </div>
                <div >
                    <p className='text-2xl mb-5'>Join 27,000+ companies who’ve reached</p>
                    <div className='text-end'>
                        <button className='btn text-xl bg-emerald-500 rounded-full text-white px-8 py-2 hover:text-black'>View more car</button>
                    </div>
                </div>
            </div>


            <div className='grid grid-cols-7'>
                {/* left */}
                <div className='col-span-2'>
                    <SwiperBlog></SwiperBlog>
                </div>

                {/* center */}
                <div className='space-y-3 col-span-3'>
                    <div className='text-xl bg-slate-300 rounded-lg p-8'>
                        <p>20 Jan 2023 * New york</p>
                        <p className='font-bold mt-3'>Decoding excellence: Your guide to car shopping with car dealers agency</p>
                    </div>
                    <div className='text-xl bg-slate-300 rounded-lg p-8'>
                        <p>20 Jan 2023 * New york</p>
                        <p className='font-bold mt-3'>Decoding excellence: Your guide to car shopping with car dealers agency</p>
                    </div>
                    <div className='text-xl bg-slate-300 rounded-lg p-8'>
                        <p>20 Jan 2023 * New york</p>
                        <p className='font-bold mt-3'>Decoding excellence: Your guide to car shopping with car dealers agency</p>
                    </div>
                </div>

                {/* right */}
                <div>

                </div>
            </div>
        </div>
    );
};

export default BlogAndPost;