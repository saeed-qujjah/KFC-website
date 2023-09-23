import React from 'react';

const DetailsMeal = ({ meal, onShowDetails }) => {
    return (
        <div
            style={{ backgroundColor: "rgb(120 121 123/ 70%)" }}
            className="fixed w-[100%] h-[100vh] top-0 right-0 z-[1000] flex justify-center items-center"
        >
            <div className='fixed top-4 w-[34px] h-[34px] cursor-pointer bg-[#FFFFFF] text-[var(--p-color)] flex justify-center items-center font-bold rounded-[25%]' onClick={() => onShowDetails(false)}>X</div>
            <div className="fixed top-[10%] shadow-lg rounded-[10%] w-[548px] h-[560px] bg-[var(--background-color)]">
                <div className='w-[89px] h-[25px] flex mt-1 justify-between items-center mx-auto'>
                    <span className='w-[23px] h-[100%] bg-[var(--red-color)]'></span>
                    <span className='w-[23px] h-[100%] bg-[var(--red-color)]'></span>
                    <span className='w-[23px] h-[100%] bg-[var(--red-color)]'></span>
                </div>
            </div>
            <div className='mt-[153px] relative bg-[#FFFFFF] rounded-md w-[398px] h-[330px]'>
                <img src={meal.photo} className='h-[222px] absolute top-[-120px] left-[16%]' alt='' />
                <p className='text-[var(--p-color)] font-bold text-center mt-[116px]'>{meal.name}</p>
                <p className='text-[#6A6E8E] text-[12px] font-light mt-[23px] text-center'>{meal.description}</p>
                <div className='absolute bottom-[-27px] left-[24px] w-[350px] h-[54px] flex justify-center items-center bg-[var(--red-color)] text-[#FFFFFF] rounded-md text-[14px]'>{meal.price} QAR</div>
            </div>
        </div>
    );
}

export default DetailsMeal;
