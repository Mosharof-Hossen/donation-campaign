
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonationCart = ({ donation }) => {
    const {id,title, picture,price, background, card_bg, category_bg, category } = donation;
    return (
        <div className="card lg:card-side bg-base-100 border rounded" style={{backgroundColor:card_bg}}>
            <figure className='md:h-full md:w-2/5 w-full'>
                <img className='h-full w-full'
                    src={picture}
                    alt="Album" />
            </figure>
            <div className="p-5 space-y-1">
                <p className='w-fit px-2 py-1 rounded' style={{backgroundColor:category_bg , color:background}}>{category}</p>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className='text-base font-semibold' style={{color:background}}>${price}</p>
                <Link to={`/view-details/${id}`}><button className='px-2 mt-1 py-1 text-white rounded' style={{backgroundColor:background}}>View Details</button></Link>
            </div>
        </div>
    );
};

DonationCart.propTypes = {
    donation: PropTypes.object.isRequired,
};

export default DonationCart;