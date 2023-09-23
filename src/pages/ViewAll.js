import React from 'react';
import NavBarViewAll from '../components/ViewAll/NavBarViewAll';
import { Outlet } from 'react-router-dom';

const ViewAll = () => {
    return (
        <div>
            <NavBarViewAll/>
            <Outlet></Outlet>
        </div>
    );
}

export default ViewAll;
