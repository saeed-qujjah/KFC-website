import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Kfc = () => {
    const pageRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: -10,
            behavior: "smooth",
        });
    }, [location]);

    return (
        <div className={`w-[1280px] min-h-[99vh] bg-[var(--background-color)] shadow-gray-400 shadow-md m-auto`} ref={pageRef}>
            <Navbar />
            <Outlet></Outlet>
        </div>
    );
}

export default Kfc;
