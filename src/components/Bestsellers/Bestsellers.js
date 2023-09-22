import React from 'react';
import bestsellers from '../../assests/images/Super_Dinner_Meal_english_0610 1.png'
import BoxImg from './BoxImg';

const Bestsellers = () => {
    return (
        <div className='mt-[32px] w-[1280px] px-[117px] relative'>
            <div className='flex items-center'>
                <p className='mr-[8px] relative text-[14px] after:content-[""] after:absolute after:bottom-[-3px] after:left-0 after:h-[3px] after:w-[36px] after:bg-[var(--red-color)] font-bold text-[var(--p-color)]'>Bestsellers</p>
            </div>
        <div className='relative overflow-auto scroll-smooth no-scrollbar'>
            <div className='mt-[57px] flex items-center relative'>
                <BoxImg />
                <BoxImg />
                <BoxImg />
                <BoxImg />
                <BoxImg />
                <BoxImg />
                <BoxImg />
            </div>
        </div>
        <div className='flex items-center mt-[32px] w-[100%]'>
        <hr className="w-[85%] rounded-l-full rounded-r-full border-[3px] border-[#ADAEB1]"></hr>
        <hr className="w-[15%] rounded-l-full rounded-r-full border-[3px] border-[#D9D9D9]"></hr>
        </div>
    </div>
    );
}

export default Bestsellers;
