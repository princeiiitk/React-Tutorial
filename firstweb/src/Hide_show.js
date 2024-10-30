import React,{useState} from "react";


function Hide_show(){
    const [status ,setstatuse]=React.useState(false)

    
    return (
        <div>
       {
        status? <h1>hello</h1>:null
       }
       

       {/* <button onClick={()=>{setstatuse(false)}}>Hide</button>
      <button onClick={()=>{setstatuse(true)}}>show</button> */}


      {/* //single button se kaise kare */}
<button onClick={()=>{setstatuse(!status)}}>toggle</button>

      
      </div>

    )
}
export default Hide_show;