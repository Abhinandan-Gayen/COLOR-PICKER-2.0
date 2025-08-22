import React from 'react';

const ColorCode = ({dataFrompick}) => {

    return (
        <div className="h-[25vh] md:h-[31vh] lg:h-[33vh] w-fit mx-auto bg-green-00 text-white">
                
            <fieldset className="border-[1px] w-[380px] md:w-[500px] lg:w-[500px] px-2 mb-2 rounded-md ">
                <legend className="">HEX</legend>
                    <div className="h-8 w-full sm:w-full md:full lg:full text-center">{dataFrompick.hex}</div>
            </fieldset>
            <div className="flex gap-4 w-[380px] md:w-[500px] lg:w-[500px] mb-2">
                <fieldset className="border-[1px] px-4 mb-2 rounded-md w-[50%]">
                    <legend className="">RGB</legend>
                        <div className="h-8 bg-gray-00 text-center">{dataFrompick.rgb.r}, {dataFrompick.rgb.g}, {dataFrompick.rgb.b}</div>
                </fieldset>
                <fieldset className="border-[1px] px-4 mb-2 rounded-md w-[50%]">
                    <legend className="">CMYK</legend>
                        <div className="h-8 bg-gray-00 text-center">76°, 0%, 66%, 53%</div>
                </fieldset>
            </div>
            <div className="flex gap-4 w-[380px] md:w-[500px] lg:w-[500px]">
                <fieldset className="border-[1px] px-4 mb-2 rounded-md w-[50%]">
                    <legend className="">HSV</legend>
                        <div className="h-8 bg-gray-00 text-center">{Math.floor(dataFrompick.hsv.h)}°, {Math.floor(dataFrompick.hsv.s)}%, {Math.floor(dataFrompick.hsv.v)}% </div>
                </fieldset>
                <fieldset className="border-[1px] px-4 mb-2 rounded-md w-[50%]">
                    <legend className="">HSL</legend>
                        <div className="h-8 bg-gray-00 text-center">{dataFrompick.hsl.h}°, {dataFrompick.hsl.s}%, {dataFrompick.hsl.l}%</div>
                </fieldset>
            </div>
        </div>
    );
};

export default ColorCode;