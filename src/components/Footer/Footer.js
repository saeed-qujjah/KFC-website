import React from 'react';
import k from '../../assests/icons/Vector(1).png'
import f from '../../assests/icons/Vector(2).png'
import c from '../../assests/icons/Vector(3).png'
import faceBook from '../../assests/icons/Frame(2).png'
import twitter from '../../assests/icons/Frame(1).png'
import instagram from '../../assests/icons/Frame.png'


const Footer = () => {
    return (
        <div className='mt-[33px] w-[1280px] bg-[var(--p-color)] text-[#ADAEB1] relative'>
            <div className='flex pt-[27px] w-fit mx-auto'>
                <img src={k} alt=''/>
                <img src={f} alt=''/>
                <img src={c} alt=''/>
            </div>
            <p className='text-[14px] font-semibold mt-[31px] w-[534px] mx-auto text-center'>Items availability, prices, participation, delivery areas and charges, purchase requirements for delivery may vary.</p>
            <ul className='text-[#FFFFFF] flex justify-between items-center mx-auto w-[842px] pl-10 text-[14px] font-light mt-[27px]'>
                <li className='cursor-pointer hover:text-[#ADAEB1] transition-all'>Menu</li>
                <li className='cursor-pointer hover:text-[#ADAEB1] transition-all'>Store Locations</li>
                <li className='cursor-pointer hover:text-[#ADAEB1] transition-all'>Privacy Policy</li>
                <li className='cursor-pointer hover:text-[#ADAEB1] transition-all'>Terms & Conditions</li>
                <li className='cursor-pointer hover:text-[#ADAEB1] transition-all'>Contact</li>
            </ul>
            <div className='mt-[27px] flex w-fit items-center mx-auto'>
                <img src={faceBook} alt='' className='mr-[57px] cursor-pointer'/>
                <img src={twitter} alt='' className='mr-[55px] cursor-pointer'/>
                <img src={instagram} alt='' className='cursor-pointer'/>
            </div>
            <p className='mt-[27px] text-center text-[14px] font-light'>©KFC, Inc. All rights reserved.</p>
            <div className='w-[62px] h-[18px] mt-[21px] flex justify-between items-center mx-auto'>
                    <span className='w-[16px] h-[100%] bg-[#FFFFFF]'></span>
                    <span className='w-[16px] h-[100%] bg-[#FFFFFF]'></span>
                    <span className='w-[16px] h-[100%] bg-[#FFFFFF]'></span>
                </div>
        </div>
    );
}

export default Footer;
