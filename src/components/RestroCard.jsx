function RestroCard(props) {
  // console.log(props);
  // object de-structure
  const {data} = props;
//   console.log(data);
  const {info} = data;
  console.log(info);
  
  const {avgRating,name,cuisines,costForTwo} = info;

  
//   const {name,price,rating,cuisines,image,deliveryTime} = data;
  
     return(
      <div>
          <h1>{name}</h1>
          <p>{costForTwo}</p>
          <p>{avgRating}</p>
          <p>{cuisines.join(", ")}</p>
      </div>
     )
 }

 export default RestroCard;