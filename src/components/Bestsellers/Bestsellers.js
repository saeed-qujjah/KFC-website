import React from 'react';
import meal1 from '../../assests/images/Super_Dinner_Meal_english_06101.png'
import meal2 from '../../assests/images/Super_Meal_english_06101.png'
import meal3 from '../../assests/images/Twister_Box_english_05081.png'
import meal4 from '../../assests/images/MightyZingerBox_QAT_En_11011.png'
import BoxImg from './BoxImg';

const Bestsellers = () => {
    const bestsellers = [meal1, meal2, meal3, meal4]
    return (
        <div className='mt-[32px] w-[1280px] px-[117px] relative'>
            <div className='flex items-center'>
                <p className='mr-[8px] relative text-[14px] after:content-[""] after:absolute after:bottom-[-3px] after:left-0 after:h-[3px] after:w-[36px] after:bg-[var(--red-color)] font-bold text-[var(--p-color)]'>Bestsellers</p>
            </div>
            <div className='relative overflow-auto scroll-smooth no-scrollbar'>
                <div className='mt-[57px] flex items-center relative'>
                    {bestsellers.map((img) => {
                        return <BoxImg key={Math.random()} img={img} />;
                    })}
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
