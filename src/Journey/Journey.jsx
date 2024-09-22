import { div } from "framer-motion/client";
import React from "react";
import InforPlan from "./InforPlan";
import { motion } from "framer-motion";

const Journey = () =>{
    return(
        <section className="mt-32 mb-20 gap-4 lg:mx-40 mx-4">
            <div className="min-w-full flex flex-col justify-center items-center ">
                <motion.div className="text-center"
                    initial={{opacity:0,scale:0, rotate:0}}
                    whileInView={{opacity:1,scale:1, rotate:360}}
                    viewport={{once:true}}
                    transition={{
                        duration: 0.8,
                        delay:0.4,
                        type:"spring",
                        stiffness:120,
                        dumping:10
                    }}
                >
                    <h1 className="text-4xl font-semibold">Journey To The Sky Made Simple!</h1>
                    <p className="text-gray-600">Effortless Planning for Your Next Adventure</p>
                </motion.div>
                <motion.div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 mt-14 min-w-full "
                    initial={{scale:0,opacity:0}}
                    whileInView={{scale:1,opacity:1}}
                    viewport={{once:true}}
                    transition={{
                        duration: 1,
                        delay:0.8,
                        type:"spring",
                        stiffness:120,
                        dumping:10
                    }}
                >
                    <InforPlan icon="bookmark" title="Seamless Booking Process" name="Easy Reservations, One Click Away" decs="From flights and accommodations to activities and transfers, everything you need is available at your fingertips, making travel planning effortless."/>
                    <InforPlan icon="image" title="Customized Plans Just for You" decs="Enjoy personalized travel plans designed to match your preferences and interests. Whether you seek adventure or cultural immersion, our tailored itineraries ensure your journey is uniquely yours."/>
                    <InforPlan icon="map" title="Expert Local Insights" name="Insider Tips and Recommendations" decs="We provide curated recommendations for dining, sightseeing, and hidden gems, so you can experience each destination like a local."/>
                </motion.div>
            </div>
        </section>
    );
}

export default Journey