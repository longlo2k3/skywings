import { section } from "framer-motion/client";
import React from "react";
import Component from "./Component";
import { motion } from "framer-motion";
const Achive = ()=>{
    return(
        <section>
            <motion.div className="grid grid-cols-1 my-40 lg:mx-40 mx-4 md:grid-cols-3 sm:grid-cols-2 gap-10"
                initial={{opacity:0,scale:0,rotate:0}}
                whileInView={{opacity:1,scale:1,rotate:360}}
                viewport={{once:true}}
                transition={{
                    duration: 0.8,
                    delay:0.4,
                    type:"spring",
                    stiffness:120,
                    dumping:10
                }}
            >
                <Component point='10+' category='Years Experience'/>
                <Component point='12K' category='Happy Clients'/>
                <Component point='4.8' category='Overall Rating'/>
            </motion.div>
        </section>
    );
}

export default Achive