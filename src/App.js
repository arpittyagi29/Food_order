{/* <div id="parent">
  <div id="child">
    <h1>h1 heading</h1>
  </div>
  ReactElement(Object)=>HTML(Browser UnderStand)
</div> */}
import React , {lazy, Suspense} from "react"
import ReactDOM from "react-dom/client"
import MainPage from "./component/MainPage";
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import About from "./component/About";
import Contactus from "./component/Contactus";
import Error from "./component/Error";
import Body from "./component/Body";
import Menu from "./component/Menu";
import Shimmer from "./component/Shimmer";


// const heading=React.createElement(
//     "div",
//     {id:"parent"},
//     [React.createElement(
//         "div",
//         {id:"child"},
//         [React.createElement("h1",{id:"heading"},"Helle from H1"),React.createElement("h2",{id:"heading2"},"Helle from H2")])
//     ,
//     React.createElement(
//         "div",
//         {id:"child1"},
//         [React.createElement("h1",{id:"heading"},"Helle from H1"),React.createElement("h2",{id:"heading2"},"Helle from H2")])
// ])  

// //const heading = React.createElement("h1",{id:"heading"},"Hello world react")
// console.log(heading) //javscript object\

// const Head1=(
//  <h2>
//   Calling composite function
//   </h2>
// );
// const HeadingComp=()=>(
//   <div>
//    {Head1}
//    <h1>Hello Functional component</h1>
//   </div>
// )
// const jsxheading=<h1>jsx Heading</h1>
// console.log(jsxheading)
// const root =ReactDOM.createRoot(document.getElementById("root"))
// root.render(<HeadingComp/>)

// const Applayout=()=>{
//   return (
//     <div className="App">
//     <Header/>
//     <Body/>
//    </div>
//   )
// }

// const Mainpage=()=>{
//   return (
//       <div className="App">
//       <Header/>
//       <Outlet/>
//      </div>
//     )
// }
const Gorcery =lazy(()=>import("./component/Grocery"))
 const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<MainPage/>,
    children:[
      {path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },{
        path:"/contact",
        element: <Contactus/>
      },{
        path:"/grocery",
        element: <Suspense fallback={<Shimmer/>}><Gorcery/></Suspense>
      },
      {
        path:"/Restuarant/:resId",
        element:<Menu/>
      }
    ],
    errorElement:<Error/>
  }
 ])
 const root =ReactDOM.createRoot(document.getElementById("root"))
 root.render(<RouterProvider router={appRouter}/>)