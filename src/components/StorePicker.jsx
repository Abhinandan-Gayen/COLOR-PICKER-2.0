import React from 'react';

const StorePicker = ({storedata}) => {
    let hex = storedata.hex
    const ApplyColor = (event)=>{
        event.target.style.backgroundColor = hex
    }
    return (
        <div className='w-[35vw] bg-amber-00 grid grid-cols-4 grid-rows-5 md:grid-cols-5 md:grid-rows-4 gap-y-2 gap-x-[85px] md:gap-x-6 mx-auto mt-5'>
            {Array.from({length:30}).map((_,index)=>(
                <div key={index} onClick={ApplyColor} className='h-20 w-[80px] rounded-xl border-2'></div>
            ))}
        </div>
    );
};

export default StorePicker;