import { useEffect, useState } from "react";
import Category from "../Category/Category";


const AllCategory = () => {
    const [allCategory, setAllCategory] = useState([]);
    useEffect(()=>{
        fetch("/data.json")
        .then(res=>res.json())
        .then(data => setAllCategory(data))
    },[])
    return (
        <div className="p-5 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-5">
            {
                allCategory.map(category =><Category key={category.id} singleCategory={category}></Category>)
            }
        </div>
    );
};

export default AllCategory;