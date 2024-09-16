import { div } from "framer-motion/client";
import React from "react";

const InforPlan = (props)=>{
    return(
        <div className="container relative min-h-[230px] hover:cursor-pointer overflow-hidden ">
            <div className=" absolute min-w-full min-h-[87%] translate-y-9 flex flex-col gap-12 p-8 bg-gray-100 rounded-tl-3xl rounded-tr-3xl">
                <span class="material-symbols-outlined text-3xl text-primarycolorDark">
                    {props.icon}
                </span>
                <p className="text-lg font-bold">
                    {props.title}
                </p>
            </div>
            <div className="hoverup absolute min-h-[230px] p-7 mt-1 flex flex-col text-white  translate-y-full bg-primarycolor rounded-tl-3xl rounded-tr-3xl">
                    <span class="material-symbols-outlined text-3xl  ">
                        {props.icon}
                    </span>
                    <p className="text-lg font-bold my-2">
                        {props.name}
                    </p>
                    <p>
                        {props.decs}
                    </p>
            </div>
        </div>
    );
}


export default InforPlan