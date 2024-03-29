import React from 'react'
import { Link } from 'react-router-dom';
import { BiLogIn } from "react-icons/bi";

const Navbar = () => {
    return (
        <>
            <div style={{
                "background": "rgba(255, 255, 255, 0.2)",

                "border- radius": " 16px",
                "box- shadow": " 0 4px 30px rgba(0, 0, 0, 0.1)",
                "backdrop-filter": "blur(5px)",
                "-webkit-backdrop-filter": "blur(5px)",
            }} className="container sticky top-0 left-0 right-0 flex flex-wrap items-center justify-between w-full px-8 m-auto bg-white group py-7 shrink-0 h-20 ">
                <div className='navyclr'>
                    Navy <span >Ship</span>
                </div>
                <div className="items-center justify-between gap-12 text-black flex">
                    <Link
                        className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900"
                        to="/"
                    >
                        Home
                    </Link>
                    <Link
                        className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900"
                        to="/login"
                    >
                        Quiz
                    </Link>
                </div>
                <div className="items-center gap-8 flex">
                    <Link to="/login" className="flex items-center text-sm font-normal text-gray-800 hover:text-gray-900 transition duration-300">
                        Log In <BiLogIn className='text-lg' />
                    </Link>
                    <Link to="/signup" className="flex items-center px-4 py-2 text-sm font-bold rounded-xl  transition duration-300 topsign">
                        SignUp
                    </Link>
                </div>
            </div ></>
    )
}

export default Navbar
