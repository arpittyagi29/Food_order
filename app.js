{/* <div id="parent">
  <div id="child">
    <h1>h1 heading</h1>
  </div>
  ReactElement(Object)=>HTML(Browser UnderStand)
</div> */}


const heading=React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{id:"heading"},"Helle from H1"),React.createElement("h2",{id:"heading2"},"Helle from H2")])
    ,
    React.createElement(
        "div",
        {id:"child1"},
        [React.createElement("h1",{id:"heading"},"Helle from H1"),React.createElement("h2",{id:"heading2"},"Helle from H2")])
])  

//const heading = React.createElement("h1",{id:"heading"},"Hello world react")
console.log(heading) //javscript object
const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)