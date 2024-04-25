import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Skeleton } from "../components/loader";
import ProductCard from "../components/product-card";
import { useLatestProductsQuery } from "../redux/api/productAPI";
import { addToCart } from "../redux/reducer/cartReducer";
import { addToWishList } from "../redux/reducer/wishListReducer";
import { CartItem } from "../types/types";
import { WishlistItem } from '../types/types'
import Swiper from "../components/Swiper";
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer";

const Home = () => {
  const { data, isLoading, isError } = useLatestProductsQuery("");

  const dispatch = useDispatch();

  const addToCartHandler = (cartItem: CartItem) => {
    if (cartItem.stock < 1) return toast.error("Out of Stock");
    dispatch(addToCart(cartItem));
    toast.success("Added to cart");
  };
  
  const addtoWishListHander = (wishlistItem: WishlistItem) => {
    dispatch(addToWishList(wishlistItem))
    toast.success("Added to WishList");
  }

  if (isError) toast.error("Cannot Fetch the Products");

  return (
    <>
      < Swiper />
      <div className="home sm:mt-[3rem] p-5  sm:px-16 ">
        <h1>
          Latest Products
          <Link to="/search" className="findmore">
            More
          </Link>
        </h1>
      </div>
      <main className="grid grid-cols-1 md:grid-cols-4  px-10">
        {isLoading ? (
          <Skeleton width="80vw" />
        ) : (
          data?.products.map((i) => (
            <ProductCard
              key={i._id}
              productId={i._id}
              name={i.name}
              price={i.price}
              stock={i.stock}
              handler={addToCartHandler}
              photo={i.photo}
              WishListHandler={addtoWishListHander}
            />
          ))
        )}
      </main>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
