import React from 'react';
import img1 from '../../../public/royal/classic-350.jpg'


const data = [
    {
        img: '../../../public/royal/gt-650.jpg',
        name: 'GT 650',
        price: 350
    },
    {
        img: '../../../public/royal/hunter-350.jpg',
        name: 'Hunter 350',
        price: 350
    },
    {
        img: '../../../public/royal/interceptor-650.jpg',
        name: 'Interceptor 650',
        price: 350
    },
    {
        img: '../../../public/royal/himalayan-motorcycle.jpg',
        name: 'Himalayan',
        price: 350
    },
    {
        img: '../../../public/royal/meteor-350.png',
        name: 'Meteor 350',
        price: 350
    },
    {
        img: '../../../public/royal/guerrilla_450.jpg',
        name: 'Guerrilla 450',
        price: 350
    },
]



const AllCart = () => {
    return (
        <div className='grid grid-cols-3 mt-40'>

            {/* left side */}
            <div className='ml-10'>
                <div>
                    <p className='text-6xl font-serif mb-3'>Most searched  used car</p>

                    <hr className='w-1/3 border-t-4 border-green-600' />

                    <p className='my-3'>Check out our versatile and ever-expanding premium car features catalogue and find the perfect cars.</p>

                    <button className='btn bg-emerald-500 rounded-full text-white px-6 py-3 hover:text-black'>View more</button>
                    <div>
                        <img src='../../../public/royal/bg2.jpg' alt="" />
                    </div>
                </div>
            </div>


            {/* right side */}
            <div className='col-span-2'>
                <div className='grid grid-cols-3 gap-5 p-5'>
                    {
                        data.map((d, idx) => (
                            <div key={idx} className='w-[280px]'>
                                <div className="w-full max-w-sm rounded-lg ">
                                    <a href="#">
                                        <img className=" rounded-t-lg" src={d.img} alt="product image" />
                                    </a>
                                    <div className="px-5 pb-3 mt-3 mb-3">
                                        <h5 className="text-3xl font tracking-tight ">{d.name}</h5>
                                        <p className="text-2xl ">${d.price}</p>
                                    </div>

                                    <hr className='w-full border-t-1 border-stone-500' />

                                    <div className="grid grid-cols-3 divide-x-2  mb-5 mt-2 text-center gap-4">

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
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default AllCart;