//functional component ke undar ek useeffact hota hai
//jo sare life cycle ka kam rarta hai ---(componentwillmount ,componentwillunmount,
//shouldcompnenetmount ,render etc)
//useeffact state and props dono par work krat hai
import React,{useEffect,useState}from 'react'
function Useeffact(){
    const [data,setdata]=useState(0)
useEffect(()=>{
    //work like component did mount jab life cycle ka first phase 
    //jab kuch banta hai means reload hota hai
   console.log("hii")
})
    return (
        <div>
            <h1>useeffact in react functional componenet {data}</h1>
            <button onClick={()=>{
                //ye updata hone par chal raha hai like componentdidupdata life cycle 
                //useeffact ek se jayeda bhi use kar skte hai
                //hooks ko classcomp. ke undar nahi use karskte hai
                setdata(data+1)
            }} >update</button>
        </div>
    )
}
export default Useeffact;