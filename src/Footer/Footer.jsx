import { section } from "framer-motion/m";
import React from "react";
import { FaFacebook,FaInstagram,FaYoutube,FaPhoneAlt} from 'react-icons/fa';
import {IoLocationSharp } from 'react-icons/io5';
import { MdAddLink } from "react-icons/md";

const Footer = ()=>{
    return(
        <section className="bg-gray-100">
            <div className="flex flex-col justify-center items-center ">
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-20 gap-5">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-2xl font-bold">Skywings</h1>
                        <p className="text-gray-500">
                            Explore the world with ease and excitement through our comprehensive travel platform. Your journey begins here, where seamless planning meets unforgettable experiences.
                        </p>
                        <div className="flex flex-row gap-6 text-3xl text-primarycolorDark">
                            <FaFacebook/>
                            <FaInstagram/>
                            <FaYoutube/>
                        </div>
                    </div>
                    <div className="flex flex-col  gap-6">
                        <h1 className="text-xl font-semibold">Quick Links</h1>
                        <p className="text-gray-500">Home</p>
                        <p className="text-gray-500">Flights</p>
                        <p className="text-gray-500">Hotels</p>
                        <p className="text-gray-500">Cruise</p>
                    </div>
                    <div className="flex flex-col items-start gap-6">
                        <h1 className="text-xl font-semibold">Contact Us</h1>
                        <div className="flex flex-col items-start gap-6" >
                            <p className="flex flex-row text-gray-500 justify-center items-center gap-2"><FaPhoneAlt />+91 9876543210</p>
                            <p className="flex flex-row justify-center text-gray-500 items-center gap-2"><MdAddLink />info@skywings</p>
                            <p className="flex flex-row justify-center text-gray-500 items-center gap-2"><IoLocationSharp />Hanoi, Vietnam</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-6">
                        <h1 className="text-xl font-semibold">Subcribe</h1>
                        <input type="text" className="p-2  min-w-full border-[1px] rounded-md border-black " placeholder="Enter your email"/>
                        <button className="p-2 rounded-md bg-primarycolor min-w-full">Subcribe</button>
                    </div>
                </div>
                <div>
                    <p className="text-gray-500 mb-4">Copyright &#169; 2024 Web Design Mastery. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
}

export default Footer