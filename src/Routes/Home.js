import React from 'react';
import {Link} from "react-router-dom";

const Home = (props) => (
    <ul className='flex gap-6 w-screen justify-center'>
        <li className='text-4xl p-6'>
            <Link to='/'>
                Home
            </Link>
        </li>
        <li className='text-4xl p-6'>
            <Link to='/resume'>
                Resume
            </Link>
        </li>
        <li className='text-4xl p-6'>
            <Link to='/horror'>
                Horror
            </Link>
        </li>
        <li className='text-4xl p-6'>
            <Link to='/tolv'>
                Tolv
            </Link>
        </li>
    </ul>
);

export default Home;