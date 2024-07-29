
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ViewDetails = () => {
    const { viewId } = useParams();
    const data = useLoaderData();
    const filteredData = data.find(dt => dt.id == viewId);
    const { title, description, picture, background, price } = filteredData;

    const notify = () => toast("Thanks For Your Donation");
    return (
        <div className='space-y-8'>
            <div
                className="hero h-[500px] rounded mt-12"
                style={{
                    backgroundImage: `url(${picture})`,
                }}>
                {/* <div className=" bg-opacity-60 h-20 flex absolute "></div> */}

                <div className="hero-overlay flex flex-col w-full h-20 mt-auto hero-content ">
                    <div className="w-full  ">
                        <button onClick={notify} className="text-white px-2 py-1 rounded" style={{ backgroundColor: background }}>Donate ${price}</button>
                        <ToastContainer />
                    </div>
                </div>

            </div>
            <div className='space-y-4'>
                <h2 className='text-4xl font-bold'>{title}</h2>
                <p className='text-base text-justify'>{description}</p>
            </div>
        </div>
    );
};

export default ViewDetails;