import React from 'react';
import menu1 from "../../assests/images/ic_deals@3x0211 1.png"
import menu2 from "../../assests/images/ic_for_one@3x0211 1.png"
import menu3 from "../../assests/images/ic_for_sharing@3x0211 1.png"
import menu4 from "../../assests/images/ic_side_and_desserts@3x02110 1.png"
import menu5 from "../../assests/images/ic_beverages_kwt_0211 1.png"

const BoxExplore = () => {
    return (
        <div className='w-[190px] relative h-[186px] bg-[#FFFFFF] rounded-tr-full rounded-tl-full rounded-bl-full'>
            <img src={menu1} className='h-[126px] absolute top-[-26px] left-5' alt=''/>
            <div className='absolute w-[18px] h-[18px] bg-[var(--div-color)] bottom-2 right-2 rounded-full'></div>
            <p className='text-[var(--p-color)] font-semibold text-sm absolute bottom-12 left-[15%] after:content-[""] after:absolute after:bottom-[-13px] after:left-[50px] after:h-[4px] after:rounded-l-full after:rounded-r-full after:w-[40px] after:bg-[var(--border-color)]'>EXCLUSIVE OFFERS</p>
        </div>
    );
}

export default BoxExplore;
