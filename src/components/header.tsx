import { Link } from "react-router-dom";
import {
  FaSearch,
  FaSignInAlt,
  FaUser,
  FaSignOutAlt,
  FaHeart,
  FaCartArrowDown,
} from "react-icons/fa";
import { useState } from "react";
import { User } from "../types/types";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";


interface PropsType {
  user: User | null;
}

const Header = ({ user }: PropsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const logoutHandler = async () => {
    try {
      await signOut(auth);
      toast.success("Sign Out Successfully");
      setIsOpen(false);
    } catch (error) {
      toast.error("Sign Out Fail");
    }
  };

  return (
    <nav className="flex flex-row items-center  justify-between p-5 bg-gray-900 text-white  overflow-hidden">
      <div className="hidden sm:flex gap-5 text-white capitalize pl-[50px]  ">
        <Link onClick={() => setIsOpen(false)} to={"/"} className="text-white">
          HOME
        </Link>
        <Link onClick={() => setIsOpen(false)} to={"/"} className="text-white">
          ABOUT-US
        </Link>
        <Link onClick={() => setIsOpen(false)} to={"/"} className="text-white">
          CONTACT US
        </Link>
      </div>
      <div>
        <h1 className="font-sm sm:text-4xl font-bold"> ECOMMERCE -RBU</h1>
      </div>
      <div className="flex gap-3 sm:gap-8  text-xl sm:pr-[60px]"  >
        <Link onClick={() => setIsOpen(false)} to={"/wishlist"}>
          <FaHeart className="text-white" />
        </Link>
        <Link onClick={() => setIsOpen(false)} to={"/search"}>
          <FaSearch className="text-white" />
        </Link>
        <Link onClick={() => setIsOpen(false)} to={"/cart"}>
          <FaCartArrowDown className="text-white" />
        </Link>
        {user?._id ? (
          <>
            <button onClick={() => setIsOpen((prev) => !prev)}>
              <FaUser />
            </button>
            <dialog open={isOpen} className="fixed top-[70px] md:top-[60px] left-[280px] md:left-[1400px] bg-white  p-3 rounded-md border z-10 ">
              <div className="flex flex-col gap-1">
                {user.role === "admin" && (
                  <Link onClick={() => setIsOpen(false)} to="/admin/dashboard">
                    Admin
                  </Link>
                )}
                <Link onClick={() => setIsOpen(false)} to="/orders">
                  Orders
                </Link>
                <button onClick={logoutHandler}>
                  <FaSignOutAlt />
                </button>
              </div>
            </dialog>
          </>
        ) : (
          <Link to={"/login"}>
            <FaSignInAlt />
          </Link>
        )}
      </div>

    </nav>

  );
};

export default Header;
