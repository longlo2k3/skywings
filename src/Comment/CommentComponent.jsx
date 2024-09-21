import React from "react";


const CommentComponent = (props) =>{
    return(
        <div className="min-h-fit w-[371px]">
            <div className="flex flex-col p-1  rounded-3xl  hover:bg-primarycolor bg-gray-100">
                <div className="bg-white rounded-3xl p-4">
                    <span class="material-symbols-outlined text-primarycolor">
                        star
                    </span>
                    <span class="material-symbols-outlined text-primarycolor">
                        star
                    </span>
                    <span class="material-symbols-outlined text-primarycolor">
                        star
                    </span>
                    <span class="material-symbols-outlined text-primarycolor">
                        star
                    </span>
                    <span class="material-symbols-outlined text-primarycolor">
                        star
                    </span>
                    <p className="min-h-[180px]">
                        {props.comment}
                    </p>
                </div>
                <div className="flex flex-row items-center p-4 gap-4">
                    <img src={props.img} alt="" className="w-12 h-12 rounded-full"/>
                    <div className="leading-5">
                        <h1 className="font-semibold">{props.name}</h1>
                        <p className="text-gray-600">{props.career}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentComponent