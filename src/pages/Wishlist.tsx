
import { useDispatch, useSelector } from "react-redux";
import WishListItem from "../components/WishListItem";

import { removeWishListItem } from "../redux/reducer/wishListReducer";

import { RootState } from "../redux/store";


const Cart = () => {
  const { wishListItems } =

    useSelector((state: RootState) => state.wishListReducer);

  const dispatch = useDispatch();

  const removeHandler = (productId: string) => {
    dispatch(removeWishListItem(productId));
  };

  return (

    <div className="cart">
      <main>
        {wishListItems.length > 0 ? (
          wishListItems.map((item, idx) => (
            <WishListItem
              key={idx}
              wishListItem={item}
              removeHandler={removeHandler}
            />
          ))
        ) : (
          <h1>No Items Added</h1>
        )}
      </main>
    </div>
  );
};

export default Cart;
