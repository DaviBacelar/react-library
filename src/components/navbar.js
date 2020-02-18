import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <img className="marvel-logo" src={logo} />
            </div>
            <div className="menu">
                <Link to="/"><a>Home</a></Link>
                {/* <Link to="/category"><a>Categories</a></Link> */}
                {/* <Link to="/book"><a>Book</a></Link> */}
                {/* <Link to="/create"><a>Create</a></Link> */}
                {/* <Link to="/edit"><a>Edit</a></Link> */}
            </div>
        </div>
    )
}

export default Navbar