import React from 'react';
import errorImage from '../../../Images/404-Page.png'
const NotFound = () => {
    return (
        <div>
            <img src={errorImage} className='w-100' alt="" />
        </div>
    );
};

export default NotFound;