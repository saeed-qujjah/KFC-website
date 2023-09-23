import React from 'react';
import KfsImg from '../assests/images/RedHotDuo_En_Qat_08021.png'
import Explore from '../components/Explore/Explore';
import TopDeals from '../components/TopDeals/TopDeals';
import Bestsellers from '../components/Bestsellers/Bestsellers';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import { useSelector } from 'react-redux';



const Home = () => {
    const isLoading = useSelector((state) => state.meals.isLoading)



    return (
        <div>
            <img src={KfsImg} alt='' />
            {isLoading ? <p className='mt-16 text-5xl text-[var(--p-color)] font-bold text-center'>Loading...</p> : <>
                <Explore />
                <TopDeals />
                <Bestsellers />
                <About />
                <Footer />
            </>}
        </div >
    );
}

export default Home;
