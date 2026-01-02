import RestroCard from "./RestroCard"
import { useState ,useEffect } from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";



function Body(){
  const [data,setData] = useState([]);
  const [search,setSearch] = useState("");
  const [filteredData,setFilteredData] = useState([])


//   const data = restroData
  useEffect(()=>{
    fetchData();

  },[])
 

   const fetchData = async ()=> {
      try { 
        const res= await fetch("http://localhost:3000/0")
        const json = await res.json()
        // console.log(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        const finalData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setData(finalData);
        setFilteredData(finalData);
      } catch (error) { 
         console.log(error,"error in fetchig swiggy api");
      }
   }


 const time = 20;

  if (data.length===0) {
    return <Shimmer/>
  }



    return(
      <main className="main-wrap">
        <div className="controls">
          <button className="btn"
            onClick={()=> {
              const topRated = data.filter(r=> r.info?.avgRating > 4.5)
              setFilteredData(topRated)
            }}
          >Top Rated Restros</button>
         <button
        className="btn"
         onClick={()=> {
             const fastest = data.filter(r=>r.info.sla.deliveryTime<time.toString())
              setFilteredData(fastest)
              console.log(fastest);
              
         }}
        >Fatest delivery</button>

         <input type="text" value={search} onInput={(e)=> setSearch(e.target.value) }  />

         <button
          onClick={()=> {
            const filtered = data.filter((restro)=> restro.info.name.toLowerCase().includes(search.toLowerCase()));
             setFilteredData(filtered);
          }}
          className="btn">
             search
         </button>

        </div>

        <section className="restro-grid">
          {filteredData?.map(res => <Link to={`/menu/${res.info?.id}`} key={res.info?.id}> <RestroCard  data ={res} /></Link> )}
        </section>
      </main>
    )
 }

 export default Body