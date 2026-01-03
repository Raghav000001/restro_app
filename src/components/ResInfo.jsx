import { useParams } from "react-router-dom";
import useFetchDataById from "../hooks/useFetchDataById";
import useRestroMenu from "../hooks/useRestroMenu";

const ResInfo = () => {
  const { id } = useParams();
  const data = useFetchDataById(id) || {};
  const menu = useRestroMenu(id) || {};

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
        <div className="w-24 h-24 rounded-md bg-gray-100 flex items-center justify-center text-gray-400">Image</div>
        <div>
          <h1 className="text-2xl font-bold">{data.name}</h1>
          <div className="mt-1 text-sm text-gray-600">Rating: <span className="font-semibold">{data.avgRating}</span></div>
        </div>
      </div>

      <div className="mt-6">
        {Object.entries(menu).map(([categoryName, items]) => (
          <div key={categoryName} className="mt-4">
            <h2 className="text-lg font-semibold">{categoryName}</h2>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {items.map((item) => (
                <div key={item.id || item.card?.info?.id || item.name} className="p-3 bg-white rounded-md shadow-sm flex justify-between">
                  <div className="text-sm text-gray-800">{item.name || item.card?.info?.name}</div>
                  <div className="text-sm text-gray-600">{item.price || item.card?.info?.price}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResInfo;
