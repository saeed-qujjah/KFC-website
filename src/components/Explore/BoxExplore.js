import React from 'react';

const BoxExplore = ({ meal, onShowDetails }) => {
    return (
        <div onClick={() => onShowDetails(meal)} className='cursor-pointer min-w-[190px] mr-11 relative h-[186px] bg-[#FFFFFF] rounded-tr-full rounded-tl-full rounded-bl-full'>
            <img src={meal.photo} className='h-[126px] absolute top-[-26px] left-5' alt='' />
            <div className='absolute w-[18px] h-[18px] bg-[var(--div-color)] bottom-[9px] right-[9px] rounded-full'></div>
            <p className='text-[var(--p-color)] text-center w-[136px] font-semibold text-[14px] absolute bottom-[47px] left-[28px] after:content-[""] after:absolute after:bottom-[-11px] after:left-[50px] after:h-[4px] after:rounded-l-full after:rounded-r-full after:w-[40px] after:bg-[var(--border-color)]'>{meal.explain}</p>
        </div>
    );
}

export default BoxExplore;
