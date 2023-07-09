import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center gap-y-3'>
            <h1 className='text-3xl font-bold'>404! Page Not Found!</h1>
            <Link className='bg-green-400 text-white py-1 px-2 rounded-lg text-lg' to="/">Back to Home</Link>
        </div>
    );
};

export default NotFound;