import { useLoaderData } from "react-router-dom";
import { getStorageCart } from "../../Utilitis/LocalStorage";
import { useEffect, useState } from "react";
import DonationCart from "../DonationCart/DonationCart";


const Donations = () => {
    const [donationList, setDonationList] = useState([]);
    const data = useLoaderData();
    useEffect(() => {
        const donationsId = getStorageCart();
        const filteredData = data.filter((dt) => donationsId.includes(dt.id));
        setDonationList(filteredData)
    }, [data])

    console.log(donationList);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 mt-12">
            {
                donationList.map((donation)=><DonationCart key={donation.id}donation={donation}></DonationCart>)
            }
        </div>
    );
};

export default Donations;