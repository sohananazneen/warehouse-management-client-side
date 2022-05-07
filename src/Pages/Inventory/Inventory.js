import React from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { itemId } = useParams();
    return (
        <div>
            <h2>update : {itemId}</h2>
        </div>
    );
};

export default Inventory;