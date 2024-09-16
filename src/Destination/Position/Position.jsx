import { div } from "framer-motion/client";
import React from "react";


const Position = (props)=>{
    return (
        <div className="gap-1">
            <img src={props.img} alt="destination" className="w-fit object-cover object-center rounded-3xl"/>
            <div className="flex flex-row justify-between ml-3 mt-3">
                <div>
                    <h1 className="text-lg font-semibold">{props.destination}</h1>
                    <p className="text-gray-600 items-center">{props.position}</p>
                </div>
                <div className="flex justify-center items-center">
                    <p className="flex flex-row justify-center items-center px-3 py-1 rounded-full bg-primarycolor text-white"><span class="material-symbols-outlined  border-1 border-primarycolor">star</span> {props.point}</p>
                </div>
            </div>
        </div>
    );
}

export default Position