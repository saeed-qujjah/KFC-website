import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import KfsImg from '../assests/images/RedHotDuo_En_Qat_08021.png'
import Explore from '../components/Explore/Explore';
import TopDeals from '../components/TopDeals/TopDeals';
import Bestsellers from '../components/Bestsellers/Bestsellers';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import { API } from '../data/config';
import axios from 'axios';



const Home = () => {
    const pageRef = useRef(null);
    const location = useLocation();
    // const { data: menuData, isLoading } = UseAxiosGet(API.EXPLORE_MENU);
    const [menuData, setMenuData] = useState([])
    const [dealsData, setDealsData] = useState([])
    const [exploreLoading, setExploreLoading] = useState(true)
    const [dealsLoading, setDealsLoading] = useState(true)
    const isLoading = dealsLoading || exploreLoading


    useEffect(() => {
        axios.get(API.EXPLORE_MENU).then((res) => { setMenuData(res.data); setExploreLoading(false) })
        axios.get(API.TOP_DEALS).then((res) => { setDealsData(res.data); setDealsLoading(false) })
    }, [])

    useEffect(() => {
        pageRef.current.scrollIntoView({ behavior: "smooth" });
    }, [location]);

    return (
        <div className={`w-[1280px] ${isLoading ? 'h-[99vh]' : 'h-auto'} bg-[var(--background-color)] shadow-gray-400 shadow-md m-auto`} ref={pageRef}>
            <Navbar />
            <img src={KfsImg} alt='' />
            {isLoading ? <p className='mt-16 text-5xl text-[var(--p-color)] font-bold text-center'>Loading...</p> : <>
                <Explore menuData={menuData} />
                <TopDeals dealsData={dealsData} />
                <Bestsellers />
                <About />
                <Footer />
            </>}
        </div >
    );
}

export default Home;
