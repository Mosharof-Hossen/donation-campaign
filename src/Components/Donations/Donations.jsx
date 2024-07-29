import { useLoaderData } from "react-router-dom";
import { getStorageCart } from "../../Utilitis/LocalStorage";


const Donations = () => {
    const donationsId = getStorageCart();
    const data = useLoaderData();
    const filteredData = data.filter((dt)=>donationsId.includes(dt.id));
    console.log(filteredData);
    return (
        <div>
            
        </div>
    );
};

export default Donations;