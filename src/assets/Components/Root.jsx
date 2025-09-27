import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar';

const Root = () => {
    return (
        <div className='w-max-4xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;