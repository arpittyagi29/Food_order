import { useState } from "react"

const User=(props)=>{
    const[count]=useState(0)
    console.log(props.name+"Fucntion")
    return(
        <div className="user-card">
            <h2>Name: {props.name}</h2>
            <h2>Location: Moradabad</h2>
            <h2>Twitter : *********</h2>
            <h4>{count}</h4>

        </div>
    )
}

export default User