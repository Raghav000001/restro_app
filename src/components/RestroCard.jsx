function RestroCard(props) {
  // console.log(props);
  // object de-structure
  const {data} = props;
  const {name,price,rating,cuisines,image} = data;
  
     return(
      <div>
          <img src={image} alt="" />
          <h1>{name}</h1>
          <p>{price}</p>
          <p>{rating}</p>
          <p>{cuisines.join(", ")}</p>
      </div>
     )
 }

 export default RestroCard;