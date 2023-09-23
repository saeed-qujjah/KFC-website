import React from 'react';
import { activeAction } from '../../store/active-ui';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import search from '../../assests/icons/search.png'
import { mealsAction } from '../../store/meals';

const NavBarViewAll = () => {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const dealsData = useSelector((state) => state.meals.dealsDataForSearch)
    const exploreData = useSelector((state) => state.meals.exploreDataForSerch)
    const activePage = useSelector((state) => state.active.activePage)

    const clickHandler = (page) => {
        let pageNav = page === 0 ? 'Deals' : 'Explore-menu'
        dispatch(activeAction.replaceActiveState(+page))
        if (page !== 0 && page !== 1) nav(`/KFC/ViewAll/Empty/${page}`)
        else nav(`/KFC/ViewAll/${pageNav}`)
    }

    const searchHandler = (e) => {
        if (activePage !== 0 && activePage !== 1) return
        let factData = activePage === 0 ? dealsData : exploreData
        let searchQuery = e.target.value;
        let resultSearch = factData?.filter((meal) => {
            return (
                meal.name.includes(searchQuery) ||
                meal.description.includes(searchQuery) ||
                meal.price === searchQuery ||
                (activePage === 1 && meal.explain.includes(searchQuery))
            );
        });
        if (searchQuery === "") {
            if (activePage === 0) dispatch(mealsAction.replaceDealsDataSerch(factData))
            else dispatch(mealsAction.replaceExploreDataSearch(factData))
        } else {
            if (activePage === 0) dispatch(mealsAction.replaceDealsDataSerch(resultSearch))
            else dispatch(mealsAction.replaceExploreDataSearch(resultSearch))
        }
    };

    return (
        <div className='w-[883px] h-[56px] m-auto mt-[29px] px-[18px] rounded-[12px] flex justify-between items-center bg-[#FFFFFF]'>
            <ul className='flex w-[80%] justify-between items-center text-[#ADAEB1] text-[14px]'>
                <li className={`${+activePage === 0 && 'active'} py-[11px] px-[12px] flex justify-center items-center hover:text-[var(--red-color)] transition-all cursor-pointer rounded-[4px]`} onClick={() => clickHandler(0)}>Deals</li>
                <li className={`${+activePage === 1 && 'active'} py-[11px] px-[12px] flex justify-center items-center hover:text-[var(--red-color)] transition-all cursor-pointer rounded-[4px]`} onClick={() => clickHandler(1)}>Explore</li>
                <li className={`${+activePage === 2 && 'active'} py-[11px] px-[12px] flex justify-center items-center hover:text-[var(--red-color)] transition-all cursor-pointer rounded-[4px]`} onClick={() => clickHandler(2)}>For One</li>
                <li className={`${+activePage === 3 && 'active'} py-[11px] px-[12px] flex justify-center items-center hover:text-[var(--red-color)] transition-all cursor-pointer rounded-[4px]`} onClick={() => clickHandler(3)}>For Sharing</li>
                <li className={`${+activePage === 4 && 'active'} py-[11px] px-[12px] flex justify-center items-center hover:text-[var(--red-color)] transition-all cursor-pointer rounded-[4px]`} onClick={() => clickHandler(4)}>Sides & desserts</li>
                <li className={`${+activePage === 5 && 'active'} py-[11px] px-[12px] flex justify-center items-center hover:text-[var(--red-color)] transition-all cursor-pointer rounded-[4px]`} onClick={() => clickHandler(5)}>Beverages</li>
                <li className={`${+activePage === 6 && 'active'} py-[11px] px-[12px] flex justify-center items-center hover:text-[var(--red-color)] transition-all cursor-pointer rounded-[4px]`} onClick={() => clickHandler(6)}>Sandwiches</li>
            </ul>
            <div className='relative w-[20%] flex justify-end items-center'>
                <input
                    type='text'
                    className="placeholder:text-[#D9D9D9] focus:border-none focus:outline-none text-[var(--p-color)] text-[14px] placeholder:text-[14px] w-[135px] h-[34px] rounded-[4px] px-[9px] bg-[#F2F9FF]"
                    name="search"
                    placeholder='Search'
                    onChange={searchHandler}
                />
                <img src={search} alt='' className='absolute top-[10px] right-[10px] w-[13px]' />
            </div>
        </div>
    );
}

export default NavBarViewAll;
