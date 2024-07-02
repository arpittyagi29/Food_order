import Header from "./Header"
import Body from "./Body"
import { Outlet } from "react-router-dom";
const MainPage=()=>{
    return (
        <div className="App">
        <Header/>
        <Outlet/>
       </div>
      )
}

export default MainPage