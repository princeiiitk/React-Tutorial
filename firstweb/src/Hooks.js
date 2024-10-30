import React,{useState} from 'react'
function Hooks(){
    //hoos means functional component me life cycle ,
    //pure component etc prop. nahi hoti to use prop. ko 
    //access karene ke liye hooks 
    //hamesa hooks ke aage use... hota hai
    const [data,setdata]=useState("anita")
    return (
        <div className='aaa'>
            <h1>{data}</h1>

        </div>
    )
    
}
export default Hooks;