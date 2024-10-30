import React from "react";

class Comp_didMount extends React.Component{
    constructor(){
        super();
        console.log("constructor");
        this.state={name:"prince"}
    }
    componentDidMount(){
        //ye function kewal sirf mount hoga tab chalega 
        //updata hone par nahi chalega
        console.log("comp..did..mount");
    }
    render(){
        console.log("render")
        return (
            <div>
            <h1>hello{this.state.name}</h1>
            <button onClick={()=>{this.setState({name:"kumar"})}}>update</button>
            </div>
            ) ;
           
    }
   
}
export  default  Comp_didMount