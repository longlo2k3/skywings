import React from "react";
import bgImage from "../assets/header-bg.jpg";
import ImageFly from "../assets/header.png";
import { motion } from "framer-motion";

const Hero = () => {
    const backgroundImage = {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }


    return (
        <section style={backgroundImage} className="relative z-10 grid  grid-cols-1  md:grid-cols-2 m-[20px] rounded-3xl overflow-hidden">
            <div className="flex flex-col justify-center md:items-start md:text-start text-center items-center p-[120px]  gap-2">
                <motion.p className="md:text-sm font-medium"
                    initial={{opacity:0, y: 100}}
                    whileInView={{opacity:1, y:0}}
                    transition={{ 
                        duration: 0.5, 
                        delay: 0.8,
                        type: "spring",
                        stiffness: 120,
                        damping: 10
                    }} 
                    viewport={{once:true}}
                >ELEVATE YOUR TRAVEL JOURNEY</motion.p>
                <motion.h1 className="lg:text-7xl font-semibold lg:max-w-[440px] text-3xl  leading-relaxed"
                    initial={{opacity:0, y: 100}}
                    whileInView={{opacity:1, y:0}}
                    transition={{ 
                        duration: 0.5, 
                        delay: 1,
                        type: "spring",
                        stiffness: 120,
                        damping: 10
                    }} 
                    viewport={{once:true}}
                >Experience The Magic Of Flight!</motion.h1>
                <motion.div className="flex flex-row justify-start items-center mt-3 gap-2"
                    initial={{opacity:0, y: 100}}
                    animate={{opacity:1, y:0}}
                    transition={{ 
                        duration: 0.5, 
                        delay: 1.2,
                        type: "spring",
                        stiffness: 120,
                        damping: 10
                    }} 
                >
                    <button className="button-primary bg-primarycolor text-white">Book A Trip Now</button>
                    <span class="material-symbols-outlined text-3xl text-primarycolor bg-white transition-all duration-[0.4s] rounded-full px-[9px] py-[5px] hover:scale-110 hover:cursor-pointer">
                        play_circle
                    </span>
                </motion.div>
            </div>
            <motion.div
                initial={{opacity:0, x: 50, y:100}}
                whileInView={{opacity:1, x:0,y:0}}
                transition={{ 
                    duration: 0.5, 
                    delay: 0.6,
                    type: "spring",
                    stiffness: 120,
                    damping: 10
                }} 
                viewport={{once:true}}
            >
                <img src={ImageFly} alt="fly" className="md:absolute md:max-w-7xl md:top-10"  />
            </motion.div>
        </section> 
    );
}

export default Hero;
