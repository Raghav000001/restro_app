import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";

const ResInfo = () => {
   const [data,setData] = useState({})

   const params = useParams();
   console.log(params);
   
   
   // const id = params.id
   const {id} = useParams();

  useEffect(() => {
      fetchData();
  }, [])
  

   const fetchData = async ()=> {
      try { 
        const res= await fetch("http://localhost:3000/0")
        const json = await res.json()
        console.log(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        const finalData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        const restro =  finalData.filter((res)=> res.info.id === id)
        // console.log(restro);
        setData(restro[0].info);
        
        
        //  menu
        const menu = await fetch(`http://localhost:3500/${id}`)
        const menuJson = await menu.json()
      //   console.log(menuJson);
        
        

      } catch (error) {
         console.log(error,"error in fetchig swiggy api");
      }
   }
   
     
  return (
    // todo => display info like = timings,restro name ,image, ratings
     
    <div>
       
       <div>
          <img src="" alt="" />
          <h1>{data.avgRating}</h1>
       </div>

    </div>
  )
}

export default ResInfo;
