import  {restroData}  from "../store/data"
import RestroCard from "./RestroCard"
import { useState } from "react"


function Body(){
  const [data,setData] = useState(restroData);
//   const data = restroData

 const time = 25
  
  
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
          data.map(res => <RestroCard key={res.id} data ={res} />)
        }
        
         </>
    )
 }

 export default Body