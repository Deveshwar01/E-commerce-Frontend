import { FaHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { server } from "../redux/store";
import { CartItem } from "../types/types";
import { WishlistItem } from "../types/types";

type ProductsProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: (cartItem: CartItem) => string | undefined;
  WishListHandler: (wishlistItem: WishlistItem) => void; // Update the return type to void
};

const ProductCard = ({
  productId,
  price,
  name,
  photo,
  stock,
  handler,
  WishListHandler,
}: ProductsProps) => {
  return (
    <>
      <div className="relative sm:m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
          <img className="object-cover " src={`${server}/${photo}`} alt="product image" />
          <span className="absolute top-0 left-[230px] sm:left-[250px]  rounded-full   text-center text-4xl font-medium text-red-400"
            onClick={() =>
              WishListHandler({ productId, price, name, photo, stock })
            }
          >

            <FaHeart />
          </span>
        </a>
        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <h5 className="text-xl tracking-tight text-slate-900">{name}</h5>
          </a>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-slate-900"> ₹{price}</span>
              <span className="text-sm text-slate-900 line-through">₹699</span>
            </p>
          </div>
          <a href="#" className="flex items-center gap-5 justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={() =>
              handler({ productId, price, name, photo, stock, quantity: 1 })
            }
          >
            <FaCartPlus />
            Add to cart</a>
        </div>
      </div>

    </>
  );
};

export default ProductCard;
