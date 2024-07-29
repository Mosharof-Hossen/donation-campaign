
import PropTypes from 'prop-types';
import {  useNavigate } from 'react-router-dom';

const Category = ({ singleCategory }) => {
    const {id, picture, title, category, background, card_bg, category_bg } = singleCategory;
    const location = useNavigate()
    const newLocation = (id)=>{
        location(`/view-details/${id}`)
    }

    return (
        <div onClick={()=>newLocation(id)} className="cursor-pointer card card-compact rounded bg-base-100  shadow" style={{ backgroundColor: card_bg }} >
            <figure>
                <img className='w-full'
                    src={picture}
                    alt="Shoes" />
            </figure>
            <div className={"p-5 space-y-4"}  >
                <p className='w-fit h-fit px-2 py-1 rounded' style={{ backgroundColor: category_bg, color: background }}>{category}</p>
                <h2 className="font-bold text-xl" style={{ color: background }}>{title}</h2>

            </div>
        </div>
    );
};

Category.propTypes = {
    singleCategory: PropTypes.object.isRequired,
};

export default Category;