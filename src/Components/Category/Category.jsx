
import PropTypes from 'prop-types';
import { useState } from 'react';

const Category = ({ singleCategory }) => {
    const { picture, title, category, background, card_bg, category_bg } = singleCategory;
    console.log(singleCategory);

    const bgClass = card_bg + ` card-body ` + ` bg-[${background}]`;
    const textColorClass = category_bg + ` bg-[${background}] ` + ` w-fit px-2 py-1 rounded  ` + " font-semibold ";

    return (
        <div className="card card-compact rounded bg-base-100  shadow">
            <figure>
                <img className='w-full'
                    src={picture}
                    alt="Shoes" />
            </figure>
            <div className={bgClass} style={{}}  >
                <p className={textColorClass} style={{ color: `${background}` }}>{category}</p>
                <h2 className="card-title " style={{ color: `${background}` }}>{title}</h2>

            </div>
        </div>
    );
};

Category.propTypes = {
    singleCategory: PropTypes.object.isRequired,
};

export default Category;