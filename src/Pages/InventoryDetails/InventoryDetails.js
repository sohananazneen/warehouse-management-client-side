import { Link, useParams } from 'react-router-dom';
import useInventoryDetails from '../../hooks/useInventoryDetails';

const InventoryDetails = () => {
    const { id } = useParams();
    const [inventory] = useInventoryDetails(id);
    return (
        <div>
            <h2>You are about to book: {inventory.name}</h2>
            <div className='text-center'>
                <Link to={`/delivered/${id}`}>
                    <button className='btn btn-primary'>Delivered</button>
                </Link>
            </div>
        </div>
    );
};

export default InventoryDetails;