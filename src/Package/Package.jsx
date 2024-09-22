import { section } from "framer-motion/client";
import React from "react";
import ImgPackg from '../assets/showcase.jpg'
import bgImage from "../assets/header-bg.jpg";
import { motion } from "framer-motion";
const Package = () => {
    const backgroundImage = {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }
    return(
        <section className="relative flex justify-center items-center lg:mx-40 mx-4 max-h-fit">
            <div className="grid grid-cols-1 md:grid-cols-3 ">
                <motion.div className="col-span-1 translate-y-0"
                    initial={{opacity:0,x:-100}}
                    whileInView={{opacity:1,x:0}}
                    viewport={{once:true}}
                    transition={{
                        duration: 0.5,
                        delay:0.4,
                        type:"spring",
                        stiffness:120,
                        dumping:10
                    }}
                >
                    <img src={ImgPackg} alt="showcase" className="min-w-full rounded-xl shadow-xl"/>
                </motion.div>
                <div className="col-span-2 lg:ml-10 md:ml-4 md:mt-0 mt-4 max-h-full">
                    <motion.h1 className="text-5xl leading-snug font-semibold"
                        initial={{opacity:0,y:100}}
                        whileInView={{opacity:1,y:0}}
                        viewport={{once:true}}
                        transition={{
                            duration: 0.5,
                            delay:0.4,
                            type:"spring",
                            stiffness:120,
                            dumping:10
                        }}
                    >UNLEASH WANDERLUST WITH SKYWINGS</motion.h1>
                    <motion.p className=" text-gray-500 mt-10"
                        initial={{opacity:0,y:100}}
                        whileInView={{opacity:1,y:0}}
                        viewport={{once:true}}
                        transition={{
                            duration: 0.5,
                            delay:0.6,
                            type:"spring",
                            stiffness:120,
                            dumping:10
                        }}
                    >Embark on a journey like no other with Skywings, where your travel dreams come to life. Our mission is to inspire and facilitate your adventures, whether you seek the vibrant energy of bustling cityscapes, the serene beauty of pristine beaches, or the captivating history of ancient landmarks. At Skywings, we provide expertly curated destinations and personalized itineraries, ensuring that every trip is tailored to your unique preferences. Discover hidden gems, immerse yourself in diverse cultures, and create unforgettable memories that will last a lifetime.
                    </motion.p>
                    <motion.p className=" text-gray-500 my-4"
                        initial={{opacity:0,y:100}}
                        whileInView={{opacity:1,y:0}}
                        viewport={{once:true}}
                        transition={{
                            duration: 0.5,
                            delay:0.8,
                            type:"spring",
                            stiffness:120,
                            dumping:10
                        }}
                    >With Skywings as your ultimate travel companion, exploring the wonders of the world has never been easier. Our insider tips and local insights give you the tools to navigate new places with confidence and excitement. From the moment you start planning to the day you return home, we are dedicated to making your travel experience seamless and enriching.
                    </motion.p>
                    <motion.button className="flex flex-row justify-center items-center min-w-full min-h-16 rounded-md mt-11" style={backgroundImage}
                        initial={{opacity:0,y:100}}
                        whileInView={{opacity:1,y:0}}
                        viewport={{once:true}}
                        transition={{
                            duration: 0.5,
                            delay:1,
                            type:"spring",
                            stiffness:120,
                            dumping:10
                        }}
                    >
                        <h1 className="font-bold">Book A Flight Now</h1>
                        <span class="material-symbols-outlined">
                            arrow_forward
                        </span>
                    </motion.button>
                </div>
            </div>
        </section>
    );
}

export default Package