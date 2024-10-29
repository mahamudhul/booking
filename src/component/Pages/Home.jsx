import React from 'react';
import Navbar from './Navbar';
import img1 from '../../../public/images/Rectangle 1.png';

import Banner from './Banner';
import AllCart from './AllCart';
import Bikes from './Bikes';
import Footer from './Footer';
import App from '../../App';
import World from './World';
import BlogAndPost from './BlogAndPost';



const Home = () => {
    return (
        <div >
            {/* <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${img1})`,
                }}>
                <div className="hero-overlay bg-opacity-40"></div>
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


            <Banner></Banner>
            <AllCart></AllCart>
            <Bikes></Bikes>
            <World></World>
            <BlogAndPost></BlogAndPost>
            {/* <App></App> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;