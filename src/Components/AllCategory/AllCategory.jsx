import { useContext, useEffect, useState } from "react";
import Category from "../Category/Category";
import { FilterByInputValue } from "../../App";


const AllCategory = () => {
    const { inputValue,filterFun } = useContext(FilterByInputValue);
    const [allCategory, setAllCategory] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const filtered = allCategory.filter(cata => (cata.category).toLowerCase().includes(inputValue.toLowerCase()));

        if(filtered.length>0){
            setFilteredData(filtered)
        }else{
            setAllCategory(allCategory)
        }
        

    }, [allCategory, inputValue])

    console.log(filteredData);

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => setAllCategory(data))
    }, [])
    return (
        <div className="p-5 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-5">
            {
                filteredData.map(category => <Category key={category.id} singleCategory={category}></Category>)
            }
        </div>
    );
};

export default AllCategory;