import React from 'react';
import k from '../assests/icons/Vector(4).png'
import f from '../assests/icons/Vector(5).png'
import c from '../assests/icons/Vector(6).png'


const Navbar = () => {

    return (
        <div className='h-[54px] w-[1280px] bg-[#FFFFFF] pl-[29px] pr-4 flex justify-between items-center pt-[4px] shadow-gray-400 shadow-md mb-2'>
            <div className='flex items-center w-[80%]'>
                <span className='w-[25px] pt-2 flex flex-wrap justify-end mr-[11px]'>
                    <span className='h-[2px] w-[100%] bg-[var(--p-color)] mb-[4px]'></span>
                    <span className='h-[3px] w-[100%] bg-[var(--p-color)] mb-[4px]'></span>
                    <span className='h-[3px] w-[40%] bg-[var(--p-color)]'></span>
                </span>
                <div className='flex mr-[19px] pt-2'>
                    <img src={k} alt='' />
                    <img src={f} alt='' />
                    <img src={c} alt='' />
                </div>
                <div className='w-[107px] mr-[14px] h-[37px] border-[2px] rounded-lg border-[var(--red-color)]'></div>
                <div className='w-[84px] mr-[14px] h-[37px] border-[2px] rounded-lg border-[var(--white-color)]'></div>
                <div className='w-[107px] mr-[14px] h-[37px] border-[2px] rounded-lg border-[var(--white-color)]'></div>
                <div className='w-[84px] mr-[14px] h-[37px] border-[2px] rounded-lg border-[var(--white-color)]'></div>
                <div className='w-[103px] h-[37px] border-[2px] rounded-lg border-[var(--white-color)]'></div>
            </div>
            <div className='bg-[#FEF2F4] font-light h-[37px] flex text-[14px] justify-center items-center text-[var(red-color)] w-[60px] rounded-lg border-[2px] border-[var(--red-color)]'>
                عربي
            </div>
            <div></div>
        </div>
    );
}

export default Navbar;
