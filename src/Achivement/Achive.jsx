import { section } from "framer-motion/client";
import React from "react";
import Component from "./Component";
const Achive = ()=>{
    return(
        <section>
            <div className="grid grid-cols-1 my-40 lg:mx-40 mx-4 md:grid-cols-3 sm:grid-cols-2 gap-10">
                <Component point='10+' category='Years Experience'/>
                <Component point='12K' category='Happy Clients'/>
                <Component point='4.8' category='Overall Rating'/>
            </div>
        </section>
    );
}

export default Achive