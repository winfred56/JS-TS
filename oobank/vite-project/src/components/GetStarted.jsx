
import React from 'react';
import style from "../style.js";
import {arrowUp} from "../assets"

const GetStarted = () => (
    <div className={`${style.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient cursor-pointer p-[2px]`}>
        <div className={`${style.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
            <div className={`${style.flexStart} flex-row`}>
                <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
                    <span className="text-gradient">Get</span>
                </p>
                <img src={arrowUp} className="w-[23px] h-[23px] object-contain" alt="arrowUp"/>

            </div>
            <p className="font-poppins font-medium text-[18px] leading-[23px]">
                <span className="text-gradient">Started</span>
            </p>
        </div>
    </div>
);

export default GetStarted