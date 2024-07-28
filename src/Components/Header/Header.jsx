import { Link, NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {

    const link = <>

        <li ><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/donations"}>Donation</NavLink></li>
        <li><NavLink to={"/statistics"}>Statistics</NavLink></li>

    </>


    return (

        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className=" menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-fit p-2 shadow">
                            {
                                link
                            }
                        </ul>
                    </div>
                    <div className=" rounded-full flex-1">
                        <Link to={"/"}>
                            <img
                                className="w-36"
                                alt="Tailwind CSS Navbar component"
                                src="https://i.ibb.co/DLVQhWN/Logos.png" />
                        </Link>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className=" menu-horizontal px-1 space-x-8 font-semibold">
                        {
                            link
                        }
                    </ul>
                </div>
            </div>
        </div>
        
    );
};

export default Header;