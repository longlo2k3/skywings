import { div } from "framer-motion/client";
import React from "react";
import InforPlan from "./InforPlan";

const Journey = () =>{
    return(
        <section className="mt-32 mb-20 gap-4 lg:mx-40 mx-4">
            <div className="min-w-full flex flex-col justify-center items-center ">
                <div className="text-center">
                    <h1 className="text-4xl font-semibold">Journey To The Sky Made Simple!</h1>
                    <p className="text-gray-600">Effortless Planning for Your Next Adventure</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 mt-14 min-w-full ">
                    <InforPlan icon="bookmark" title="Seamless Booking Process" name="Easy Reservations, One Click Away" decs="From flights and accommodations to activities and transfers, everything you need is available at your fingertips, making travel planning effortless."/>
                    <InforPlan icon="image" title="Customized Plans Just for You" decs="Enjoy personalized travel plans designed to match your preferences and interests. Whether you seek adventure or cultural immersion, our tailored itineraries ensure your journey is uniquely yours."/>
                    <InforPlan icon="map" title="Expert Local Insights" name="Insider Tips and Recommendations" decs="We provide curated recommendations for dining, sightseeing, and hidden gems, so you can experience each destination like a local."/>
                </div>
            </div>
        </section>
    );
}

export default Journey