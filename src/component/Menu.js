import { useState,useEffect } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import { Menu_URl } from "../utils/constant"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory"
const Menu=()=>{
    // const [resInfo,setresInfo]=useState(null)

    const {resId}=useParams()
    // console.log(resId)

    // useEffect(()=>{
    //    fetchData()
    //   },[])
  
  
    //   const fetchData=async()=>{
    //       const data = await fetch(Menu_URl+resId)
    //       const json=await data.json()
    //     //  console.log(json?.data)
    //     //  console.log(json.data)
    //       setresInfo(json.data)
    //   }

    const [showIndex,setShowIndex]=useState(0);

    const resInfo=useRestaurantMenu(resId)

     if (resInfo===null)  
     return(<Shimmer/>)


      const {name,cuisines,costForTwoMessage}= resInfo?.cards[2]?.card?.card?.info;
   //   const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

      const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
     // console.log(categories)

    return  (
        <div className="text-center">
        <h1 className="font-bold my-4  text-2xl">{name}</h1>
        <p className="p-2 font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
        


        {/* <h1>Menu</h1>
        <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
        <ul>
           {itemCards.map((item)=> <li key={item.card.info.id}>{item.card.info.name}-{"  Rs."}{(item.card.info.price)/100}</li>)}
       </ul> */}
        {categories.map((category,index)=>
          <RestaurantCategory key={category.card?.card?.title} data={category?.card?.card} showItems={index===showIndex?true:false} setShowIndex={(()=>setShowIndex(index))} />
        )}
    
        </div>
      )
}

 export default Menu