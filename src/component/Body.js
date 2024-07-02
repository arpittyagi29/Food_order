import RestaurantCard , {withPromotedLabel} from "./RestaurantCard";


 import { useState,useEffect } from "react";
 import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { Body_URL } from "../utils/constant";
import useOnlineState from "../utils/useOnlineState";

const Body=()=>{
  const [listofRestuarants,setlistofResturants]=useState([])
  const [filteredRestuarant,setfilteredRestuarant]=useState([])
  const [searchText,setsearchText]=useState("")
  const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);

console.log(listofRestuarants)

  useEffect(()=>{
    fetchData();
    return()=>{
      console.log("Use effect unmout")
    }
  },[])

  const fetchData= async()=>{
    const data=await fetch(Body_URL)
    const json=  await data.json();
    setlistofResturants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setfilteredRestuarant(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  console.log(listofRestuarants)

  const status=useOnlineState();
  console.log(status)
  if(status===false)
    return(
  <h1>You are offline , Please check your Internet</h1>
    )

  if(listofRestuarants.length===0)
    return <Shimmer/>

    return (
     <div className="body">
      <div className="flex">
        <div className="search m-4 p-4 ">
          <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>setsearchText(e.target.value)}/>
          <button className="px-4 py-2 bg-green-100 m-4 rounded-xl" 
          onClick={()=>{
            const filteredRestuarant=listofRestuarants.filter(
              (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
            )
            setfilteredRestuarant(filteredRestuarant)
          }}
          >Search</button>
        </div>
        <div className="search m-4 p-4 border-solid" >
        <button className="px-4 py-2 m-4 bg-red-300 rounded-lg"
         onClick={()=>{
          const filterlist=listofRestuarants.filter((res)=>res.info.avgRating>4);
          setfilteredRestuarant(filterlist)
         }}>
          Top Rated Restaurant</button>
        </div>
       
      </div>
      <div className="flex flex-wrap">
       {filteredRestuarant.map((res)=>
      <Link key={res.info.id} to={"/Restuarant/"+res.info.id}>
        {res.info.isOpen ? (<RestaurantCardPromoted resData={res}/>):(<RestaurantCard  resData={res}/>)}
          </Link>
       )}
      </div>
     </div>
    )
  }
  export default Body;