import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";



const Footer = () => {
    return (
        <div>
            <div>
                <footer className="bg-black ">

                    <div className="mx-auto w-full max-w-screen-xl p-10">

                        {/* last option */}
                        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-10">

                            <div className='col-span-3'>
                                <h2 className="mb-6 text-4xl font-semibold uppercase text-white">Royal En<span className='text-red-700'>fi</span>eld</h2>
                                <p className='text-white my-4'>We are many variations of passages available but the majority have suffered alteration in some form by injected humour words believable.</p>
                                <ul className="text-gray-400  font-medium">
                                    <li className="mb-4"> <a href="#" className=" hover:underline">+2 123 654 7898</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">25/B Milford Road, New York</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">info@example.com</a>
                                    </li>
                                </ul>
                            </div>

                            <div className='col-span-2'>
                                <h2 className="mb-6 text-3xl font-semibold text-gray-900 uppercase dark:text-white">Quick links</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Server</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">special offer</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">service</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">about us</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">tren</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Contact Us</a>
                                    </li>
                                </ul>
                            </div>

                            <div className='col-span-2'>
                                <h2 className="mb-6 text-3xl font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Licensing</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">error page</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">faq</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">listing</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>

                            <div className='col-span-3'>
                                <h2 className="mb-6 font-semibold text-white uppercase text-3xl">NewsLetter</h2>
                                <p className='text-white mb-3'>Subscribe Our Newsletter To Get Latest Update And News</p>
                                <input type="email" placeholder="email" className="input w-full input-bordered" required />
                                <button className='w-full bg-red-600 text-white text-xl p-4 mt-4 rounded-lg'>Subscribe now</button>
                            </div>
                        </div>



                    </div>

                    {/* copyright */}
                    <div className=" bg-zinc-900">
                        <div className="px-8 py-6 mx-auto w-full  max-w-screen-xl  md:flex md:items-center md:justify-between">
                            <span className="text text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.
                            </span>
                            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">

                                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                    <FaFacebook className='text-4xl ' />
                                    <span className="sr-only">Facebook page</span>
                                </a>

                                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                    <FaSquareTwitter className='text-4xl ' />
                                    <span className="sr-only">Discord community</span>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                    <FaYoutube className='text-4xl ' />

                                    <span className="sr-only">Twitter page</span>
                                </a>

                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        </div>
    );
};

export default Footer;