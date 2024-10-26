import React from 'react';
import img1 from '../../../public/royal/classic-350.jpg'

const AllCart = () => {
    return (
        <div className='grid grid-cols-3 mt-10'>

            {/* left side */}
            <div>
                <h1 className='text-4xl font-bold mb-3'>Most <br /> searched <br /> used car</h1>
                <hr className='w-2/3 border-t-4 border-orange-500' />
                <p className='my-3'>Check out our versatile and ever-expanding premium car features catalogue and find the perfect cars.</p>

                <button className='btn '>View more</button>
            </div>


            {/* right side */}
            <div className='col-span-2'>
                <div className='grid grid-cols-3 gap-5 p-5'>
                    {/* card 1 */}
                    <div className='w-[280px]'>
                        <div className="w-full max-w-sm rounded-lg ">
                            <a href="#">
                                <img className=" rounded-t-lg" src={img1} alt="product image" />
                            </a>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight">Royal Enfield</h5>
                                </a>
                                <span className="text-3xl font-bold">$599</span>

                                <div className="grid grid-cols-3 divide-x-2 mt-4 mb-5 text-center">

                                    <div>
                                        <h1>2023</h1>
                                    </div>
                                    <div>
                                        <h1>Automatic</h1>
                                    </div>
                                    <div>
                                        <h1>Petrol</h1>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className='w-[280px]'>
                        <div className="w-full max-w-sm rounded-lg ">
                            <a href="#">
                                <img className=" rounded-t-lg" src={img1} alt="product image" />
                            </a>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight">Royal Enfield</h5>
                                </a>
                                <span className="text-3xl font-bold">$599</span>

                                <div className="grid grid-cols-3 divide-x-2 mt-4 mb-5 text-center">

                                    <div>
                                        <h1>2023</h1>
                                    </div>
                                    <div>
                                        <h1>Automatic</h1>
                                    </div>
                                    <div>
                                        <h1>Petrol</h1>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* 3 */}
                    <div className='w-[280px]'>
                        <div className="w-full max-w-sm rounded-lg ">
                            <a href="#">
                                <img className=" rounded-t-lg" src={img1} alt="product image" />
                            </a>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-2xl font-semibold tracking-tight">Royal Enfield</h5>
                                </a>
                                <span className="text-xl font-bold">$599</span>

                                <div className="grid grid-cols-3 divide-x-2 mt-4 mb-5 text-center">

                                    <div>
                                        <h1>2023</h1>
                                    </div>
                                    <div>
                                        <h1>Automatic</h1>
                                    </div>
                                    <div>
                                        <h1>Petrol</h1>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* 4 */}
                    {/* <div className="w-full max-w-sm rounded-lg ">
                        <a href="#">
                            <img className=" rounded-t-lg" src={img1} alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight">Royal Enfield</h5>
                            </a>
                            <span className="text-3xl font-bold">$599</span>

                            <div className="grid grid-cols-3 divide-x-2 mt-4 mb-5 text-center">

                                <div>
                                    <h1>2023</h1>
                                </div>
                                <div>
                                    <h1>Automatic</h1>
                                </div>
                                <div>
                                    <h1>Petrol</h1>
                                </div>
                            </div>

                        </div>
                    </div> */}

                    {/* 5 */}
                    {/* <div className="w-full max-w-sm rounded-lg ">
                        <a href="#">
                            <img className=" rounded-t-lg" src={img1} alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight">Royal Enfield</h5>
                            </a>
                            <span className="text-3xl font-bold">$599</span>

                            <div className="grid grid-cols-3 divide-x-2 mt-4 mb-5 text-center">

                                <div>
                                    <h1>2023</h1>
                                </div>
                                <div>
                                    <h1>Automatic</h1>
                                </div>
                                <div>
                                    <h1>Petrol</h1>
                                </div>
                            </div>

                        </div>
                    </div> */}

                    {/* 6 */}
                    {/* <div className="w-full max-w-sm rounded-lg ">
                        <a href="#">
                            <img className=" rounded-t-lg" src={img1} alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight">Royal Enfield</h5>
                            </a>
                            <span className="text-3xl font-bold">$599</span>

                            <div className="grid grid-cols-3 divide-x-2 mt-4 mb-5 text-center">

                                <div>
                                    <h1>2023</h1>
                                </div>
                                <div>
                                    <h1>Automatic</h1>
                                </div>
                                <div>
                                    <h1>Petrol</h1>
                                </div>
                            </div>

                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    );
};

export default AllCart;