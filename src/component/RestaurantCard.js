import { CDN_URL } from "../utils/constant";
const RestaurantCard=(props)=>{
    const {resData}=props;
     const {name,cuisines,avgRating,cloudinaryImageId,costForTwo,Id}=resData.info
    return (
      <div className="m-4 p-4 w-[250px] h-[410px] border border-solid border-black bg-green-100 rounded-lg hover:border-red-500">
        <img className="rounded-lg h-[200px] w-screen" src={CDN_URL + cloudinaryImageId} alt="Logo" />
         <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 >{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{Id}</h4>
      </div>
    )
  }

 export const withPromotedLabel=(RestaurantCard)=>{
    return (props)=>{
      return(
        <div>
          <label className="absolute m-4 p-2 bg-gray-600 text-white">Veg</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
  }

  export default RestaurantCard