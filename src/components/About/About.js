import React from 'react';
import kfc from '../../assests/images/banner_fav_order_En_17081.png'
import kfc1 from '../../assests/images/banner_pickup_En_0508_41.png'
import kfc2 from '../../assests/images/460-Combo1.png'
import kfc3 from '../../assests/images/Group50.png'

const About = () => {
    return (
        <div className='mt-[32px] w-[1280px] px-[117px] relative grid gap-x-[44px] gap-y-[76px]' style={{gridTemplateColumns:'repeat(auto-fill, minmax(500px, 1fr))'}}>
            <img src={kfc} alt='' className='cursor-pointer rounded-md w-[500px]'/>
            <img src={kfc1} alt='' className='cursor-pointer rounded-md w-[500px]'/>
            <div className='cursor-pointer w-[502px] h-[309px] bg-[#FFFFFF] rounded-md relative flex items-center' style={{fontFamily:'Ibarra Real Nova'}}>
                <p className='w-[155px] ml-[22px] text-center text-[var(--p-color)] leading-[50px] text-[45px] font-bold'>Twister Box Meal</p>
                <img src={kfc2} alt='' className='absolute right-0'/>
                <div className='bg-[var(--red-color)] text-[#FFFFFF] rounded-full w-[44px] h-[44px] text-center pt-[14px] absolute top-[6px] left-[171px] text-[14px] font-semibold'>NEW</div>
                <div className='absolute left-[24px] bottom-0 w-[54px] h-[19px] flex justify-between items-center'>
                    <span className='w-[12px] h-[100%] bg-[var(--red-color)]'></span>
                    <span className='w-[12px] h-[100%] bg-[var(--red-color)]'></span>
                    <span className='w-[12px] h-[100%] bg-[var(--red-color)]'></span>
                </div>
            </div>
            <img src={kfc3} alt='' className='cursor-pointer rounded-md w-[500px]'/>
        </div>
    );
}

export default About;
