import React from 'react';
import {Link} from "react-router-dom";

const Home = (props) => (
    <ul>
        <li>
            <Link to='/'>
                Home
            </Link>
        </li>
        <li>
            <Link to='/resume'>
                Resume
            </Link>
        </li>
        <li>
            <Link to='/horror'>
                Horror
            </Link>
        </li>
        <li>
            <Link to='/tolv'>
                Tolv
            </Link>
        </li>
    </ul>
);

export default Home;