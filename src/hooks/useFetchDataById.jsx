import React, { useEffect, useState } from 'react'

const useFetchDataById = (id) => {
   const [data,setData] = useState({})


      useEffect(()=> {
         fetchData()
      },[])
  
       const fetchData = async ()=> {
      try { 
        const res= await fetch("http://localhost:3000/0")
        const json = await res.json()
        console.log(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        const finalData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        const restro =  finalData.filter((res)=> res.info.id === id)
        setData(restro[0].info);
      
      } catch (error) {
         console.log(error,"error in fetchig swiggy api");
      }
   }

    return data
}

export default useFetchDataById
