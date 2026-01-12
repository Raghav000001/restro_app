import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../context/user.context";
import { useContext } from "react";
import { useSelector } from "react-redux";


function Header() {
  const onlineStatus = useOnlineStatus();

    //  const data =  useContext(UserContext)
    //  console.log(data);
     const {loggedInUser} =  useContext(UserContext)
     
     const cartItems = useSelector((store)=> store.cart.items)
     console.log(cartItems);
     
     
     


  return (
    <header className="sticky top-0 bg-white border-b z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <h2 className="text-2xl font-extrabold text-orange-500">Foodly</h2>
        <nav>
          <ul className="flex items-center gap-5 text-sm text-gray-600">
            <li className="capitalize hover:text-gray-900 cursor-pointer">Home</li>
            <li>
              <Link to={`/about`} className="hover:text-gray-900">
                About
              </Link>
            </li>
            <li className="hover:text-gray-900 cursor-pointer">Contact</li>
            <li className="hover:text-gray-900 cursor-pointer">Feedback</li>
            <li className="hover:text-gray-900 cursor-pointer">cart:({cartItems.length}) </li>
            <li className="hover:text-gray-900 cursor-pointer">  {loggedInUser} </li>
            <li className="font-semibold">{onlineStatus ? "online 🟢" : "offline 🔴"}</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;