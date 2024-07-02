import React from "react"

class UserClass extends React.Component{
    constructor(props){
         super(props)
        this.state={
            userinfo:{
                name:"Dummy",
                location:"default",
                avatar_url:""
            }
        }
    //  console.log(this.props.name + "Constructor")  
    }
    async componentDidMount(){
       // console.log(this.props.name + "Component")
       const data= await fetch("https://api.github.com/users/arpittyagi29")
       const json=await data.json();
       this.setState({
        userinfo:json,
       })
       console.log(json)
    }
    componentDidUpdate(){
        console.log("DId Update call")
    }
    componentWillUnmount(){
        console.log("Will Unmount")
    }


   render(){
    //const {name,location}=this.props;
   // console.log(this.props.name + "Render")
   const {name,location,avatar_url}=this.state.userinfo;
    return(
        <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Twitter : *********</h2>
        </div>
    )
   }   
}
export default UserClass;