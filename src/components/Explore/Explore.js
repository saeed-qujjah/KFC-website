import React, { useRef, useState } from 'react';
import menu from '../../assests/images/explore-menu1.png'
import arrowRight from '../../assests/icons/arrow-right.png'
import right from '../../assests/icons/right.png'
import left from '../../assests/icons/left-arrow(1).png'
import BoxExplore from './BoxExplore';
import DetailsMeal from '../DetailsMeal';
import UseAxiosGet from '../../hooks/useAxiosGet';
import { API } from '../../data/config';


const Explore = () => {
    const ref = useRef()
    const [showDetails, setShowDetails] = useState(false)
    const { data: menuData } = UseAxiosGet(API.EXPLORE_MENU);

    console.log(menuData)

    const sideScroll = (
        element,
        speed,
        distance,
        step
    ) => {
        let scrollAmount = 0;
        console.log(ref.current.scrollLeft)
        const slideTimer = setInterval(() => {
            element.scrollLeft += step;
            scrollAmount += Math.abs(step);
            if (scrollAmount >= distance) {
                clearInterval(slideTimer);
            }
        }, speed);
    };

    return (
        <div className='mt-[27px] w-[1280px] px-[117px] relative'>
            {showDetails && <DetailsMeal meal={showDetails} onShowDetails={setShowDetails} />}
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <p className='mr-[8px] relative text-[14px] after:content-[""] after:absolute after:bottom-[-3px] after:left-0 after:h-[3px] after:w-[36px] after:bg-[var(--red-color)] font-bold text-[var(--p-color)]'>EXPLORE MENU</p>
                    <img className='w-[22px]' src={menu} alt='' />
                </div>
                <div className='flex items-center cursor-pointer'>
                    <p className='mr-2 text-[14px] font-semibold text-[var(--blue-color)]'>View All</p>
                    <img className='w-[13px]' src={arrowRight} alt='' />
                </div>
            </div>
            <img src={left} alt='' className='cursor-pointer w-[17px] absolute left-[66px] top-[59%]' onClick={() => { sideScroll(ref.current, 25, 100, -250); }} />
            <img src={right} alt='' className='cursor-pointer w-[17px] absolute right-[66px] top-[59%]' onClick={() => { sideScroll(ref.current, 25, 100, 250); }} />
            <div className='relative overflow-auto scroll-smooth no-scrollbar' ref={ref}>
                <div className='mt-[46px] flex items-center relative'>
                    {menuData?.map((meal) => {
                        return <BoxExplore meal={meal} onShowDetails={setShowDetails} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Explore;
