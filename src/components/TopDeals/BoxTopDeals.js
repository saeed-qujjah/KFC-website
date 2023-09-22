import React from 'react';
import menu1 from "../../assests/images/571-Combo 1.png"
import heart from "../../assests/icons/Vector.png"

const BoxTopDeals = () => {
    return (
        <div className='min-w-[217px] mr-[42px] relative h-[251px] bg-[#FFFFFF] rounded-xl'>
            <img src={menu1} className='w-[200px] absolute top-[-115px] left-3' alt=''/>
            <img src={heart} alt='' className='absolute w-[16px] top-[33px] right-[10px]'/>
            <div className='absolute left-0 top-[61px] px-[8px]'>
                <p className='text-sm font-bold text-[var(--p-color)]'>Wings Meal</p>
                <hr className="w-[99%] m-auto my-[9px] rounded-l-full rounded-r-full border-[#D9D9D9]"></hr>
                <p className='text-xs text-[#6A6E8E]'>6pc Wings, Fries, coleslaw, Drink</p>
            </div>
            <div className='absolute bottom-[14px] text-[var(--p-color)] font-bold text-[10px] rounded-lg mx-[9px] w-[199px] h-[37px] bg-[#F0F4FA] flex justify-center items-center'>
            31  QAR
            </div>
        </div>
    );
}

export default BoxTopDeals;