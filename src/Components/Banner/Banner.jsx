import { useContext } from "react";
import { FilterByInputValue } from "../../App";


const Banner = () => {

    const { filterFun, inputValue } = useContext(FilterByInputValue);
    return (
        <div
            className="hero h-[450px]"
            style={{
                backgroundImage: "url(https://i.ibb.co/W3n4vFY/coverbackground.png)",
            }}>
            <div className="hero-overlay bg-opacity-15 blur-lg"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold text-black" style={{textShadow:'2px 2px 4px rgba(0, 0, 0, 0.8)'}}>I Grow By Helping People In Need</h1>
                    <div className="join w-2/3 mt-5">
                        <input onChange={(e) => filterFun(e.target.value)} className="input w-full join-item text-black" value={inputValue} placeholder="Search By Category" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;