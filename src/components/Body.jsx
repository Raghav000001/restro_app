import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import Offline from "./Offline";
import { CardWithLabel } from "./RestroCard";

function Body() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3000/0");
      const json = await res.json();
      const finalData =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setData(finalData || []);
      setFilteredData(finalData || []);
    } catch (error) {
      console.log(error, "error in fetching swiggy api");
    }
  };

  const RestroWithLabel = CardWithLabel(RestroCard);
  const onlineStatus = useOnlineStatus();
  const time = 20;

  if (onlineStatus === false) {
    return <Offline />;
  }

  if (!data || data.length === 0) {
    return <Shimmer />;
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <button
          className="px-4 py-2 bg-white border rounded-lg shadow-sm text-sm font-semibold hover:shadow transition"
          onClick={() => {
            const topRated = data.filter((r) => r.info?.avgRating > 4.5);
            setFilteredData(topRated);
          }}
        >
          Top Rated Restros
        </button>

        <button
          className="px-4 py-2 bg-white border rounded-lg shadow-sm text-sm font-semibold hover:shadow transition"
          onClick={() => {
            const fastest = data.filter(
              (r) => r.info.sla.deliveryTime < time.toString()
            );
            setFilteredData(fastest);
          }}
        >
          Fastest delivery
        </button>

        <input
          className="px-3 py-2 border rounded-lg text-sm flex-1 min-w-50"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search restaurants"
        />

        <button
          onClick={() => {
            const filtered = data.filter((restro) =>
              restro.info.name.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredData(filtered);
          }}
          className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-semibold"
        >
          Search
        </button>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredData?.map((res) => (
          <Link
            to={`/menu/${res.info?.id}`}
            key={res.info?.id}
            className="block"
          >
            {/* logic = res.info.isOpen */}
            {res.info.isOpen ? (
              <RestroWithLabel data={res} />
            ) : (
              <RestroCard data={res} />
            )}
          </Link>
        ))}
      </section>
    </main>
  );
}

export default Body;
