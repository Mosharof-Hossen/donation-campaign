
import PropTypes from 'prop-types';

const DonationCart = ({ donation }) => {
    const { picture } = donation;
    return (
        <div className="card lg:card-side bg-base-100 border rounded">
            <figure>
                <img className='h-full'
                    src={picture}
                    alt="Album" />
            </figure>
            <div className="">
                <h2 className="">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                
            </div>
        </div>
    );
};

DonationCart.propTypes = {
    donation: PropTypes.object.isRequired,
};

export default DonationCart;