import React from 'react';
import img from '../../../public/royal/codifyformatter__2_-removebg-preview.png'

import { FaCaravan } from "react-icons/fa";


const Details = () => {
    return (
        <div className='grid grid-cols-2 gap-10 '>


            <div className='relative'>
                <div className='text-white w-[600px] space-y-4 '>
                    <p className='text-xl font-bold'>Why Choose Us</p>
                    <p className='text-6xl font-bold'>We are dedicated <span className='text-red-600'>to provide</span> quality service</p>
                    <p className=''>There are many variations of passages available but the majority have suffered alteration in some form going to use a passage by injected humour randomised words which don't look even slightly believable.</p>
                </div>
                < div className='absolute top-40'>
                    <img className='w-full h-[600px] ms-4 rounded-full'
                        src={img}
                        alt="" />
                </div>
            </div>


            <div className='flex justify-center gap-10 '>
                <div>
                    <div className='bg-slate-200 rounded-2xl p-5 mb-9 mt-14'>
                        <div className='flex justify-between items-center text-[95px] '>
                            <FaCaravan />
                            <p className='text-red-600 '>01</p>
                        </div>
                        <h1 className='text-xl font-semibold'>Best Quality Cars</h1>
                        <p>There are many variations of the passages available but the majo have suffered fact that reader will be dist alteration.</p>
                    </div>

                    <div className='bg-slate-200 rounded-2xl p-5'>
                        <div className='flex justify-between items-center text-[95px] '>
                            <FaCaravan />
                            <p className='text-red-600 '>02</p>
                        </div>
                        <h1 className='text-xl font-semibold'>Best Quality Cars</h1>
                        <p>There are many variations of the passages available but the majo have suffered fact that reader will be dist alteration.</p>
                    </div>
                </div>

                <div>
                    <div className='bg-slate-200 rounded-2xl p-5 mb-9'>
                        <div className='flex justify-between items-center text-[95px] '>
                            <FaCaravan />
                            <p className='text-red-600 '>03</p>
                        </div>
                        <h1 className='text-xl font-semibold'>Best Quality Cars</h1>
                        <p>There are many variations of the passages available but the majo have suffered fact that reader will be dist alteration.</p>
                    </div>

                    <div className='bg-slate-200 rounded-2xl p-5'>
                        <div className='flex justify-between items-center text-[95px] '>
                            <FaCaravan />
                            <p className='text-red-600 '>04</p>
                        </div>
                        <h1 className='text-xl font-semibold'>Best Quality Cars</h1>
                        <p>There are many variations of the passages available but the majo have suffered fact that reader will be dist alteration.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;