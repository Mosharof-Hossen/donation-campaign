
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetails = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const filteredData = data.find(dt=>dt.id == id);
    console.log(id);
    console.log(filteredData);
    return (
        <div>
            viewDetails
        </div>
    );
};

export default ViewDetails;