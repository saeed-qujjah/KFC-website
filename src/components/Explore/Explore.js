import React from 'react';
import menu from '../../assests/images/explore-menu 1.png'
import arrowRight from '../../assests/icons/arrow-right.png'
import right from '../../assests/icons/right.png'
import BoxExplore from './BoxExplore';


const Explore = () => {
    return (
        <div className='mt-6 w-[1280px] px-32'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <p className='mr-2 relative text-sm after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-[30%] after:bg-[var(--red-color)] font-bold text-[var(--p-color)]'>EXPLORE MENU</p>
                    <img className='w-[22px]' src={menu} alt=''/>
                </div>
                <div className='flex items-center'>
                    <p className='mr-2 font-bold text-[var(--blue-color)]'>View All</p>
                    <img className='w-[15px]' src={arrowRight} alt=''/>
                </div>
            </div>
            <div className='mt-12 pb-32'>
            <BoxExplore/>
            </div>
        </div>
    );
}

export default Explore;
