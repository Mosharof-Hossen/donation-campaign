import { useLoaderData } from "react-router-dom";
import { getStorageCart } from "../../Utilitis/LocalStorage";
import { useEffect, useState } from "react";
import DonationCart from "../DonationCart/DonationCart";


const Donations = () => {
    const [donationList, setDonationList] = useState([]);
    const [displayDonationList, setDisplayDonationList] = useState([])
    const data = useLoaderData();
    useEffect(() => {
        const donationsId = getStorageCart();
        const filteredData = data.filter((dt) => donationsId.includes(dt.id));
        setDonationList(filteredData);
        setDisplayDonationList(filteredData.slice(0,4));

    }, [data])

    // if (donationList.length > 4) {
    //     setDisplayDonationList(donationList.slice(0, 4))
    // }

    const handleSeeAll = () => {
        setDisplayDonationList(donationList);
    }


    console.log(displayDonationList);
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 mt-12">
                {
                    displayDonationList.map((donation) => <DonationCart key={donation.id} donation={donation}></DonationCart>)
                }
            </div>
            <div className={displayDonationList.length == donationList.length ? "hidden" : "text-center"}>
                <button onClick={handleSeeAll} className="rounded text-white px-3 py-1 bg-[#009444]">See All</button>
            </div>
        </>
    );
};

export default Donations;