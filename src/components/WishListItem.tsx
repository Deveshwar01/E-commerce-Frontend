import { server } from "../redux/store";
import { FaTrash } from "react-icons/fa";
import { WishlistItem } from '../types/types';
import { Link } from "react-router-dom";

type WishListItemProps = {
    wishListItem: WishlistItem;
    removeHandler: (id: string) => void;
};
const WishListItem = ({
    wishListItem,
    removeHandler
}: WishListItemProps) => {
    const { photo, productId, name, price} = wishListItem
    return (
        <div className="cart-item">
            <img src={`${server}/${photo}`} alt={name} />
            <article>
                <Link to={`/product/${productId}`}>{name}</Link>
                <span>₹{price}</span>
            </article>
            <button onClick={() => removeHandler(productId)}>
                <FaTrash />
            </button>
        </div>
    )
}

export default WishListItem