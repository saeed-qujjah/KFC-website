import React from 'react';

const Navbar = () => {

    return (
        <div className='h-[54px] w-[1280px] bg-[#FFFFFF] px-7 flex justify-between items-center pt-1 shadow-gray-400 shadow-md mb-2'>
            <div className='flex items-center w-[80%]'>
                <span className='w-[25px] flex flex-wrap justify-end mr-2'>
                    <span className='h-[2px] w-[100%] bg-[var(--p-color)] mb-[4px]'></span>
                    <span className='h-[3px] w-[100%] bg-[var(--p-color)] mb-[4px]'></span>
                    <span className='h-[3px] w-[40%] bg-[var(--p-color)]'></span>
                </span>
                <p className='text-3xl mr-4 text-[var(--red-color)] font-extrabold italic'>KFC</p>
                {/* <div className='flex justify-between items-center w-[50%]'> */}
                    <div className='w-[100px] mr-3 h-[35px] border-[2px] rounded-lg border-[var(--red-color)]'></div>
                    <div className='w-[80px] mr-3 h-[35px] border-[2px] rounded-lg border-[var(--white-color)]'></div>
                    <div className='w-[110px] mr-3 h-[35px] border-[2px] rounded-lg border-[var(--white-color)]'></div>
                    <div className='w-[90px] mr-3 h-[35px] border-[2px] rounded-lg border-[var(--white-color)]'></div>
                    <div className='w-[100px] h-[35px] border-[2px] rounded-lg border-[var(--white-color)]'></div>
                {/* </div> */}
            </div>
            <div className='bg-[#FEF2F4] h-[35px] flex justify-center items-center text-[var(red-color)] w-[60px] rounded-lg border-[2px] border-[var(--red-color)]'>
                عربي
            </div>
            <div></div>
        </div>
    );
}

export default Navbar;
