import topDeals from '../../assests/images/top-deals1.png'
import arrowRight from '../../assests/icons/arrow-right.png'
import React, { useEffect, useRef, useState } from 'react';
import right from '../../assests/icons/right-arrow(1).png'
import left from '../../assests/icons/arrow.png'
import BoxTopDeals from './BoxTopDeals';
import DetailsMeal from '../DetailsMeal';

const TopDeals = ({ dealsData }) => {
    const ref = useRef()
    const [showDetails, setShowDetails] = useState(false)
    const [showLeftArrow, setShowLeftArrow] = useState(false)

    useEffect(() => {
        if (!ref.current) return
        ref.current.scrollLeft = 0;
    }, [])

    return (
        <div className='mt-[48px] w-[1280px] px-[117px] relative'>
            {showDetails && <DetailsMeal meal={showDetails} onShowDetails={setShowDetails} />}
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <p className='mr-[8px] relative text-[14px] after:content-[""] after:absolute after:bottom-[-3px] after:left-0 after:h-[3px] after:w-[36px] after:bg-[var(--red-color)] font-bold text-[var(--p-color)]'>TOP DEALS</p>
                    <img className='w-[22px]' src={topDeals} alt='' />
                </div>
                <div className='flex items-center cursor-pointer'>
                    <p className='mr-2 text-[14px] font-semibold text-[var(--blue-color)]'>View All</p>
                    <img className='w-[13px]' src={arrowRight} alt='' />
                </div>
            </div>
            {showLeftArrow && <img src={left} alt='' className='cursor-pointer w-[17px] absolute left-[64px] top-[60%]' onClick={() => { ref.current.scrollLeft = 0; setShowLeftArrow(false) }} />}
            {!showLeftArrow && <img src={right} alt='' className='cursor-pointer w-[17px] absolute right-[64px] top-[60%]' onClick={() => { ref.current.scrollLeft += 23232; setShowLeftArrow(true) }} />}
            <div className='relative overflow-auto scroll-smooth no-scrollbar' ref={ref}>
                <div className='mt-[156px] flex items-center relative'>
                    {dealsData?.map((meal) => {
                        return <BoxTopDeals key={meal.id} meal={meal} onShowDetails={setShowDetails} />;
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

export default TopDeals;
