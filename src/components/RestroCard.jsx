import { CDN_URL } from "../utils/constants";

function RestroCard(props) {
  const { data } = props;
  const { info } = data || {};
  const { avgRating, name, cuisines, costForTwo, cloudinaryImageId } = info || {};

  const image = CDN_URL + (cloudinaryImageId || "");

  return (
    <article className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1">
      <img className="w-full h-40 rounded-md object-cover bg-gray-100" src={image} alt={name} />
      <h3 className="mt-3 text-lg font-semibold text-gray-900">{name}</h3>
      <div className="flex items-center gap-3 mt-2 text-sm text-gray-600">
        <div className="bg-green-50 text-green-700 px-2 py-1 rounded-md font-bold text-xs">{avgRating}</div>
        <div className="text-gray-800 font-semibold">{costForTwo}</div>
      </div>
      <p className="text-sm text-gray-500 mt-2">{Array.isArray(cuisines) ? cuisines.join(", ") : cuisines}</p>
    </article>
  );
}

export default RestroCard;