import React from 'react';
import Navbar from '../components/Navbar';
import KfsImg from '../assests/images/RedHotDuo_En_Qat_08021.png'
import Explore from '../components/Explore/Explore';
import TopDeals from '../components/TopDeals/TopDeals';
import Bestsellers from '../components/Bestsellers/Bestsellers';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <div className='w-[1280px] bg-[var(--background-color)] shadow-gray-400 shadow-md m-auto'>
            <Navbar />
            <img src={KfsImg} alt='' />
            <Explore />
            <TopDeals />
            <Bestsellers />
            <About/>
            <Footer/>
        </div>
    );
}

export default Home;
