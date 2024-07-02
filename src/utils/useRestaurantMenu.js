import { useState } from "react";
import { Menu_URl } from "./constant";
const useRestaurantMenu=(resId)=>{
    const [resInfo, setresInfo]= useState(null);

    // useState(()=>{
    //     fetchData();
    // },[])
 
    const fetchData = async ()=>{
        const data = await fetch(Menu_URl+resId)
        const json=await data.json()
        setresInfo(json.data)
    }

    useState(()=>{
        fetchData();
    },[])
    return resInfo ;

}
export default useRestaurantMenu;