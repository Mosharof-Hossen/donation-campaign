import { useContext } from "react";
import { FilterByInputValue } from "../../App";


const Banner = () => {

    const { filterFun, inputValue} = useContext(FilterByInputValue);
    return (
        <div
            className="hero h-[500px]"
            style={{
                backgroundImage: "url(https://i.ibb.co/W3n4vFY/coverbackground.png)",
            }}>
            <div className="hero-overlay bg-opacity-20 blur-lg"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
                    <div className="join w-2/3">
                        <input onChange={(e)=>filterFun(e.target.value)} className="input w-full join-item text-black" value={inputValue} placeholder="Search By Category" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;