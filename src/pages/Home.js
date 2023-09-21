import React from 'react';
import Navbar from '../components/Navbar';
import KfsImg from '../assests/images/RedHotDuo_En_Qat_0802 1.png'
import Explore from '../components/Explore/Explore';

const Home = () => {
    return (
        <div className='w-[1280px] bg-[var(--background-color)] shadow-gray-400 shadow-md m-auto'>
            <Navbar/>
            <img src={KfsImg} alt=''/>
            <Explore/>
        </div>
    );
}

export default Home;
