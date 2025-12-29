import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";

const ResInfo = () => {
   const [data,setData] = useState({})
   const [menu,setMenu] = useState({})

   const {name,avgRating} = data;

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
         // console.log(finalData);
        const restro =  finalData.filter((res)=> res.info.id === id)
      //   console.log(restro);
        setData(restro[0].info);
        
        
        //  menu
        const menu  = await fetch(`http://localhost:3500/${id}`)
        const menuJson = await menu.json();
        const finalMenu = menuJson?.menu
        console.log(menuJson);
        setMenu(finalMenu)
      } catch (error) {
         console.log(error,"error in fetchig swiggy api");
      }
   }
   
     
  return (
    // todo => display info like = timings,restro name ,image, ratings
     
    <div>
       
       <div>
          {/* <img src="" alt="" /> */}
          <h1>{avgRating}</h1>
          <h1>{name}</h1>
       </div>
      {/* menu */}
   
   

   {/* todo => this code has bug , destructure  */}
      {
       Object.entries(menu).map(([categoryName,items])=> (
          <div key={categoryName}>
            <h2>{categoryName}</h2>
            {
                items.map((item)=> (
                   <div>
                      <p>{item.name}</p>
                   </div>
                ))
            }
          </div>
       ))
     } 
    </div>
  )
}

export default ResInfo;
