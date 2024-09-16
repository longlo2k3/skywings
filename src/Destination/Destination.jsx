import { div, section } from "framer-motion/client";
import { motion } from "framer-motion";
import React from "react";
import Position from "./Position/Position";
import DesImg from '../assets/destination-1.jpg'
import DesImg2 from '../assets/destination-2.jpg'
import DesImg3 from '../assets/destination-3.jpg'
const Destination = () =>{
    return(
        <section className="flex flex-col justify-center items-center gap-4 md:mx-40 mx-4 my-20 min-w-fit overflow-hidden ">
            <div className="flex flex-col ">
                <div>
                    <h1 className="text-4xl font-bold leading-relaxed">Popolar Destination</h1>
                    <p className="text-gray-500">Discover the Most Loved Destinations Around the Globe</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 mt-20 gap-10">
                    <Position img={DesImg} destination='Tradition and Futurism' position='New York City, USA' point='4.7'/>
                    <Position img={DesImg2} destination='The City of Lights' position='Paris, France' point='4.5'/>
                    <Position img={DesImg3} destination='Island of the Gods' position='Bali, Indonesia' point='4.8'/>
                </div>
            </div>
            
        </section>
    );
}

export default Destination