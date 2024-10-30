import React from "react";

class Comp_did_upd extends React.Component{
    constructor(){
        super();
        console.log("constructor");
        this.state={name:0}
    }
    componentDidUpdate(preProps,preState,snapshot){
     //componenetdidupdata function jab bhi stste hoga to 
     //componentDidUpdate apane aap call ho jayega

     
    //  console.log("comp..did..updata" ,preState);
      if(this.state.name<10){
        console.log("comp..did..updata" ,preState);
      }
    }
    render(){
        console.log("render")
        return (
            <div>
            <h1>hello{this.state.name}</h1>
            <button onClick={()=>{this.setState({name:this.state.name+1})}}>update</button>
            </div>
            ) ;
           
    }
   
}
export  default  Comp_did_upd