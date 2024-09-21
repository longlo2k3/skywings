import { div } from "framer-motion/client";
import React from "react";

const Component = (props) =>{
    return(
        <div className="flex flex-col justify-center p-10 items-center bg-[#F3F4F6] shadow-sm rounded-3xl">
            <h1 className="text-7xl text-primarycolor font-semibold">
                {props.point}
            </h1>
            <p className="text-gray-500 mt-2">{props.category}</p>
        </div>
    );
}

export default Component