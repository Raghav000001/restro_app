// import  {restroData}  from "../store/data"
import RestroCard from "./RestroCard"
import { useState ,useEffect } from "react"



function Body(){
  const [data,setData] = useState([]);
//   const data = restroData

  useEffect(()=>{
    fetchData();
  
  },[])
 

   const fetchData = async ()=> {
      try { 
        const res= await fetch("http://localhost:3000/0")
        const json = await res.json()
        console.log(json.data.cards[1]?.card?.card.gridElements?.infoWithStyle?.restaurants);
          const finalData = json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setData(finalData);
        
      } catch (error) {
         console.log(error,"error in fetchig swiggy api");
      }
   }

 const time = 25;

  
  
    return(
        <>
        <button
          onClick={()=> {
            const topRated = data.filter(r=> r.rating>4.5)
            setData(topRated)
            console.log(topRated);
            
          }}
        >Top Rated Restros</button>
        <button
         onClick={()=> {
             const fastest = data.filter(r=>r.deliveryTime<time.toString())
             setData(fastest)
         }}
        >Fatest delivery</button>
        {/* <RestroCard name={"dominos"} price={200} ratings={4.5} cuisines={["indian","italian"]} /> */}
        {
          data.map(res => <RestroCard key={res.info.id} data ={res} />)
        }
        
         </>
    )
 }

 export default Body