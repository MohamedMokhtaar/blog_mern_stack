import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className= "w-full flex justify-between items-center bg-gray-800 text-white p-4">
            <div>
                <h1 className="text-2xl font-bold"><Link to="/">Dugsiiye </Link></h1>
            </div>
            
            <nav>
                <ul className="flex space-x-4">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>

                </ul>
            </nav>
        </header>
    )
    
};

export default Header