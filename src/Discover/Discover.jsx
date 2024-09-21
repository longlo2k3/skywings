import { div } from "framer-motion/client";
import React from "react";
import DiscoverComponent from "./DiscoverComponent";

const Discover = () =>{
    return(
        <section className="my-32 gap-4 lg:mx-40 mx-4">
            <div className="min-w-full flex flex-col justify-center items-center ">
                <div className="text-center">
                    <h1 className="text-4xl font-semibold">Discover The World From Above</h1>
                    <p className="text-gray-600">Experience Breathtaking Views and Unique Perspectives</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 mt-14 min-w-full ">
                    <DiscoverComponent icon="token" name="Aerial Cityscapes" desc="Witness the architectural marvels and bustling streets from bird's-eye view, offering a unique perspective."/>
                    <DiscoverComponent icon="houseboat" name="Coastal Wonders" desc="Fly over pristine coastlines and turquoise waters, revealing hidden coves and vibrant coral reefs."/>
                    <DiscoverComponent icon="image" name="Historic Landmarks" desc="Observe the grandeur of ancient castles and other significant sites in a way that ground tours can't offer."/>
                </div>
            </div>
        </section>
    );
}


export default Discover