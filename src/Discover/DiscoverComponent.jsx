import { div } from "framer-motion/client";
import React from "react";

const DiscoverComponent = (props)=>{
    return(
        <div className="container min-h-fit hover:cursor-pointer">
            <div className="  flex flex-col items-center text-center p-8  rounded-3xl hover:shadow-sm transition-all duration-[0.4s]">
                <span class="material-symbols-outlined text-3xl text-primarycolorDark py-1 px-2 rounded-full bg-blue-100">
                    {props.icon}
                </span>
                <p className="text-lg w-[100px] font-bold my-3">
                    {props.name}
                </p>
                <p className="text-base text-gray-900">
                    {props.desc}
                </p>
            </div>
        </div>
    );
}

export default DiscoverComponent