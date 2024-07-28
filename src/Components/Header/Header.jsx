import { Link, NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <div className="navbar ">
            <div className=" rounded-full flex-1">
                <Link to={"/"}>
                    <img
                        className="w-36"
                        alt="Tailwind CSS Navbar component"
                        src="https://i.ibb.co/DLVQhWN/Logos.png" />
                </Link>
            </div>

            <div className="flex-none">
                <ul className=" menu-horizontal px-1 space-x-8 font-semibold">
                    <li ><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/donations"}>Donation</NavLink></li>
                    <li><NavLink to={"/statistics"}>Statistics</NavLink></li>

                </ul>
            </div>
        </div>
    );
};

export default Header;