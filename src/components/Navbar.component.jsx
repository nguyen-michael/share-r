import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Share-r</Link>
            <span><em>NavBAR!!!!</em></span>
        </nav>
    );
};

export default Navbar;