import React, { useEffect, useState } from 'react';
import { activeAction } from '../store/active-ui';
import { useDispatch, useSelector } from 'react-redux';
import BoxTopDeals from '../components/TopDeals/BoxTopDeals';
import DetailsMeal from '../components/DetailsMeal';
import img from "../assests/images/photo_2023-09-23_15-17-26.jpg"

const AllDeals = () => {
    const dispatch = useDispatch();
    const dealsData = useSelector((state) => state.meals.dealsData)
    const [showDetails, setShowDetails] = useState(false)

    useEffect(() => {
        dispatch(activeAction.replaceActiveState(0))

        return (() => {
            dispatch(activeAction.replaceActiveState(10))
        })
    }, [])

    return (
        <>
            {showDetails && <DetailsMeal meal={showDetails} onShowDetails={setShowDetails} />}
            <div className='flex justify-between items-start px-[66px] mt-[87px] pb-[50px]'>
                <div className='w-[750px] mt-[81px] grid gap-y-[170px] gap-x-[44px]' style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(218px, 1fr))' }}>
                    {dealsData?.map((meal) => {
                        return <BoxTopDeals key={meal.id} meal={meal} onShowDetails={setShowDetails} />;
                    })}
                </div>
                <div className='w-[354px]'>
                    <div className='w-[100%] h-[44px] relative bg-[#F5FAFF] text-[var(--p-color)] text-[18px] font-bold rounded-tl-[9px] rounded-tr-[9px] flex justify-center items-center'>
                    Choose Your Meal
                    <div className='w-[57px] h-[16px] flex justify-between items-center absolute top-0 right-[27px]'>
                    <span className='w-[16px] h-[100%] bg-[var(--red-color)]'></span>
                    <span className='w-[16px] h-[100%] bg-[var(--red-color)]'></span>
                    <span className='w-[16px] h-[100%] bg-[var(--red-color)]'></span>
                </div>
                    </div>
                    <div className='w-[100%] mt-[-1px] h-[332px] rounded-tl-[9px] rounded-tr-[9px] flex justify-center items-center bg-[#FFFFFF]'>
                        <img src={img} alt='' className='h-[317px]'/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AllDeals;
