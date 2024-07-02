import { useState,useEffect } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineState from "../utils/useOnlineState";
const Header =()=>{
 // let btnName="Login"
let [btnName,setbtnName]=useState("Login")
// console.log("Header render")
const onlineStatus=useOnlineState();
useEffect(()=>{
// console.log("UseEffect")
},[btnName])

    return (
      <div className="flex justify-between bg-purple-300 shadow-lg">
       <div className="logo-container">
         <img className="w-20 m-5" src={LOGO_URL}/>
       </div>
       <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online - Status {onlineStatus?"✅" : "🔴"}</li>
          <li className="px-4"><Link to="/" className="home">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"> <Link to="/contact">Contact Us</Link></li>
          <li className="px-4"> <Link to="/grocery">Grocery</Link></li>
          <li className="px-4"> Cart </li>
          <button className="login"
          onClick={()=>{
            btnName === "Login" ? setbtnName("LogOut"):setbtnName("Login")
          }}
          >{btnName}</button>
        </ul>
       </div>
      </div>
    )
  }


export default Header;