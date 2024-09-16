import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/userName";

function header() {
  return (
    <header className="font-pizza flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast ReactPizza co.
      </Link>
      <SearchOrder />

      <UserName />
    </header>
  );
}

export default header;
