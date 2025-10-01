import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";


const Orders = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            {
                user.email
            }
            <li>item-1</li>
            <li>item-2</li>
            <li>item-3</li>
            <li>item-4</li>
            <li>item-5</li>
        </div>
    );
};

export default Orders;