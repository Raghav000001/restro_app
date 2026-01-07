import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";

function Header() {
  const onlineStatus = useOnlineStatus();

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
            <li className="font-semibold">{onlineStatus ? "online 🟢" : "offline 🔴"}</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;