import { CDN_URL } from "../utils/constants";


function RestroCard(props) {
  const {data} = props;
  const {info} = data ;
  const {avgRating, name, cuisines, costForTwo, cloudinaryImageId} = info

  const image = CDN_URL+cloudinaryImageId
  console.log(image);
  

  return(
    <article className="restro-card">
      <img className="restro-image" src={image} alt={name} />
      <h3>{name}</h3>
      <div className="meta">
        <div className="rating">{avgRating}</div>
        <div className="cost">{costForTwo}</div>
      </div>
      <p className="cuisines">{Array.isArray(cuisines) ? cuisines.join(", ") : cuisines}</p>
    </article>
  )
}

export default RestroCard;